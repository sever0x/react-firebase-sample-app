import { getDatabase, ref, set, push } from 'firebase/database';
import app from '../../../app/config';
import {
    CREATE_COMPONENT_REQUEST,
    CREATE_COMPONENT_SUCCESS,
    CREATE_COMPONENT_FAILURE
} from '../constants/actionTypes';
import { Component } from '../../../app/types/component';

const createComponentRequest = () => ({
    type: CREATE_COMPONENT_REQUEST,
});

const createComponentSuccess = (component: Component) => ({
    type: CREATE_COMPONENT_SUCCESS,
    payload: component,
});

const createComponentFailure = (error: string) => ({
    type: CREATE_COMPONENT_FAILURE,
    payload: error,
});

export const createComponent = (component: Omit<Component, 'componentId'>) => async (dispatch: any) => {
    dispatch(createComponentRequest());
    try {
        const db = getDatabase(app);
        const newComponentRef = push(ref(db, 'reactjs/component'));
        await set(newComponentRef, component);
        dispatch(createComponentSuccess({ ...component, componentId: newComponentRef.key! }));
    } catch (error) {
        dispatch(createComponentFailure(error instanceof Error ? error.message : 'Unk error'));
    }
};
