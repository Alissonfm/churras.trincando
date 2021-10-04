import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store'
import service from 'service'
import { BBQ } from 'models'

export interface bbqStoreHook {
	getEvents: Function,
	selectEvent: Function,
	addEvent: Function,
	updateEvent: Function,
}

const useBbqStore = (): bbqStoreHook => {
	const dispatcher = useDispatch<AppDispatch>()

	const handleAddEvent = useCallback((newEvent: BBQ) => {
			dispatcher({ type: 'bbq/addEvent', payload: newEvent })
	}, [dispatcher])

	const queryEvents = useCallback(() => {
		service.getEvents().then((response) => {
			console.log('Events store charge: ', response)
			dispatcher({ type: 'bbq/setEvents', payload: response.body })
		})
	}, [dispatcher])

	const handleSelect = useCallback((event: BBQ) => {
			dispatcher({ type: 'bbq/selectEvent', payload: event})
	}, [dispatcher])

	const handleUpdate = useCallback((event: BBQ) => {
		dispatcher({ type: 'bbq/updateEvent', payload: event })
	}, [dispatcher])

	return {
		addEvent: handleAddEvent,
		selectEvent: handleSelect,
		getEvents: queryEvents,
		updateEvent: handleUpdate
	}
}

export default useBbqStore