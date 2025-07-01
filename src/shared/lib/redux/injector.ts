// src/shared/lib/redux/injector.ts

import { combineReducers } from "@reduxjs/toolkit";
import type { Reducer } from "@reduxjs/toolkit";
import type { Action, ReducersMapObject } from "redux";

export const createReducerManager = (initialReducers: ReducersMapObject) => {
  type State = Record<string, unknown>;
  type ActionTypes = Action;

  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: string[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (
      state: State | undefined,
      action: ActionTypes
    ): ReturnType<typeof combinedReducer> => {
      const nextState = combinedReducer(state, action);

      if (keysToRemove.length > 0) {
        const newState = { ...nextState };
        for (const key of keysToRemove) {
          delete newState[key];
        }
        keysToRemove = [];
        return newState;
      }

      return nextState;
    },
    add: (key: string, reducer: Reducer) => {
      if (!key || reducers[key]) return;
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: string) => {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};
