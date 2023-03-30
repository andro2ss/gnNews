import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import listFormatReducer from "./reducers/listFormatReducer";
import listAmountReducer from "./reducers/listAmountReducer";

const rootReducer: Reducer<any, AnyAction> = combineReducers({
  listFormat: listFormatReducer,
  listAmount: listAmountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
