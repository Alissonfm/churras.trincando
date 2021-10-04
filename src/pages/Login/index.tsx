import React from 'react'
import { useUserStore } from 'hooks'
import ls from 'helpers/localStorage'
import Container from 'components/Container'
import Input from 'components/Input'
import Button from 'components/Button'

import tricaLogo from 'assets/images/trinca-logo.svg'
import bkgPattern from 'assets/images/bkg-pattern.svg'
import { FormEvent } from 'react-router/node_modules/@types/react'

import service from 'service'

import './styles.scss'

const Login: React.FC = () => {
  const { store, login: doLogin } = useUserStore()
  const [loginState, setState] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleStateChange = (mail: string) => setState(() => mail)

  React.useEffect(() => {
    const userFound = ls.get('user')
    if(userFound) {
      setState(() => userFound)
    }
  }, [])

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    ls.set('user', loginState)
    setError(false)
    setLoading(true)

    const response = await service.auth({ email: loginState, guestList: store.guests })
    setLoading(false)

    console.log('Auth response: ', response)
    if (response.status === 200 ) {
      doLogin(response.body)
    } else {
      setError(true)
    }

    setLoading(false)
  }

  return (
    <div className="page login" style={{ backgroundImage: `url(${bkgPattern})`}}>
      <Container className="login-container">
        <div className="content">
          <div className="presentation">
            <img alt="Trinca" src={tricaLogo} />
          </div>

          <form data-loading={loading} className="form" onSubmit={handleLogin}>
            <h2>Churras.Trincando</h2>
            <h3>Digite seu e-mail abaixo para fazer login e conferir os eventos que te aguardam!</h3>
            <Input error={error} name="email" label="E-mail" value={loginState} onChange={handleStateChange} />

            {error && <span>Deu algo errado, tente o e-mail: alisson@teste.com</span>}

            <Button onClick={handleLogin}>Entrar</Button>
          </form>

        </div>
      </Container>
    </div>
  )
}

export default Login