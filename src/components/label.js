import React from 'react'
import './label.less'

const prefixCls = 'react-form-design'

export default function Label({
  label,
  required,
  requiredClassName,
  requiredIcon,
  className = '',
}) {
  return <div
    className={`${prefixCls}-label ${className}`}
  >
    {required ? (
      <>
        {
          requiredIcon || <span className={requiredClassName} style={{ color: 'red' }} >*</span>
        }
      </>
    ) : null}
    {label}
  </div>
}