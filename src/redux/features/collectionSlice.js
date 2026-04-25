import { createSlice } from '@reduxjs/toolkit'
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: ""
  },
  reducers: {
    change: state => {
      state.value = event.target.value
    }
  }
})

export const { change } = searchSlice.actions

export default searchSlice.reducer