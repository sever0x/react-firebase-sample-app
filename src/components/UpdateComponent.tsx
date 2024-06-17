import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Component} from "../app/types/component";
import {get, getDatabase, ref, set} from "firebase/database";
import app from "../app/config";

const UpdateComponent = () => {
    const {itemId} = useParams();

    // const [ currentComponent, setCurrentComponent ] = useState<Component>();

    const [currentComponent, setCurrentComponent] =
        useState<Component>({
            componentId: '',
            componentName: '',
            description: '',
        });

    const fetch = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, `reactjs/component/${itemId}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const targetObj = snapshot.val();
            setCurrentComponent({
                ...currentComponent,
                componentId: targetObj.componentId,
                componentName: targetObj.componentName,
                description: targetObj.description,
            })
        } else {
            console.log("some error when fetching data");
        }
    }

    useEffect(() => {
        fetch().then(() => {
            console.log('Data fetched successfully');
        }).catch(error => {
            console.error('Error in fetching data:', error);
        });
    }, [itemId]);

    const overwriteData = async () => {
        const db = getDatabase(app);
        const newDocRef = ref(db, `reactjs/component/${itemId}`);

        set(newDocRef, {
            componentName: currentComponent?.componentName,
            description: currentComponent?.description,
        }).then(() => {
            alert("successfully");
        }).catch((err) => {
            console.log(`error: ${err.message()}`);
        });
    }

    return (
        <div>
            <input type={"text"} value={currentComponent?.componentName}
                   onChange={(e) => {
                       setCurrentComponent((prevState) => ({
                           ...prevState,
                           componentName: e.target.value
                       }))
                   }}/>
            <br/>

            <input type={"text"} value={currentComponent?.description}
                   onChange={(e) => {
                       setCurrentComponent((prevState) => ({
                           ...prevState,
                           description: e.target.value
                       }))
                   }}/>

            <button onClick={overwriteData}>Update component</button>
        </div>
    );
};

export default UpdateComponent;