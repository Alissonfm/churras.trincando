import React from 'react'
import useUserStore from 'hooks/useUserStore'
import ls from 'helpers/localStorage'
import Container from 'components/Container'
import Input from 'components/Input'
import Button from 'components/Button'

import tricaLogo from 'assets/images/trinca-logo.svg'

const Login: React.FC = () => {
  const userStore = useUserStore()
  const [loginState, setState] = React.useState({ user: '', password: ''})

  const handleStateChange = (key:string, newValue: string) => setState((currentState) => ({ ...currentState, [key]: newValue }))

  console.log("userStore", userStore)

  React.useEffect(() => {
    const userFound = ls.get('user')

    if(userFound) {
      setState(() => ({ user: userFound, password: '' }))
    }
  }, [])

  const handleLogin = () => {
    ls.set('user', loginState.user)
    userStore.doLogin(loginState)
  }

  return (
    <div className="page login">
      <Container>
        <div className="presentation">
          <img alt="Trinca" src={tricaLogo} />
        </div>
        <div className="form">
          <Input name="user" label="Usuário" value={loginState.user} onChange={(value: string) => handleStateChange('user', value)} />
          <Input type="password" name="password" label="Senha" value={loginState.password} onChange={(value: string) => handleStateChange('password', value)} />
          <Button onClick={handleLogin}>Register</Button>
        </div>
      </Container>
    </div>
  )
}

export default Login