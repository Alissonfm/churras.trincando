import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Guest from 'models/guest'
interface UserStore {
  email: string,
  logged: boolean,
  user?: Guest,
}

const initialState: UserStore = {
  email: '',
  logged: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    doLogin: (state, action: PayloadAction<UserStore>) => {
      return { ...action.payload, logged: true }
    },
    logout: () => initialState
  }
})

const userActions = userSlice.actions

export { userActions }

export default userSlice.reducer