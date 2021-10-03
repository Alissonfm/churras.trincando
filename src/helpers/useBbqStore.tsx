import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// import BBQ from 'models/bbq'
// const useBbqStore: Array<BBQ> = () => {
const useBbqStore: any = () => {
    const [state, setState] = useState([])
    const bbqStore = useSelector((state: any) => state.bbq)

    useEffect(() => {
        setState(() => bbqStore)
    }, [bbqStore])

    return state
}

export default useBbqStore