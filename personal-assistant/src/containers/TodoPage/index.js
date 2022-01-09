import React, { useCallback, useState } from "react";

import TodoList from '../../components/TodoList/index';
import AddForm from '../../components/AddForm'
import Header from '../../components/Header';
import { TodoLayout } from "./styles";
import { TodoProvider } from '../../TodoContext'
import { useLocalStorage } from "../../useLocalStorage";

const TodoPage = () => {

    const [todos, setTodos] = useLocalStorage("todos", []);
    const [query, setQuery] = useState('');

    const handleRemove = useCallback((id) => {
        const updated = todos.filter((obj) => {
            return obj.id !== id;
        });

        setTodos(updated);
    }, [todos, setTodos]);
     
    return (
        <TodoProvider value={{todos: todos, setTodos: setTodos, query: query, setQuery: setQuery}}>
            <TodoLayout>
                <Header text="Todos"/>
                <AddForm todos={todos} setTodos={setTodos} query={query} setQuery={setQuery} />
                <TodoList todos={todos} query={query} onRemove={handleRemove}/>
            </TodoLayout>
        </TodoProvider>
    );
}

export default TodoPage;