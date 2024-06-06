import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    image: '',
    isChanging: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload
    },
    setChange(state) {
        state.isChanging = !state.isChanging;
    }
  },
})

export const {setUser, setChange, setImage} = userSlice.actions
export default userSlice.reducer