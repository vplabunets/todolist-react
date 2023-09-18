import React from 'react'
import TodoBox from "./TodoBox";
import {useDispatch,useSelector} from "react-redux";
import {addTodo,deleteAll} from "../redux/todosSlice";
import {getTodos} from "../redux/selectors";
import {useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Layout = () => {
    const dispatch = useDispatch()
    const todos = useSelector(getTodos);
    const generateUniqueId = () => {
        return `_${Math.random() * (99999 - 1) + 1}_${Date.now()}`
    }
    const cleanForm =()=> {
        formik.resetForm()
    };

    const formik = useFormik({
        initialValues: {
            taskTitle: '',
            taskBody: '',
            isCompleted: false,
        },
        onSubmit: values => {
             dispatch(addTodo({
                 id: generateUniqueId(),
                 taskTitle: values.taskTitle,
                 taskBody: values.taskBody,
                 isCompleted:false}));
            cleanForm();
         },
    });

    return   <Container >
        <Row>
        <Col>
        <Form  onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
            <Form.Label >Task Title</Form.Label>
            <Form.Control
                id="taskTitle"
                name="taskTitle"
                placeholder="Title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.taskTitle}
                required
            />
            <Form.Label>Task body</Form.Label>
            <Form.Control
                as="textarea"
                id="taskBody"
                name="taskBody"
                placeholder="Task body"
                style={{ height: '250px' }}
                onChange={formik.handleChange}
                value={formik.values.taskBody}
                required
            />
                </Row>
                <Row className="d-flex  justify-content-center">
                    <Col className="d-flex  justify-content-center"><Button type="submit">Add Todo</Button> </Col>
                    <Col className="d-flex  justify-content-center"><Button variant="warning" type="button" onClick={cleanForm}>Clear Form</Button> </Col>
                    <Col className="d-flex  justify-content-center"><Button variant="danger" type="button" onClick={()=>dispatch(deleteAll())}>Delete All</Button> </Col>
                </Row>
        </Form>
        </Col>
        <Col>
            {todos.length>0&&<TodoBox/>}
        </Col>
    </Row>
        </Container>


}

export default Layout