import React from 'react';

interface NewTodoFormProps {
    value: string,
    updateText: (str: string) => void,
    handleAction: () => void,
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({value, updateText, handleAction}) => {
    return (
        <div>
            <label>
                <input
                placeholder='new todo'
                value={value}
                onChange={(e) => updateText(e.target.value)}
                />
                <button onClick={handleAction}>Add todo</button>
            </label>
        </div>
    );
};

