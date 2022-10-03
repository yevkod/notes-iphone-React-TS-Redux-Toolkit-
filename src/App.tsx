import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {useAppDispatch} from "./hooks";
import {NewTodoForm} from "./components/Main/NewTodoForm";
import {TodoList} from "./components/TodoList/TodoList";
import {addTodo} from "./store/todoSlice";


function App () {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText('');
        }
    }

    return (
        <div>
            {/*<Header />*/}
            <NewTodoForm
            value={text}
            updateText={setText}
            handleAction={handleAction}
            />
            <TodoList/>
        </div>
    );
};

export default App;
