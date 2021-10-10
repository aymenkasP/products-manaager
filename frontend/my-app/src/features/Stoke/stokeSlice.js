import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  stoke: {},
  warehouseId : {}
  }

  
  export const stokeSlice = createSlice({
    name: 'stokePage',
    initialState,
    reducers: {
      PageData: (state , action) => {
        
        state.stoke = action.payload
      },
      warehouseId: (state , action) => {
        
        state.warehouseId = action.payload
      },

    },
  })

  export const {PageData,warehouseId} = stokeSlice.actions

export default stokeSlice.reducer