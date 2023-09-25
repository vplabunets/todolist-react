import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { getTodos } from '../redux/selectors/todosSelectors';
import Row from 'react-bootstrap/Row';
import { todoStatuses } from '../utils/todoStatuses';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToggleButton } from 'react-bootstrap';

const TodoBox = () => {
    const todos = useSelector(getTodos);
    const [todosStatus, setTodosStatus] = useState(todoStatuses.all);
    const [filteredTodos, setFilteredTodos] = useState(todos);

    useEffect(() => {
        let filtered = todos;

        if (todosStatus === todoStatuses.completed) {
            filtered = todos.filter(todo => todo.isCompleted);
        }
        if (todosStatus === todoStatuses.uncompleted) {
            filtered = todos.filter(todo => !todo.isCompleted);
        }
        setFilteredTodos(filtered);
    }, [todosStatus, todos]);
    function handleStatus(status) {
        setTodosStatus(status);
    }

    return (
        <>
            <Row>
                <ButtonGroup className="mb-2 lg text-capitalize">
                    {Object.entries(todoStatuses).map((status, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`status-${idx}`}
                            type="radio"
                            variant={'outline-primary'}
                            name="radio"
                            value={status[0]}
                            checked={todosStatus === status[0]}
                            onChange={handleStatus.bind(null, status[0])}
                        >
                            {status[0]}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Row>
            <Row className=" ">
                {filteredTodos.map(selectedTodo => (
                    <Item key={selectedTodo.id} selectedTodo={selectedTodo} />
                ))}
            </Row>
        </>
    );
};

export default TodoBox;
