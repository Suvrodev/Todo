import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/user/userSlice";
import missionReducer from "./features/mission/missionSlice";
import { baseApi } from "./api/baseApi";

// import { logger } from "./middlewares/logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    users: userReducer,
    mission: missionReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
