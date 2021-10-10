import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    user: {},
    isOnline: false
  }

  
  export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      SaveUser: (state , action) => {
        state.user = action.payload
      },
      isOnlineFunction: (state , action) => {
        state.user = action.payload
      },

    },
  })

  export const {SaveUser,isOnlineFunction} = userSlice.actions

export default userSlice.reducer