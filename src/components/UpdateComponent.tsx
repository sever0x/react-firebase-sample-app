// src/components/UpdateComponent.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Component} from "../app/types/component";

interface UpdateComponentProps {
    fetchComponent: (componentId: string) => void;
    updateComponent: (component: Component) => void;
    loading: boolean;
    component: Component | null;
    error: string | null;
}

const UpdateComponent: React.FC<UpdateComponentProps> = ({ fetchComponent, updateComponent, loading, component, error }) => {
    const { componentId } = useParams<{ componentId: string }>();
    const [formData, setFormData] = useState<Component | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (componentId) {
            fetchComponent(componentId);
        }
    }, [componentId, fetchComponent]);

    useEffect(() => {
        if (component) {
            setFormData(component);
        }
    }, [component]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => (prevData ? { ...prevData, [name]: value } : null));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            updateComponent(formData);
            navigate('/');
        }
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {formData && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Component Name</label>
                        <input type="text" name="componentName" value={formData.componentName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} />
                    </div>
                    <button type="submit">Update Component</button>
                </form>
            )}
        </div>
    );
};

export default UpdateComponent;
