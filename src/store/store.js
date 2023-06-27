import { configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice.jsx';
import postReducer from "./features/posts/postSlice.jsx";
export const store = configureStore({
    reducer : {
        counter : counterReducer,
        posts : postReducer,
    }
})