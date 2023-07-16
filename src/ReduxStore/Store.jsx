import { configureStore } from '@reduxjs/toolkit'
import { carts } from './Reducer'
const Store = configureStore({
    reducer:{
        add:carts,
    }
});

export default Store