import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { userActions, userReducers } from "store/userSlice"

interface userState {
    name: string,
    email: string,
    logged: boolean,
    logout: Function
}

const useUserStore: any = () => {
    // const reducer = userReducer.actions
    console.log("userActions", userActions)
    console.log("userReducers", userReducers)

    const initialUserHookState: userState = {
        name: '',
        email: '',
        logged: false,
        logout: () => null
    }

    const [state, setState] = useState(initialUserHookState)
    const userStore = useSelector((state: any) => state.user)

    useEffect(() => {
        setState(() => userStore)
    }, [userStore])

    return state
}

export default useUserStore