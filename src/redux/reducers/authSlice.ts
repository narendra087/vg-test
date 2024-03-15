import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  username: string
  phone: string
  password: string
}
interface AuthState {
  isLoggedIn: boolean;
  users: IUser[];
  user?: IUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
  users: [],
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<any>) => {
      state.users.push(action.payload)
    },
    login: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = undefined;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
