import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import getdataReducer from '../store/getdataSlice'
import deleteReducer from '../store/deleteSlice'
import updateReducer from '../store/updateSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        getdata:getdataReducer,
        delete:deleteReducer,
        update:updateReducer
    }
})