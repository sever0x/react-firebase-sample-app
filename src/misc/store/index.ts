import { configureStore } from '@reduxjs/toolkit';
import {componentReducer} from "../../pages/create/reducers/componentCreateReducer";

export const store = configureStore({
    reducer: {
        createComponent: componentReducer,
    },
});
