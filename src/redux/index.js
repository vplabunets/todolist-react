import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './slices/todosSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'todos',
    storage,
    whitelist: ['todos'],
};

const rootReducer = combineReducers({ todos: todosReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const index = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        });
    },
});

export const persistor = persistStore(index);
