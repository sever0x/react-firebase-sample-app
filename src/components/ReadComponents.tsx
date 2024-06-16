import React, {useEffect, useState} from 'react';
import {get, getDatabase, ref} from "firebase/database"
import app from "../config";

const ReadComponents = () => {
    const [components, setComponents] = useState([]);

    const fetch = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "reactjs/component");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setComponents(Object.values(snapshot.val()));
        } else {
            console.log("some error when fetching data")
        }
    }

    useEffect(() => {
        fetch().then(() => {
            console.log('Data fetched successfully');
        }).catch(error => {
            console.error('Error in fetching data:', error);
        });
    }, []);

    return (
        <div>
            <ul>
                {components.map((item: any, index: number) => (
                    <li key={index}>
                        {item.componentName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadComponents;