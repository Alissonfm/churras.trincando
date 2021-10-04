import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BBQ from 'models/bbq'
import Guest from  'models/guest'

interface BbqState {
  events: Array<BBQ>
  guests: Array<Guest>
}

const initialState: BbqState = {
  events: [],
  guests: []
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
    addGuest: (state, action: PayloadAction<Guest>) => {
      return { ...state, guests: state.guests.concat([action.payload])}
    }
  }
})

export default bbqSlice.reducer