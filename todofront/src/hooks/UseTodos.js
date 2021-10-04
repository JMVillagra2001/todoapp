import React from 'react';
import getTodosService from '../services/Todos/GetTodos'
import createTodoService from '../services/Todos/CreateTodo'
import changeTodoStatusService from '../services/Todos/ChangeTodoStatus'
import deleteTodoService from '../services/Todos/DeleteTodo'

function useTodos(initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [todosState, setTodosState] = React.useState({ loading: false, error: false })

    React.useEffect(() => {
        setTodosState({ loading: true, error: false })
        getTodosService()
            .then(todos => {
                setTodosState({ loading: false, error: false })
                setItem(todos);
            })
            .catch(err => {
                setTodosState({ loading: false, error: true })
            })
    }, [])

    const saveItem = (newItem) => {
        createTodoService(newItem)
            .then((todo) => {
                setTodosState({ loading: false, error: false })
                const newTodos = [...item]
                newTodos.push(todo)
                setItem(newTodos);
            })
            .catch((err) => {
                setTodosState({ loading: false, error: true })
            })

    };

    const changeTodoStatus = (id) => {
        changeTodoStatusService(id)
            .then(() => {
                setTodosState({ loading: false, error: false })
                const todoIndex = item.findIndex(todo => todo.id === id)
                const newTodos = [...item]
                newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
                setItem(newTodos);
            })
            .catch((err) => {
                setTodosState({ loading: false, error: true })
            })
    }

    const deleteTodo = (id) => {
        deleteTodoService(id)
            .then(() => {
                setTodosState({ loading: false, error: false })
                const todoIndex = item.findIndex(todo => todo.id === id)
                const newTodos = [...item]
                newTodos.splice(todoIndex, 1);
                setItem(newTodos);
            })
            .catch((err) => {
                setTodosState({ loading: false, error: true })
            })
    }

    return {
        item,
        saveItem,
        changeTodoStatus,
        deleteTodo,
        error: todosState.error, 
        loading: todosState.loading
    };
}

export { useTodos };