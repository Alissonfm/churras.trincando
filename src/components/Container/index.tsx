import React from 'react'

import './styles.scss'

const Container: React.FC<{children: any, className?: string}> = ({ children, className }) => {
    return <div className={`container ${className ?? ''}`}>{children}</div>
}

export default Container;