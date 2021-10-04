import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BBQ from 'models/bbq'
import { AppDispatch } from 'store'

import service from 'service'


const useBbqStore: any = () => {
    const dispatcher = useDispatch<AppDispatch>()
    const [state, setState] = useState([])
    const bbqStore = useSelector((state: any) => state.bbq)

    const handleAddEvent = useCallback((newEvent: BBQ) => {
        dispatcher({ type: 'bbq/addEvent', payload: newEvent })
    }, [dispatcher])

    useEffect(() => {
        setState(() => bbqStore)
    }, [bbqStore])

    useEffect(() => {
        service.getEvents().then((response) => {
            console.log('Service response: ', response)
            dispatcher({ type: 'bbq/setEvents', payload: response.body})
        })
    // eslint-disable-next-line
    }, [])

    return {
        events: state,
        addEvent: handleAddEvent
    }
}

export default useBbqStore