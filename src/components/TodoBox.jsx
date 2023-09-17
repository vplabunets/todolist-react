import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import classNames from "classnames";
import Item from "./Item";
import {getTodos} from "../redux/selectors";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

const TodoBox = ( ) => {
    const todos = useSelector(getTodos);
    const [todosStatus, setTodosStatus] =useState("all");
    const [filteredTodos, setFilteredTodos] =useState(todos);

    useEffect(() => {
        if (todosStatus==="completed"){
             setFilteredTodos(todos.filter(todo=>todo.isCompleted===true))
        }
        if (todosStatus==="all"){
             setFilteredTodos(todos)
        }
        if (todosStatus==="uncompleted"){
             setFilteredTodos(todos.filter(todo=>todo.isCompleted===false))
        }

    }, [todosStatus,todos, filteredTodos]);

    const onClickHandler = (event) => {
         if (event.target.textContent==="Completed"){
            setTodosStatus("completed")
         }
        if (event.target.textContent==="All"){
            setTodosStatus("all")
         }
        if (event.target.textContent==="Uncompleted"){
            setTodosStatus("uncompleted")
         }

    }
    const completedButtonClass = classNames('btn', 'btn-outline-primary', {
        'active': todosStatus === 'completed',
    });

    const allButtonClass = classNames('btn', 'btn-outline-primary', {
        'active': todosStatus === 'all',
    });

    const uncompletedButtonClass = classNames('btn', 'btn-outline-primary', {
        'active': todosStatus === 'uncompleted',
    });

    return ( <Container className="  m-3">
        <Row>
        <div className="btn-group mb-4" role="group" aria-label="Basic outlined example">
            <button type="button" className={ completedButtonClass} onClick={ onClickHandler}>Completed</button>
            <button type="button" className={ allButtonClass} onClick={ onClickHandler}>All</button>
            <button type="button" className={ uncompletedButtonClass} onClick={ onClickHandler}>Uncompleted</button>
        </div>
        </Row>
        <Row className=" ">

         {filteredTodos.map((selectedTodo) =>
              <Item key={selectedTodo.id} selectedTodo={selectedTodo}/>
        )}


        </Row>
     </Container>)
}

export default TodoBox