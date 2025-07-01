import { configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./injector";

const reducerManager = createReducerManager({});

const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
});

export const reducerRegistry = reducerManager;

export default store;
