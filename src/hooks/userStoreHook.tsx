import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppDispatch } from "store/"

import service from 'service'

interface userHookState {
    user: string,
    password: string,
    logged: boolean,
    logout: Function,
    doLogin: Function
}

const initialUserHookState: userHookState = {
    user: '',
    password: '',
    logged: false,
    logout: () => null,
    doLogin: () => null
}

// const syncronousQueryGuest = async () => await service.getGuests()

const useUserStore = (): userHookState => {
    const dispatcher = useDispatch<AppDispatch>()
    const history = useHistory()

    const handleLogin = useCallback((userData: any) => {
        dispatcher({ type: 'user/doLogin', payload: userData })
        history.push('/events')
    }, [dispatcher, history])


    const [state, setState] = useState(initialUserHookState)
    const userStore = useSelector((state: any) => state.user)

    useEffect(() => {
        setState(() => ({ 
            ...initialUserHookState, 
            ...userStore,
            doLogin: handleLogin
        }))
    }, [userStore, handleLogin])

    const syncronousQuery = async () => {
        const response = await service.getGuests()
        console.log('WHY IT IS NOT ASYNC ', response)
    }

    useEffect(async () => {
        let response
        const syncronousQuery = async () => {
            response = await service.getGuests()
            console.log('WHY IT IS NOT ASYNC ', response)
        }
        syncronousQuery()
        console.log('fuck?????')
    }, [])

    console.log('User store: ', userStore)

    return state
}

export default useUserStore