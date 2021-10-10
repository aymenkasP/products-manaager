import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    createStoke : false,
    Refresh : null,
  
}

  
  export const warehouseSlice = createSlice({
    name: 'stokePage',  
    initialState,
    reducers: {
        createStoke: (state , action) => {
        
        state.createStoke = action.payload
      },
      Refresh: (state , action) => {
        
        state.Refresh = action.payload
      },

    },
  })

  export const {createStoke,IsLoading,Refresh} = warehouseSlice.actions

export default warehouseSlice.reducer