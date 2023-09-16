import React from 'react'
import Item from "../components/Item";
import {useSelector} from "react-redux";
import {getTodos} from "../redux/selectors";
import {useParams} from "react-router";

function Todo() {
    const todos = useSelector(getTodos);
    const { id } = useParams();
    const selectedTodo = todos.find(todo=>todo.id===+id)
    return <Item  selectedTodo={selectedTodo} />
}

export default Todo
