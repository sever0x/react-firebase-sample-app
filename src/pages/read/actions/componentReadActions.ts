import { Dispatch } from 'redux';
import { getDatabase, ref, get } from 'firebase/database';
import {
    FETCH_COMPONENTS_REQUEST,
    FETCH_COMPONENTS_SUCCESS,
    FETCH_COMPONENTS_FAILURE,
} from '../constants/actionTypes';
import {Component} from "../../../app/types/component";
import app from "../../../app/config";

export const fetchComponentsRequest = () => ({
    type: FETCH_COMPONENTS_REQUEST,
});

export const fetchComponentsSuccess = (components: Component[]) => ({
    type: FETCH_COMPONENTS_SUCCESS,
    payload: components,
});

export const fetchComponentsFailure = (error: string) => ({
    type: FETCH_COMPONENTS_FAILURE,
    payload: error,
});

export const fetchComponents = () => async (dispatch: Dispatch) => {
    dispatch(fetchComponentsRequest());
    try {
        const db = getDatabase(app);
        const dbRef = ref(db, 'reactjs/component');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const components: Component[] = Object.keys(data).map((itemId: string) => ({
                ...data[itemId],
                componentId: itemId,
            }));
            dispatch(fetchComponentsSuccess(components));
        } else {
            dispatch(fetchComponentsFailure('No data available'));
        }
    } catch (error) {
        dispatch(fetchComponentsFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
};
