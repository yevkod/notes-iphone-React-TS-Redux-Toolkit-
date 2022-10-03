import React from 'react';
import {useAppSelector} from "../../hooks";
import {TodoItem} from "../Footer/TodoItem";

export const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)
    return (
        <ul>
            {todos.map((todo:any) => (
                <TodoItem
                key={todo.id}
                {...todo}
                />
            ))}
        </ul>
    );
};

