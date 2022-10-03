import React from 'react';
import {useAppDispatch} from "../../hooks";
import {removeTodo, toggleComplete} from "../../store/todoSlice";

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}

export const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <input
            type='checkbox'
            checked={completed}
            onChange={() => dispatch(toggleComplete(id))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    );
};

