import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo, deleteAll } from '../redux/slices/todosSlice';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

const TodoForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        taskTitle: Yup.string()
            .min(5, 'Must be 5 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Task Title is required'),
        taskBody: Yup.string()
            .min(1, 'Must be 5 characters or more')
            .max(500, 'Must be 15 characters or less')
            .required('Task Body is required'),
    });
    const handleDeleteAll = () => {
        dispatch(deleteAll());
    };
    const cleanForm = () => {
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues: {
            taskTitle: '',
            taskBody: '',
            isCompleted: false,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(
                addTodo({
                    id: uuidv4(),
                    taskTitle: values.taskTitle,
                    taskBody: values.taskBody,
                    isCompleted: false,
                })
            );
            cleanForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                    id="taskTitle"
                    name="taskTitle"
                    placeholder="Title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.taskTitle}
                    isInvalid={
                        formik.touched.taskTitle && formik.errors.taskTitle
                    }
                />
                {formik.touched.taskTitle && formik.errors.taskTitle && (
                    <div className="text-danger  ">
                        {formik.errors.taskTitle}
                    </div>
                )}
                <Form.Label>Task body</Form.Label>
                <Form.Control
                    as="textarea"
                    id="taskBody"
                    name="taskBody"
                    placeholder="Task body"
                    style={{ height: '250px' }}
                    onChange={formik.handleChange}
                    value={formik.values.taskBody}
                    isInvalid={
                        formik.touched.taskBody && formik.errors.taskTitle
                    }
                />
                {formik.touched.taskBody && formik.errors.taskBody && (
                    <div className="text-danger">{formik.errors.taskBody}</div>
                )}
            </Row>
            <Row className="d-flex  justify-content-center">
                <Col className="d-flex  justify-content-center">
                    <Button type="submit">Add Todo</Button>{' '}
                </Col>
                <Col className="d-flex  justify-content-center">
                    <Button variant="warning" type="button" onClick={cleanForm}>
                        Clear Form
                    </Button>{' '}
                </Col>
                <Col className="d-flex  justify-content-center">
                    <Button
                        variant="danger"
                        type="button"
                        onClick={handleDeleteAll}
                    >
                        Delete All
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default TodoForm;
