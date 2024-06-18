import { configureStore } from '@reduxjs/toolkit';
import {componentReducer as createReducer} from "../../pages/create/reducers/componentCreateReducer";
import {componentReducer as readReducer} from "../../pages/read/reducers/componentReadReducer";
import {componentReducer as updateReducer} from "../../pages/update/reducers/componentUpdateReducer";

export const store = configureStore({
    reducer: {
        createComponent: createReducer,
        readComponents: readReducer,
        updateComponent: updateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;