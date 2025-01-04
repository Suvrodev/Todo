import { IUsers } from "@/Types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  users: IUsers[];
}

const initialState: IUserState = {
  users: [
    {
      id: "1",
      name: "Suvrodeb",
    },
    {
      id: "2",
      name: "Redux",
    },
    {
      id: "3",
      name: "Type script",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUsers>) => {
      const newUser = action.payload;
      newUser.id = nanoid();
      state.users.push(newUser);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
