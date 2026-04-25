import { createSlice } from '@reduxjs/toolkit'
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    activeTab: "Photos",
    result: [],
    loading: false,
    error: null
  },
  reducers: {
    setQuery(state, action){
      state.query = action.payload
    },
    setActiveTab(state, action){
      state.activeTab = action.payload
    },
    setLoading(state){
      state.loading = true,
      state.error = null
    },
    setResult(state, action){
      state.loading = false
      state.result = action.payload
    },
    setError(state, action){
      state.error = action.payload
      state.loading = false
    },
    clearResult(state){
      state.result = []
    }
  }
})

export const { setQuery, setActiveTab, setLoading, setResult, setError } = searchSlice.actions

export default searchSlice.reducer