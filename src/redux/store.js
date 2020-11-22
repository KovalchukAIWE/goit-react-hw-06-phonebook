import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit';
  import { persistStore, persistReducer, PERSIST } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import phonebookReducer from './redusers/phonebookReducer';
  
  const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer = combineReducers({
    contacts: phonebookReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
  });
  
  export const persistor = persistStore(store);