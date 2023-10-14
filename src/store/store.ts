import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import { reducer as counterReducer } from "./slices/countSlice.ts"
import { userApi } from './api/authorizationApi.ts';
import { searchApi } from './api/searchApi.ts';
/* import { socketMiddleware } from './middleware.ts'; */

    // тут апи
export const middlewares = [ 
  /* socketMiddleware, */ // для соккетов
  userApi.middleware,
  searchApi.middleware
];

const rootReducer = combineReducers({
  counter: counterReducer,  // тут слайсы
  [userApi.reducerPath]: userApi.reducer,  // и тут тоже апи
  [searchApi.reducerPath]: searchApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
};

export const store = setupStore();

export default store;

export type AppReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();