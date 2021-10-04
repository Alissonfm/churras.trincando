import React, { HTMLAttributes } from 'react'

import './styles.scss'

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: string,
    size?: 'small' | 'medium' | 'large',
    className?: string
}

const SIZE_CLASS: any = { small: 'size--sm', medium: 'size--md', large: 'size--lg' }

const Button: React.FC<buttonProps> = (props) => {
    const { variant, size = 'large', className, ...otherProps } = props
    const btnClass = `button ${SIZE_CLASS[size]} ${className}`
    return <button {...otherProps} className={btnClass} />
}

export default Button;