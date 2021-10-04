import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _map from 'lodash/map'
import { BBQ } from 'models'

import { useBbqStore } from 'hooks'

import Container from 'components/Container'
import Card from 'components/Card'

import './styles.scss'

const Events: React.FC = () => {
  const history = useHistory()
  const { events: storedEvents } = useSelector((state: any) => state.bbq)
  const bbqHook = useBbqStore()
  const [events, updateState] = React.useState<Array<BBQ>>([])

  console.log('Churrasco store: ', storedEvents)

  const openEventDetail = (targetEvent: BBQ) => {
    bbqHook.selectEvent(targetEvent)
    history.push('/event-details')
  } 

  const mappedEvents = () => events.length > 0 ? _map(events, (event) => <Card onClick={() => openEventDetail(event)} key={event.name} eventData={event} />) : []

  const handleAddEventClick = () => {
    history.push('/new-event')
  }

  React.useEffect(() => {
    if( storedEvents.length > 0 ) updateState(() => storedEvents)
  }, [storedEvents])

  React.useEffect(() => {
    if(storedEvents.length <= 0) bbqHook.getEvents()

    //eslint-disable-next-line
  }, [])

  return (
    <div className="page">
      <Container className="events-container">
        {/* <Button onClick={handleAddEventClick}>Novo Churras</Button> */}
        <h2>Agenda de Churras</h2>
        <div className="eventList">
          <button className="newEventCard" onClick={handleAddEventClick}>Criar Churras<span>+</span></button>
          {mappedEvents()}
        </div>
      </Container>
    </div>
  )
}

export default Events