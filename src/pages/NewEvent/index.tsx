import React from 'react'
import { v4 as uuidv4 }  from 'uuid'
import { useHistory } from 'react-router-dom'
import _map from 'lodash/map'
import Container from 'components/Container'
import Button from 'components/Button'
import Input from 'components/Input'
import Textarea from 'components/Input/Textarea'
import { useBbqStore, useUserStore } from 'hooks'

interface SLProps {
  onClick: any,
  className: string,
  list: any,
  title: string
}

const SelectableList: React.FC<SLProps> = ({ onClick, list, className, title }) => {
  if (list && list.length <= 0 ) return null

  const mappedItens = _map(list, (item) => <button onClick={() => onClick(item)}>{item.name}</button>)
  return (
    <div className={className}>
      <h4>{title}</h4>
      <div className="list">
        {mappedItens}
      </div>
    </div>
  )
}

const NewEvent: React.FC = () => {
  const bbqHook = useBbqStore()
  const { store: userStore } = useUserStore()
  const { guests } = userStore
  const history = useHistory()

  const [state, updateState] = React.useState<any>()
  const [gList, updateGList] = React.useState<any>({ ready: guests, selected: [] })

  React.useEffect(() => {
    if (guests && guests.length > 0) updateGList((current: any) => ({ ...current, ready: guests }))
  }, [guests])

  const handleState = (key: string, value: any) => updateState((cState: any) => ({ ...cState, [key]: value }))

  const changeName = (value: string) => handleState('name', value)
  const changeDate = (value: string) => handleState('date', value)
  const changeDescription = (value: string) => handleState('description', value)
  const changeObs = (value: string) => handleState('obs', value)
  const cNormalValue = (value: string) => handleState('normalValue', value)
  const cDrinkValue = (value: string) => handleState('drinkValue', value)

  const onSelectGuest = (guest: any) => {
    const rCopy = gList.ready.concat([])
    const sCopy = gList.selected.concat([])

    const index = rCopy.indexOf(guest)
    rCopy.splice(index, 1)
    sCopy.push(guest)

    updateState((cState: any) => ({ ...cState, guests: sCopy }))
    updateGList(() => ({ ready: rCopy, selected: sCopy }))
  }

  const onRemoveGuest = (guest: any) => {
    const rCopy = gList.ready.concat([])
    const sCopy = gList.selected.concat([])

    const index = sCopy.indexOf(guest)
    sCopy.splice(index, 1)
    rCopy.push(guest)

    updateState((cState: any) => ({ ...cState, guests: sCopy }))
    updateGList(() => ({ ready: rCopy, selected: sCopy }))
  }

  const saveNewEvent = () => {
    console.log('O que vou enviar: ', state)
    bbqHook.addEvent({ id: uuidv4(), state })
    history.push('/events')
  }

  return (
    <div className="page">
      <Container className="newEvent-container">
        <h2>Novo Churras!!</h2>
        <div>
          <Input name="name" label="Nome do evento" onChange={changeName} />
          <Input name="date" label="Data do evento" placeholder="01/01/2021" onChange={changeDate} />
          <Input name="description" label="Descrição" onChange={changeDescription} />
          <Textarea name="obs" label="Observações" onChange={changeObs} /> 
          <div className="splited-fields">
            <Input type="number" name="normal" label="Sug. de valor sem bebida" onChange={cNormalValue} />
            <Input type="number" name="normal" label="Sug. de valor com bebida" onChange={cDrinkValue} />
          </div>

          <SelectableList title="Convidados" list={gList.selected} onClick={onRemoveGuest} className="selected-guests" />
          <SelectableList title="Pessoas disponíveis" list={gList.ready} onClick={onSelectGuest} className="available-guests" />

          <Button onClick={saveNewEvent}>Criar!</Button>
        </div>
      </Container>
    </div>
  )
}

export default NewEvent