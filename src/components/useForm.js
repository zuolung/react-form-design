import React from 'react'
import FormStore from './formStore'

export default function useForm(form, defaultFormValue = {}) {
  const formRef = React.useRef(null)
  const [, forceUpdate] = React.useState({})
  if (!formRef.current) {
    if (form) {
      formRef.current = form  /* 如果已经有 form，那么复用当前 form  */
    } else { /* 没有 form 创建一个 form */
      const formStoreCurrent = new FormStore(forceUpdate, defaultFormValue)
      /* 获取实例方法 */
      formRef.current = formStoreCurrent.getForm()
    }
  }
  return formRef.current
}