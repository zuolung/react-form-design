import React, { useState, useContext, useEffect, cloneElement, isValidElement, useMemo } from "react"
import FormContext from "./formContext"
import Label from './label'
import Message from './message'
import './formItem.less'

const prefixCls = 'react-form-design-formItem'

export default function FormItem({
  name,
  children,
  label,
  height = 50,
  labelWidth,
  required = false,
  rules = {},
  trigger = 'onChange',
  validateTrigger = 'onChange',
  labelClassName = '',
  requiredClassName = '',
  controllClassName = '',
  className = '',
  requiredIcon = '',
  messageShow = 'all',
}) {
  const formInstance = useContext(FormContext)
  const { registerValidateFields, dispatch, unRegisterValidate } = formInstance
  const [, forceUpdate] = useState({})
  const onStoreChange = useMemo(() => {
    const onStoreChange = {
      changeValue() {
        forceUpdate({})
      },
    }
    return onStoreChange

  }, [formInstance])

  useEffect(() => {
    /* 注册表单 */
    name && registerValidateFields(name, onStoreChange, { ...rules, required })
    return function () {
      name && unRegisterValidate(name)
    }
  }, [onStoreChange])

  /* 使表单控件变成可控制的 */
  const getControlled = (child) => {
    const mergeChildrenProps = { ...child.props }
    if (!name) return mergeChildrenProps
    /* 改变表单单元项的值 */
    const handleChange = (e) => {
      const value = Object.prototype.toString.call(e) === '[Object, object]' ? e.target.value : e
      dispatch({ type: 'setFieldsValue' }, name, value)
    }
    mergeChildrenProps[trigger] = handleChange
    if (required || rules) {
      mergeChildrenProps[validateTrigger] = (e) => {
        /* 当改变值和验证表单，用统一一个事件 */
        if (validateTrigger === trigger) {
          handleChange(e)
        }
        /* 触发表单验证 */
        dispatch({ type: 'validateFieldValue' }, name)
      }
    }
    /* 获取 value */
    mergeChildrenProps.value = dispatch({ type: 'getFieldValue' }, name) || ''
    return mergeChildrenProps
  }
  let renderChildren
  if (isValidElement(children)) {
    renderChildren = cloneElement(children, getControlled(children))
  } else {
    renderChildren = children
  }

  return (
    <div className={`${prefixCls} ${className}`}>
      <Label
        height={height}
        label={label}
        labelWidth={labelWidth}
        required={required}
        className={labelClassName}
        requiredClassName={requiredClassName}
        requiredIcon={requiredIcon}
      />
      <div className={`${prefixCls}-controll ${controllClassName}`}>
        {renderChildren}
        <Message
          name={label}
          messageShow={messageShow}
          {...dispatch({ type: 'getFieldModel' }, name)}
        />
      </div>
    </div>
  )
}