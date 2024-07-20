import { configureStore } from "@reduxjs/toolkit" 

import userReduce from "./features/userSlice"

export const makeStore = () => {
   return configureStore ({
     reducer: {
        // type reducer config here 
         userReduce, 
       //  userSlice, 
     }
   } ) 
}

export type AppStore = ReturnType<typeof makeStore> 
export type RootState = ReturnType< AppStore ["getState"]> 
// dapat data sesuia reducer root state  
export type AppDispatch = AppStore ["dispatch"] 
// kebalikan root state 
// mendifine menyimpan data di global state 
// exsport default tanpa kurawal  