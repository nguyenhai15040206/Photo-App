import { configureStore } from "@reduxjs/toolkit";
import photReducer from '../features/photo/photoSlice'

const rootReducer = {
    photos: photReducer,
}
const store = configureStore({
    reducer: rootReducer,
});

export default store;