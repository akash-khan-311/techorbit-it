import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type IUser = {
  employeeId: string;
  exp: number;
  iat: number;
  id: string;
  role: string;
};

type StateProps = {
  user: IUser | null;
  token: string | null;
};

const initialState: StateProps = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentUser = (state: RootState) => state.auth.user;
export const useCurrentToken = (state: RootState) => state.auth.token;
