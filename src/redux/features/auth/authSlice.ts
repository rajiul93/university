import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export type TUserToken = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
type TAuthState = {
  user: null | TUserToken;
  token: null | string;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token; // mind koiro na tomake seleck dite vule gsi
export const selectCurrentUser = (state: RootState) => state.auth.user;

 