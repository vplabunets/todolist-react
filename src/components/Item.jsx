import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, setCompleteTodo } from '../redux/slices/todosSlice';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMyContext } from '../todoContext';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Item = ({ selectedTodo }) => {
    const { taskBody, taskTitle, id, isCompleted } = selectedTodo;
    const { toggle } = useMyContext();
    const [checked, setChecked] = useState(isCompleted);
    const dispatch = useDispatch();
    console.log(window.location.href);
    const handleDelete = (id, event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(deleteTodo({ id }));
    };
    const handleModify = (data, event) => {
        event.stopPropagation();
        event.preventDefault();
        toggle(data);
    };
    const handleChange = event => {
        setChecked(!checked);
        dispatch(setCompleteTodo({ isChecked: event.target.checked, id }));
    };
    const handlePropagation = event => {
        event.stopPropagation();
        event.preventDefault();
    };
    return (
        <div key={selectedTodo.id} className="col-md-6 mb-4 ">
            <Card className="d-flex bg-light p-2 ">
                {!window.location.href.includes(selectedTodo.id) ? (
                    <Link
                        to={
                            window.location.href.includes('todosList')
                                ? `${selectedTodo.id}`
                                : `todosList/${selectedTodo.id}`
                        }
                    >
                        <Card.Title>{taskTitle}</Card.Title>
                        <Card.Body>{taskBody}</Card.Body>
                        <div
                            className="form-check-label"
                            onClick={handlePropagation}
                        >
                            <Form.Check type="checkbox" onChange={handleChange}>
                                <Form.Check.Input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                                <Form.Check.Label>
                                    {checked ? 'OK' : 'NOK'}
                                </Form.Check.Label>
                            </Form.Check>
                        </div>
                        <Button
                            variant="danger"
                            className=" me-2"
                            onClick={handleDelete.bind(null, id)}
                        >
                            Delete task
                        </Button>
                        <Button
                            type="button"
                            variant="warning"
                            onClick={handleModify.bind(null, {
                                taskTitle,
                                taskBody,
                                id,
                            })}
                        >
                            Modify task
                        </Button>
                    </Link>
                ) : (
                    <div className=" d-flex-c bg-light p-2 w-25">
                        <Card.Title>{taskTitle}</Card.Title>
                        <Card.Body>{taskBody}</Card.Body>
                        <div
                            className="form-check-label"
                            onClick={handlePropagation}
                        >
                            <Form.Check type="checkbox" onChange={handleChange}>
                                <Form.Check.Input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                                <Form.Check.Label>
                                    {checked ? 'OK' : 'NOK'}
                                </Form.Check.Label>
                            </Form.Check>
                        </div>

                        <Button
                            variant="danger"
                            className=" me-2"
                            onClick={handleDelete.bind(null, id)}
                        >
                            Delete task
                        </Button>
                        <Button
                            type="button"
                            variant="warning"
                            onClick={handleModify.bind(null, {
                                taskTitle,
                                taskBody,
                                id,
                            })}
                        >
                            Modify task
                        </Button>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default Item;

Item.propTypes = {
    selectedTodo: PropTypes.shape({
        taskBody: PropTypes.string,
        taskTitle: PropTypes.string,
        id: PropTypes.string,
        isCompleted: PropTypes.bool,
    }),
};
