import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: localStorage.getItem('access-token')!==null,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer