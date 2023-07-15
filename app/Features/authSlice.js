import { createSlice } from "@reduxjs/toolkit";
const initialState = []
export const authSlice =createSlice({
    name: 'auth',
    initialState :{
      user:null
    },
    reducers: {
          // Give case reducers meaningful past-tense "event"-style names
          userSignedIn(state,action)
          {
            // "Mutating" update syntax thanks to Immer, and no `return` needed
            state.user = action.payload;
          },
          userLoggedIn(state,action)
          {
            // "Mutating" update syntax thanks to Immer, and no `return` needed
            state.user = action.payload;
          },
          userLoggedOut(state)
          {
            state.user = null;
          }
    }
})

export const {userSignedIn, userLoggedIn,userLoggedOut} = authSlice.actions;

//selectors
export const selectUser = (state) =>state.user.user;

export default authSlice.reducer;