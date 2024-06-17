import React, {useEffect, useState} from 'react';
import {get, getDatabase, ref} from "firebase/database"
import app from "../app/config";
import {Component} from "../app/types/component";
import { useNavigate } from 'react-router-dom';

const ReadComponents = () => {
    const navigate = useNavigate();
    const [components, setComponents] = useState<Component[]>([]);

    const fetch = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "reactjs/component");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const fetchedComponents: Component[] = Object.keys(data).map((itemId: string) => {
                return {
                    ...data[itemId],
                    componentId: itemId
                };
            });
            setComponents(fetchedComponents);
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
                        {item.componentName} - {item.description}
                        <button onClick={() => {
                            navigate(`/update/${item.componentId}`)
                        }}>
                            Update
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadComponents;