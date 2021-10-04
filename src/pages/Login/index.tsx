import React from 'react'
import useUserStore from 'hooks/useUserStore'
import ls from 'helpers/localStorage'
import Container from 'components/Container'
import Input from 'components/Input'
import Button from 'components/Button'

import tricaLogo from 'assets/images/trinca-logo.svg'
import { FormEvent } from 'react-router/node_modules/@types/react'

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

  const handleLogin = (event: FormEvent) => {
    console.log('submit event: ', event)
    event.preventDefault()
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
        <form onSubmit={handleLogin}>
          <Input name="email" label="E-mail" value={loginState.user} onChange={(value: string) => handleStateChange('user', value)} />
          <Button onClick={handleLogin}>Login</Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Login