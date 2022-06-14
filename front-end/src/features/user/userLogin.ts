import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface UserLoginState {
  isLogin: boolean
}

// Define the initial state using that type
const initialState: UserLoginState = {
  isLogin: false,
}

export const userLoginSlice = createSlice({
  name: 'userLogin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
    logout: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    }
  },
})

export const { login, logout } = userLoginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserLogin = (state: RootState) => state.userLogin.isLogin

export default userLoginSlice.reducer