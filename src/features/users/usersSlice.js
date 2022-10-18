import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'Monkey D. Luffy' },
  { id: 2, name: 'Roronoa Zoro' },
  { id: 3, name: 'Vinsmoke Sanji' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
