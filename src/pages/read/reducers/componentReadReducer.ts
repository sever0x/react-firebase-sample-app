import {
    FETCH_COMPONENTS_REQUEST,
    FETCH_COMPONENTS_SUCCESS,
    FETCH_COMPONENTS_FAILURE,
} from '../constants/actionTypes';
import {Component} from "../../../app/types/component";

interface ComponentState {
    loading: boolean;
    components: Component[];
    error: string | null;
}

const initialState: ComponentState = {
    loading: false,
    components: [],
    error: null,
};

export const componentReducer = (state = initialState, action: any): ComponentState => {
    switch (action.type) {
        case FETCH_COMPONENTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_COMPONENTS_SUCCESS:
            return { ...state, loading: false, components: action.payload };
        case FETCH_COMPONENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
