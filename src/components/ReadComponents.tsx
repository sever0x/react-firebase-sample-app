import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Component} from "../app/types/component";

const ReadComponents = ({ fetchComponents, components, loading, error }: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        fetchComponents();
    }, [fetchComponents]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {components.map((item: Component) => (
                    <li key={item.componentId}>
                        {item.componentName} - {item.description}
                        <button onClick={() => navigate(`/update/${item.componentId}`)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadComponents;
