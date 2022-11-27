import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "../features/Api";
import searchReducer from "../features/searchSlice";
import favReducer from "../features/favSlice";
import buttonReducer from "../features/buttonSlice";
import { /*persistStore,*/ persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  search: searchReducer,
  fav: favReducer,
  button: buttonReducer,
});

const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, reducers);

 const store = configureStore({
  reducer: persistedReducer,
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);


export default store;