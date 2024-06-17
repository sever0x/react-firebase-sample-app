import React, { useState } from 'react';

const WriteComponent = ({ createComponent, loading, component, error }: any) => {
    const [componentName, setComponentName] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        createComponent({ componentName, description });
    };

    return (
        <div>
            <input
                type="text"
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
                placeholder="Component Name"
            />
            <br />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <br />
            <button onClick={handleSave} disabled={loading}>Save Component</button>
            {loading && <p>Loading...</p>}
            {component && <p>Component Created: {component.componentName}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default WriteComponent;
