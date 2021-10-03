import React, { InputHTMLAttributes } from 'react'

import './styles.scss'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  onChange: any,

}

const Input: React.FC<inputProps> = (props) => {
  const { name, label, onChange, ...otherProps } = props

  const handleChange = (event: any) => {
    onChange(event.target.value)
  }

  return (
    <div className="inputWrapper">
      { label && <label>{label}</label> }
      <input {...otherProps} className="input" name={name} aria-label={label} onChange={handleChange}/>
    </div>
  )
}

export default Input