import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import listFormatReducer from "./reducers/listFormatReducer";

const rootReducer: Reducer<any, AnyAction> = combineReducers({
  listFormat: listFormatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
