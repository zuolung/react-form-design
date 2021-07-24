import React, { useMemo } from 'react'
import './message.less'

export default function Message({
  status, message, required, name, value, messageShow
}) {
  const config = useMemo(() => {
    let mess = ''
    let color = '#fff'
    let ifShow = true
    if (required && !value && status === 'reject') {
      mess = `${name} 不能为空`
      color = 'red'
    } else if (status === 'reject') {
      mess = message
      color = 'red'
    } else if (status === 'pendding') {
      mess = null
    } else if (status === 'resolve') {
      mess = '校验通过'
      color = 'green'
    }

    if (messageShow === 'success' && status === 'resolve') {
      ifShow = true
    } else ifShow = false
    if (messageShow === 'failed' && status === 'reject') {
      ifShow = true
    } else ifShow = false
    if (messageShow === 'all') ifShow = true
    if (messageShow === 'hidden') ifShow = false

    return {
      color,
      mess,
      ifShow
    }
  }, [status, message, required, name, value, messageShow])

  return <>
    {config.ifShow ? <div className="react-form-design-message" >
      <span style={{ color: config.color }} >{config.mess}</span>
    </div> : ''}
  </>
}