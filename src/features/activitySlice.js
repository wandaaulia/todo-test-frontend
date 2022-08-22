import { createSlice } from '@reduxjs/toolkit'

const initialState = {
value : 0,
}

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivity : (state, action) => {
    state.value += 1
    },
    unsetActivity :  (state, action) => {
    state.value -= 1
    },
  },
})

export const { setActivity, unsetActivity} = activitySlice.actions

export default activitySlice.reducer