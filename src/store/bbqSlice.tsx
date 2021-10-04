import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BBQ, BbqStoreType } from 'models'

const initialState: BbqStoreType = {
  events: []
}

const bbqSlice = createSlice({
  name: 'bbq',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<BBQ>) => {
      return { ...state, events: state.events.concat([action.payload]) }
    },
    setEvents: (state, action: PayloadAction<Array<BBQ>>) => {
      return { ...state, events: action.payload }
    },
    selectEvent: (state, action: PayloadAction<BBQ>) => {
      return { ...state, selectedEvent: action.payload }
    },
    updateEvent: (state, action: PayloadAction<BBQ>) => {
      const eventFound: any = state.events.find((event) => event.id === action.payload.id)
      const eCopy = state.events.concat([])
      const index = eCopy.indexOf(eventFound)
      eCopy.splice(index, 1, action.payload)
      return { ...state, events: eCopy }
    },
  }
})

export default bbqSlice.reducer