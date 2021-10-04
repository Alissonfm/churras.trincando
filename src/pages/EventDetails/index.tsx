import React from 'react'
import _map from 'lodash/map'
import { useBbqStore } from 'hooks'
import { MdDoneAll } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'
import Container from 'components/Container'
import Page from 'components/Page'

import { useSelector } from 'react-redux'

import './styles.scss'

interface GuestItemPops {
  guest: any,
  setPaid: any,
  removeGuest: any
}

const GuestItem: React.FC<GuestItemPops> = ({ guest, setPaid, removeGuest }) => {

  return (
    <div className="list-item">
      <div className="name">
        {guest.name}
      </div>
      <div className="paid">
        <button onClick={setPaid}>
          { guest.paid && <MdDoneAll /> }
          { guest.paid ? 'Pago' : 'Pendente'}
        </button>
      </div>
      <div className="remove">
        <button onClick={removeGuest}>
          <FiTrash2 />
          Remover
        </button>
      </div>
    </div>
  )
}


const EventDetails: React.FC = () => {
  const { selectedEvent } = useSelector((state: any) => state.bbq)
  const bbqHooks = useBbqStore()
  const [event, setState] = React.useState(selectedEvent)

  React.useEffect(() => {
    if(selectedEvent) {
      setState(() => selectedEvent)
    }
  }, [selectedEvent])

  if (!event) return null

  const setPaid = (guest: any) => {
    const uGuest = Object.assign({}, guest)
    uGuest.paid = !guest.paid

    const glcopy = event.guests.concat([])
    const index = glcopy.indexOf(guest)
    glcopy.splice(index, 1, uGuest)
  
    setState((cState: any) => ({ ...cState, guests: glcopy }))
    const updatedEvent = Object.assign({}, { ...event, guests: glcopy })
    bbqHooks.updateEvent(updatedEvent)
  }

  const removeGuest = (guest: any) => {
    const glcopy = event.guests.concat([])
    const index = glcopy.indexOf(guest)
    glcopy.splice(index, 1)

    setState((cState: any) => ({ ...cState, guests: glcopy }))
    bbqHooks.updateEvent(event)
  }

  const mappedGuests = _map(event.guests, (guest) => <GuestItem guest={guest} setPaid={() => setPaid(guest)} removeGuest={() => removeGuest(guest)} /> )

  return (
    <Page>
      <Container>
        <div className="event-details">
          <h3 className="date">{event.date}</h3>
          <h2>{event.name}</h2>
          <h3>{event.description}</h3>
          <h4>{event.obs}</h4>
          <div className="values">
            <span>{event.normalValue}</span>
            <span>{event.drinkValues}</span>
          </div>
        </div>
        <div className="guest-list">
          <div className="list-header">
            <span>NOME</span>
            <span>Contribuição</span>
            <span></span>
          </div>
          <div className="list">
            {mappedGuests}
          </div>
        </div>
      </Container>
    </Page>
  )
}

export default EventDetails