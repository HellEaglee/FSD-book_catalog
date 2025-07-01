declare global {
  declare type RootState = import("../src/app/stores").RootState;
  declare type AppDispatch = import("../src/app/stores").AppDispatch;
}
export {};
