import { createSlice } from "@reduxjs/toolkit";
import { init } from "next/dist/compiled/webpack/webpack";
type User = {
  id: string | null;
  username: string | null;
  email: string;
};
//Define initial value
const initialData: User = {
  id: "",
  username: "",
  email: "",
};

// define config Reducer
// Define config reducer
const userSlice = createSlice({
    name: "user",
    initialState: { ... initialData },
    reducers: {
             setSignIn:( initialState, action) => { 
                 localStorage.setItem("auth", JSON.stringify(action.payload)) 
                 return {...action.payload}
             }, 
    setSignOut: () => {
   localStorage.removeItem("auth") 
   return {...initialData}
    } ,
},
}) 

// fungsi di balik sistem slice reduce  singgle bisa jadi duo function 
// action membawa da 6 a dari ui page component 
// Define actions
const actions = {
    setSignInAction: userSlice.actions.setSignIn,
    setSignOutAction: userSlice.actions.setSignOut,
} 
export const { setSignInAction, setSignOutAction } = actions;

// Export reducer
export default userSlice. reducer 