import {
    CREATE_COMPONENT_REQUEST,
    CREATE_COMPONENT_SUCCESS,
    CREATE_COMPONENT_FAILURE
} from '../constants/actionTypes';
import { Component } from '../../../app/types/component';

interface ComponentState {
    loading: boolean;
    component: Component | null;
    error: string | null;
}

const initialState: ComponentState = {
    loading: false,
    component: null,
    error: null,
};

export const componentReducer = (state = initialState, action: any): ComponentState => {
    switch (action.type) {
        case CREATE_COMPONENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CREATE_COMPONENT_SUCCESS:
            return {
                ...state,
                loading: false,
                component: action.payload,
            };
        case CREATE_COMPONENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
