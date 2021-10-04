import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoMdArrowBack, IoIosLogOut } from 'react-icons/io'

import { useUserStore } from 'hooks'
import Container from 'components/Container'

import './styles.scss'

const Header: React.FC = () => {
  const userHooks = useUserStore()
  const history = useHistory()
  const userStore = useSelector((state: any) => state.user)

  console.log('User store on header: ', userStore)
  const { user } = userStore

  const handleGoBack = () => {
    history.goBack()
  }

  const handleLogout = () => {
    userHooks.logout()
  }

  return (
    <header className="header">
      <Container className="header-container">
        <div>
        <button className="back-button" onClick={handleGoBack}> <IoMdArrowBack /> </button>
        {user && <span className="user-name">Olá, {user.name}</span>}
        </div>
        <button className="logout-button" onClick={handleLogout}>
          <IoIosLogOut />
          Sair
        </button>
      </Container>
    </header>
  )
}

export default Header