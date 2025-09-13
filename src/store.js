import { configureStore} from "@reduxjs/toolkit"
import  counterReducer from "./Slice/CounterSlice.js"

const store = configureStore({

    reducer: {
        counter: counterReducer
    }
})

export default store;