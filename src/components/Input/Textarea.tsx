import React, { TextareaHTMLAttributes } from 'react';

import './styles.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  onChange: any
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  label,
  name,
  onChange,
  ...otherProps
}) => {
  const handleChange = (event: any) => onChange(event.target.value)
  return (
    <div className="inputWrapper">
      <label htmlFor={name}>{label}</label>
      <textarea rows={4} {...otherProps} className="input" onChange={handleChange} />
    </div>
  );
};

export default Textarea;