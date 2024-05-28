import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isChanging: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setChange(state) {
        state.isChanging = !state.isChanging;
    }
  },
})

export const { setUser, setChange } = userSlice.actions
export default userSlice.reducer