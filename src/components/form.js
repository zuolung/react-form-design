import React, { useImperativeHandle, forwardRef } from 'react'
import FormContext from './formContext'
import useForm from './useForm'

function Form({
  form,
  onFinish,
  onFinishFailed,
  initValues = {},
  children,
  className = '',
}, ref) {
  const formInstance = useForm(form, initValues)
  const { setCallback, dispatch, ...providerFormInstance } = formInstance

  /* 向 form 中注册回调函数 */
  setCallback({
    onFinish,
    onFinishFailed
  })

  /* Form 能够被 ref 标记，并操作实例。 */
  useImperativeHandle(ref, () => providerFormInstance, [])
  /* 传递 */
  const RenderChildren = <FormContext.Provider value={formInstance} > {children} </FormContext.Provider>

  return <form
    className={className}
    onReset={(e) => {
      e.preventDefault()
      e.stopPropagation()
      formInstance.resetFields() /* 重置表单 */
    }}
    onSubmit={(e) => {
      e.preventDefault()
      e.stopPropagation()
      formInstance.submit()      /* 提交表单 */
    }}
  >
    {RenderChildren}
  </form>
}

export default forwardRef(Form)