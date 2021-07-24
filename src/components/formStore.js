import { unstable_batchedUpdates } from 'react-dom'
/* 对外接口  */
const formInstanceApi = [
  'setCallback',
  'dispatch',
  'registerValidateFields',
  'resetFields',
  'setFields',
  'setFieldsValue',
  'getFieldsValue',
  'getFieldValue',
  'validateFields',
  'submit',
  'unRegisterValidate'
]
const isReg = (value) => value instanceof RegExp

class FormStore {
  constructor(forceUpdate, defaultFormValue = {}) {
    this.FormUpdate = forceUpdate     /* 为 Form 的更新函数，目前没有用到 */
    this.model = {}                   /* 表单状态层 */
    this.control = {}                 /* 控制每个 formItem 的控制器  */
    this.isSchedule = false           /* 开启调度 */
    this.callback = {}                /* 存放监听函数 callback */
    this.penddingValidateQueue = []   /* 批量更新队列 */
    this.defaultFormValue = defaultFormValue /* 表单初始化的值 */
  }
  /* 提供操作form的方法 */
  getForm() {
    return formInstanceApi.reduce((map, item) => {
      map[item] = this[item].bind(this)
      return map
    }, {})
  }
  /* 创建一个验证模块 */
  static createValidate(validateModal) {
    const { value, rule, required, message } = validateModal
    return {
      value,
      rule: rule || (() => true),
      required: required || false,
      message: message || '',
      status: 'pendding'
    }
  }
  /* 处理回调函数 */
  setCallback(callback) {
    if (callback) this.callback = callback
  }
  /* 触发事件 */
  dispatch(action, ...arg) {
    if (!action && typeof action !== 'object') return null
    const { type } = action
    if (~formInstanceApi.indexOf(type)) {
      return this[type](...arg)
    } else if (typeof this[type] === 'function') {
      return this[type](...arg)
    }
  }
  /* 注册表单单元项 */
  registerValidateFields(name, control, model) {
    if (this.defaultFormValue[name]) model.value = this.defaultFormValue[name] /* 如果存在默认值的情况 */
    const validate = FormStore.createValidate(model)
    this.model[name] = validate
    this.control[name] = control
  }
  /* 卸载注册表单单元项 */
  unRegisterValidate(name) {
    delete this.model[name]
    delete this.control[name]
  }
  /* 通知对应FormItem更新 */
  notifyChange(name) {
    const controller = this.control[name]
    if (controller) controller?.changeValue()
  }
  /* 重置表单 */
  resetFields() {
    Object.keys(this.model).forEach(modelName => {
      this.setValueClearStatus(this.model[modelName], modelName, null)
    })
  }
  /* 设置一组字段状态	  */
  setFields(object) {
    if (typeof object !== 'object') return
    Object.keys(object).forEach(modelName => {
      this.setFieldsValue(modelName, object[modelName])
    })
  }
  /* 设置表单值 */
  setFieldsValue(name, modelValue) {
    const model = this.model[name]
    if (!model) return false
    if (toString.call(modelValue) === '[Object, object]') { /* 设置表单项 */
      const { message, rule, value } = modelValue
      if (message) model.message = message
      if (rule) model.rule = rule
      if (value) model.value = value
      model.status = 'pendding'
      this.validateFieldValue(name, true)     /* 如果重新设置了验证规则，那么重新验证一次 */
    } else {
      this.setValueClearStatus(model, name, modelValue)
    }
  }
  /* 复制并清空状态 */
  setValueClearStatus(model, name, value) {
    model.value = value
    model.status = 'pendding'
    this.notifyChange(name)
  }

  /* 获取表单数据层的值 */
  getFieldsValue() {
    const formData = {}
    Object.keys(this.model).forEach(modelName => {
      formData[modelName] = this.model[modelName].value
    })
    return formData
  }
  /* 获取表单模型 */
  getFieldModel(name) {
    const model = this.model[name]
    return model ? model : {}
  }
  /* 获取对应字段名的值 */
  getFieldValue(name) {
    const model = this.model[name]
    if (!model && this.defaultFormValue[name]) return this.defaultFormValue[name] /* 没有注册，但是存在默认值的情况 */
    return model ? model.value : null
  }
  /* 单一表单单元项验证 */
  validateFieldValue(name, forceUpdate = false) {
    const model = this.model[name]
    /* 记录上次状态 */
    const lastStatus = model.status
    if (!model) return null
    const { required, rule, value } = model
    let status = 'resolve'
    if (required && !value && value !== 0) {
      status = 'reject'
    }
    if (value || value === 0) {
      if (isReg(rule)) {     /* 正则校验规则 */
        status = rule.test(value) ? 'resolve' : 'reject'
      } else if (typeof rule === 'function') { /* 自定义校验规则 */
        rule(value, (message) => {
          this.model[name].message = message
          status = !message ? 'resolve' : 'reject'
        })
      }
    }
    model.status = status
    if (lastStatus !== status || forceUpdate) {
      const notify = this.notifyChange.bind(this, name)
      this.penddingValidateQueue.push(notify)
    }
    this.scheduleValidate()
    return status
  }
  /* 批量调度验证更新任务 */
  scheduleValidate() {
    if (this.isSchedule) return
    this.isSchedule = true
    Promise.resolve().then(() => {
      unstable_batchedUpdates(() => {
        do {
          let notify = this.penddingValidateQueue.shift()
          notify && notify()
        } while (this.penddingValidateQueue.length > 0)
        this.isSchedule = false
      })
    })
  }
  /* 表单整体验证 */
  validateFields(callback) {
    let status = true
    Object.keys(this.model).forEach(modelName => {
      const modelStates = this.validateFieldValue(modelName, true)
      if (modelStates === 'reject') status = false
    })
    callback(status)
  }
  /* 提交表单 */
  submit(cb) {
    this.validateFields((res) => {
      const { onFinish, onFinishFailed } = this.callback
      cb && cb(res)
      if (!res) onFinishFailed && typeof onFinishFailed === 'function' && onFinishFailed() /* 验证失败 */
      onFinish && typeof onFinish === 'function' && onFinish(this.getFieldsValue())     /* 验证成功 */
    })
  }

}

export default FormStore