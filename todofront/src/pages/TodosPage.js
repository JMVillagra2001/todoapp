import React from 'react'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoList } from '../components/TodoList/TodoList'
import { ErrorTodos } from '../components/ErrorTodos/ErrorTodos'
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos'
import { LoadingTodos } from '../components/LoadingTodos/LoadingTodos'
import { TodoContext } from '../context/TodoContext'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton'
import { Modal } from '../components/Modal/Modal'
import { TodoForm } from '../components/TodoForm/TodoForm'

export default function TodosPage() {
    const {
        error,
        loading,
        searchedTodos,
        changeTodoStatus,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoList>
                {error && <ErrorTodos />}
                {loading && <LoadingTodos />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.name}
                        text={todo.name}
                        completed={todo.completed}
                        onComplete={() => changeTodoStatus(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}


            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}
