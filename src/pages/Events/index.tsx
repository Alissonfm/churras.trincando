import React from 'react'

import _map from 'lodash/map'
import useBbqStore from 'hooks/useBbqStore'

import Container from 'components/Container'
import Card from 'components/Card'
import Button from 'components/Button'

const Events: React.FC = () => {
  const events = useBbqStore()

  const buttonClick = () => {
    alert('clickou kerelho')
  }

  const mappedEvents = _map(events, (event) => <Card key={event.name} data={event} />)

  return (
    <div>
      Churrascos
      <Button onClick={buttonClick}>Botawn</Button>
      <Container>{mappedEvents}</Container>
    </div>
  )
}

export default Events