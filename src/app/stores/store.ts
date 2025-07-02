import { configureStore, createSlice } from "@reduxjs/toolkit";

interface MockState {
  string: string;
}

const initialState: MockState = {
  string: "",
};

const mockSlice = createSlice({
  name: "mock",
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    mock: mockSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
