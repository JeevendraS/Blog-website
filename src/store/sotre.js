import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer:{
        auth: authSlice
        // postslice will be here
    }
})

export default store
