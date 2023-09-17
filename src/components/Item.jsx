import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import {deleteTodo, setCompleteTodo} from "../redux/todosSlice";
import {Portal} from "./Portal";

import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
const Item = ({selectedTodo}) => {
    const  {taskBody, taskTitle, id, isCompleted} = selectedTodo
    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(isCompleted)
    const dispatch = useDispatch()
    const toggle = () => setOpenModal(!openModal)
    const    handleChange =  (event) =>{
        setChecked(!checked)
          dispatch(setCompleteTodo({isChecked:event.target.checked, id}))
     }
    return (
        <div  key={selectedTodo.id} className="col-md-3 mb-4">
        <Card className=" d-flex bg-light p-2 ">
            <Link  className=" " to={`${selectedTodo.id}` }>
            <Card.Title>{taskTitle}</Card.Title>
            <Card.Body>{taskBody}</Card.Body>
                <div className="form-check-label">
                <input data-item-id="4"
                       type="checkbox"
                       className="form-check-input"
                       checked={checked}
                       onChange={handleChange}/>
                    <label  className="form-check-label"> Finished</label>
                </div>
            </Link>
            <button type="button" className="btn btn-danger mb-2" onClick={()=>dispatch(deleteTodo({id}))}>Delete task</button>
            <button type="button" className="btn btn-warning" onClick={toggle}>Modify task</button>
            <Portal openModal={openModal} toggle={toggle} taskTitle={taskTitle} taskBody={taskBody} id={id}/>
        </Card>
        </div>
    )

}

export default Item

Item.propTypes = {
    selectedTodo: PropTypes.shape({
        taskBody: PropTypes.string, taskTitle: PropTypes.string, id:PropTypes.number, isCompleted: PropTypes.bool
    }),
};