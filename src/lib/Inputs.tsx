import React from 'react';

type CommonProps = {
  name?: string,
  onChange: (arg0: string, arg1: any) => void,
  value?: any,
  placeholder?: string,
}

type InputProps = CommonProps & {
  type?: string,
  children: React.ReactNode,
}

function Input({ type, onChange, name, children, ...rest }: InputProps) {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  }

  return React.createElement('input', { type, id: name, name, onChange: handleChange, ...rest }, children)
}



export function TextInput({ ...props }: InputProps) {
  return <Input type="text" {...props} />
}

export function NumberInput({ onChange, ...props }: InputProps) {
  const handleChange = (name, value) => {
    onChange(name, Number(value));
  }
  return <Input onChange={handleChange} type="number" {...props} />
}

export function DateInput({ ...props }: InputProps) {
  return <Input type="date" {...props} />
}

type SelectProps = {
  options: Array<{ value: any, label: string }>,
}
export function SelectInpt({ name, options, onChange, value }: CommonProps & SelectProps) {
  const handleChange = (e) => {
    onChange(name, e.target.value)
  }
  return (
    <select id={name} name={name} value={value} onChange={handleChange}>
      {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  )
}
