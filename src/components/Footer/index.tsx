import React from 'react'
import trincaLogo from 'assets/images/trinca-logo.svg'
import Container from 'components/Container'

import './styles.scss'

const Footer: React.FC = () => {

  return (
    <div className="footer">
      <Container className="footer-container">
        <img alt="Trinca" src={trincaLogo} />
      </Container>
    </div>
  )
}

export default Footer