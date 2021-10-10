import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isDeleted : null
  }

  
  export const notesSlice = createSlice({
    name: 'stokePage',
    initialState,
    reducers: {
        isNoteDeleted: (state , action) => {
        
        state.isDeleted = action.payload
      }

    },
  })

  export const {isNoteDeleted} = notesSlice.actions

export default notesSlice.reducer