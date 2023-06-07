import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";
import createApiMiddleware from './middleware/api';
import rootReducer from "./reducers/rootReducer";

const apiMiddleware = createApiMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk, apiMiddleware],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
