import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import {deleteTodo, setCompleteTodo} from "../redux/todosSlice";
import {Portal} from "./Portal";

import Card from 'react-bootstrap/Card';
const Item = ({selectedTodo}) => {
    const  {taskBody, taskTitle, id, isCompleted} = selectedTodo
    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(isCompleted)
    const dispatch = useDispatch()
    const toggle = () => setOpenModal(!openModal)
    const    handleChange =  (event) =>{
        setChecked(!checked)
          dispatch(   setCompleteTodo({isChecked:event.target.checked, id}))
     }
    return (

        <Card className="d-flex   bg-light col-3 p-2 ">
            <Card.Title>{taskTitle}</Card.Title>
            <Card.Body>{taskBody}</Card.Body>
            <label className="completed form-check">
                <input data-item-id="4"
                       type="checkbox"
                       className="form-check-input mb-3"
                       checked={checked}
                       onChange={handleChange}/> Finished
            </label>
            <button type="submit" className="btn btn-danger mb-2" onClick={()=>dispatch(deleteTodo({id}))}>Delete task</button>
            <button type="submit" className="btn btn-warning" onClick={toggle}>Modify task</button>
            <Portal openModal={openModal} toggle={toggle} taskTitle={taskTitle} taskBody={taskBody} id={id}/>
        </Card>
    )

}

export default Item

Item.propTypes = {
    selectedTodo: PropTypes.shape({
        taskBody: PropTypes.string, taskTitle: PropTypes.string, id:PropTypes.number, isCompleted: PropTypes.bool
    }),
};