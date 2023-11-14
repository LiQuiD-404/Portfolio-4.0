import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: null,
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
       setActive: (state, action) => {
      state.active = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setActive} = activeSlice.actions

export default activeSlice.reducer