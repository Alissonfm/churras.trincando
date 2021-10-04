import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Guest, UserStoreType } from 'models'



const initialState: UserStoreType = {
  logged: false,
  guests: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    doLogin: (state, action: PayloadAction<Guest>) => {
      return { user: action.payload, logged: true }
    },
    setGuests: (state, action: PayloadAction<Array<Guest>>)  => {
      return { ...state, guests: action.payload}
    },
    addGuest: (state, action: PayloadAction<Guest>)  => {
      return { ...state, guests: state.guests?.concat([action.payload]) }
    }
  }
})

const userActions = userSlice.actions

export { userActions }

export default userSlice.reducer