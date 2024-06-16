import React, {useState} from 'react';
import {getDatabase, ref, set, push} from "firebase/database"
import app from "../config";

const WriteNewComponent = () => {
    const [componentName, setComponentName] = useState("");
    const [descriptionOfComponent, setDescriptionOfComponent] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "reactjs/component"));
        set(newDocRef, {
            componentName: componentName,
            description: descriptionOfComponent
        }).then(() => {
            alert("component saved successfully")
        }).catch((error) => {
            console.log(`error: ${error.message()}`)
        });
    }

    return (
        <div>
            <input type={"text"} value={componentName}
                   onChange={(e) => setComponentName(e.target.value)}/>
            <br/>
            <input type={"text"} value={descriptionOfComponent}
                   onChange={(e) => setDescriptionOfComponent(e.target.value)}/>
            <br/>
            <button onClick={saveData}>Save component</button>
        </div>
    );
};

export default WriteNewComponent;