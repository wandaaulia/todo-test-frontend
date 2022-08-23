import { createSlice } from '@reduxjs/toolkit'

const initialState = {
value : 0,
activityValue : [],
loading: false
}

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivity : (state, action) => {
    state.activityValue = action.payload;
    },
    createActivity :  (state, action) => {
    state.activityValue.push(action.payload);
    },
    setLoading : (state) => {
      state.loading = true;
    },
      unsetLoading : (state) => {
    state.loading = false;
    }
  },
})

export const { setActivity, createActivity, setLoading, unsetLoading} = activitySlice.actions

export default activitySlice.reducer