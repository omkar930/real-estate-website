import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: true
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    refreshSignInStart:(state)=>{
      state.loading=true;
    },
    refreshSignInStop:(state)=>{
      state.loading=false;
    },
    refreshSignInSuccess:(state,action)=>{
      state.currentUser=action.payload;
      state.error=null;
      state.loading=false;
    },
    refreshSignInFailure:(state,action)=>{
      state.currentUser=null;
      state.error=action.payload;
      state.loading=false;
    },
    updateUserStart:(state)=>{
      state.loading=true;
    },
    updateUserSuccess:(state,action)=>{
      state.currentUser=action.payload;
      state.loading=false;
      state.error=null;
    },
    updateUserFailure:(state,action)=>{
      state.error=action.payload;
      state.currentUser=null;
      state.loading=false;
    },
    deleteUserStart:(state)=>{
      state.loading=true;
    },
    deleteUserSuccess:(state)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    },
    deleteUserFailure:(state,action)=>{
      state.error=action.payload;
      state.loading=false;
    },
    signOutUserStart:(state)=>{
      state.loading=true;
    },
    signOutUserSuccess:(state)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    },
    signOutUserFailure:(state,action)=>{
      state.error=action.payload;
      state.loading=false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  refreshSignInStart,
  refreshSignInStop,
  refreshSignInSuccess,
  refreshSignInFailure
} = userSlice.actions;

export default userSlice.reducer;