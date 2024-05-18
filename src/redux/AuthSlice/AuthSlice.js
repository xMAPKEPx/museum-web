import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
  name: 'chart',
  initialState: {
    isAuth: false,
    isAuthInProgress: false,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth=action.payload;
    },
    setAuthInProgress(state, action) {
      state.isAuthInProgress=action.payload;
    }
  },
})

export const { setAuth, setAuthInProgress } = AuthSlice.actions
export default AuthSlice.reducer