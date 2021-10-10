import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/user/userSlice';
import stokeReducer from '../features/Stoke/stokeSlice';
import noteReducer from '../features/Notes/notesSlice';
import warehouseReducer from '../features/warehouse/warehouseSlice';

export const store = configureStore({
  reducer: {
    user :UserReducer,
    sellPage : stokeReducer,
    note : noteReducer,
    warehouse : warehouseReducer,
  },
});
