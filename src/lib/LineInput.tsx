import React from 'react';

export default function LineInput({ Input, label, name, error, ...rest }) {
  return (
    <div className="lineInput">
      <label className="lineInput--label" htmlFor={name}>{label}</label>
      <Input name={name} className={error ? 'form_input_error' : ''} {...rest} />
    </div>
  )
}
