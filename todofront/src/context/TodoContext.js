import React from "react";
import { useTodos } from "../hooks/UseTodos";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        deleteTodo,
        changeTodoStatus,
        error,
        loading
    } = useTodos([]);

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const completeTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (searchValue.length < 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodo = {
            name: text
        }
        saveTodos(newTodo)
    }



    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completeTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            changeTodoStatus,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )

}

export { TodoContext, TodoProvider }





