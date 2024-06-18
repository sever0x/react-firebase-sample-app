import {
    UPDATE_COMPONENT_REQUEST,
    UPDATE_COMPONENT_SUCCESS,
    UPDATE_COMPONENT_FAILURE,
    FETCH_COMPONENT_REQUEST,
    FETCH_COMPONENT_SUCCESS,
    FETCH_COMPONENT_FAILURE,
} from '../constants/actionTypes';
import {Component} from "../../../app/types/component";

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
        case UPDATE_COMPONENT_REQUEST:
        case FETCH_COMPONENT_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_COMPONENT_SUCCESS:
        case FETCH_COMPONENT_SUCCESS:
            return { ...state, loading: false, component: action.payload };
        case UPDATE_COMPONENT_FAILURE:
        case FETCH_COMPONENT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
