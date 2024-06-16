import React, {useState} from 'react';
import {getDatabase, ref, get} from "firebase/database"
import app from "../config";

const ReadComponents = () => {
    const [components, setComponents] = useState([]);

    const fetch = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "reactjs/components");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setComponents(Object.values(snapshot.val()));
        } else {
            console.log("some error when fetching data")
        }
    }

    return (
        <div>
            <button onClick={fetch}>Load all components</button>
            <ul>
                {components.map((item, index) => (
                    <li key={index}>
                        {item.componentName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadComponents;