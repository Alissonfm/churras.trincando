import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppDispatch } from "store/"
import service from 'service'
import { UserStoreType, Guest } from 'models'

import ls from 'helpers/localStorage'

export interface userStoreHookProps {
  store: UserStoreType,
  login: Function,
  logout: Function,
  addGuest: Function
}

const useUserStore = (): userStoreHookProps => {
  const history = useHistory()
  const dispatcher = useDispatch<AppDispatch>()
  const store = useSelector((state: any) => state.user)

  const handleLogin = (user: Guest) => {
    dispatcher({ type: 'user/doLogin', payload: user })
    history.push('/events')
  }

  const handlelogout = () => {
    dispatcher({ type: 'user/logout' })
    ls.remove('user')
  }

  const setGuests = useCallback((guests: Array<Guest>) => dispatcher({ type: 'user/setGuests', payload: guests }), [dispatcher])

  const handleRegister = (newGuest: Guest) => {
    service.registerGuest(newGuest).then((response) => {
      console.log("Guest register response: ", response)
      dispatcher({ type: 'bbq/addGuest', payload: response.body})
    })
  }

  useEffect(() => {
    if(store.guests <= 0) {
      service.getGuests().then((response) => {
        setGuests(response.body)
      })
    }
    // eslint-disable-next-line
  }, [])


  return {
    store,
    login: handleLogin,
    logout: handlelogout,
    addGuest: handleRegister
  }
}

export default useUserStore