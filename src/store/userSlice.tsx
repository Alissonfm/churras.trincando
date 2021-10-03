import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Guest from 'models/guest'


const initialState: Guest = {
  name: "",
  email: ""
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    doLogin: (state, action: PayloadAction<Guest>) => {
      state = action.payload
    },
    logout: (state) => {
      state = initialState
    }
  }
})

const userActions = userSlice.actions

export { userActions }

export default userSlice.reducer