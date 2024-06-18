// src/pages/update/actions/componentUpdateActions.ts
import { Dispatch } from 'redux';
import { getDatabase, ref, set, get } from 'firebase/database';
import {
    UPDATE_COMPONENT_REQUEST,
    UPDATE_COMPONENT_SUCCESS,
    UPDATE_COMPONENT_FAILURE,
    FETCH_COMPONENT_REQUEST,
    FETCH_COMPONENT_SUCCESS,
    FETCH_COMPONENT_FAILURE,
} from '../constants/actionTypes';
import * as firebase from "../../../constants/firebase";
import {Component} from "../../../app/types/component";
import app from "../../../app/config";

const updateComponentRequest = () => ({
    type: UPDATE_COMPONENT_REQUEST,
});

const updateComponentSuccess = (component: Component) => ({
    type: UPDATE_COMPONENT_SUCCESS,
    payload: component,
});

const updateComponentFailure = (error: string) => ({
    type: UPDATE_COMPONENT_FAILURE,
    payload: error,
});

const fetchComponentRequest = () => ({
    type: FETCH_COMPONENT_REQUEST,
});

const fetchComponentSuccess = (component: Component) => ({
    type: FETCH_COMPONENT_SUCCESS,
    payload: component,
});

const fetchComponentFailure = (error: string) => ({
    type: FETCH_COMPONENT_FAILURE,
    payload: error,
});

export const updateComponent = (component: Component) => async (dispatch: Dispatch) => {
    dispatch(updateComponentRequest());
    try {
        const db = getDatabase(app);
        const componentRef = ref(db, `${firebase.dbPath}/${component.componentId}`);
        await set(componentRef, component);
        dispatch(updateComponentSuccess(component));
    } catch (error) {
        dispatch(updateComponentFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
};

export const fetchComponent = (componentId: string) => async (dispatch: Dispatch) => {
    dispatch(fetchComponentRequest());
    try {
        const db = getDatabase(app);
        const componentRef = ref(db, `${firebase.dbPath}/${componentId}`);
        const snapshot = await get(componentRef);
        if (snapshot.exists()) {
            dispatch(fetchComponentSuccess({ ...snapshot.val(), componentId }));
        } else {
            dispatch(fetchComponentFailure('Component not found'));
        }
    } catch (error) {
        dispatch(fetchComponentFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
};
