import React from 'react';
import Item from '../components/Item';
import { useSelector } from 'react-redux';
import { getTodos } from '../redux/selectors/todosSelectors';
import { useParams } from 'react-router';
import { Layout } from '../Layout';

function Todo() {
    const todos = useSelector(getTodos);
    const { id } = useParams();
    const selectedTodo = todos.find(todo => todo.id === id);
    return (
        <Layout>
            <Item selectedTodo={selectedTodo} />
        </Layout>
    );
}

export default Todo;
