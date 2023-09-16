import React, {useState} from "react";
import { modifyTodo} from "../redux/todosSlice";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

export const ModalCustomized = ({onClose, taskTitle, taskBody,id})=> {
    const dispatch = useDispatch()
    const [currentTaskBody, setCurrentTaskBody] = useState(taskBody)
    const handleChange = event => {
        setCurrentTaskBody(event.target.value)
    };
    const handleSubmit = event => {
        event.preventDefault()
         dispatch(modifyTodo({id,taskBody:currentTaskBody}))
        onClose()
    };

    return (<div className="modal" style={{display: "block"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">Modifying of task <b>{taskTitle}</b></div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={ onClose}>
                        </button>
                    </div>
                     <form>
                        <textarea type="text"
                               className="form-control"
                               value={currentTaskBody}
                               name="currentTask"
                               placeholder="I am going..."
                               onChange={handleChange}
                               required
                        />
                    <div className="modal-footer">
                        <button type="button" className="modal-close-button btn btn-success"
                                onClick={ handleSubmit}>Confirm
                        </button>
                        <button type="button" className="modal-close-button btn btn-danger"
                                onClick={ onClose}>Cancel
                        </button>
                    </div>
                     </form>
                </div>
            </div>
        </div>)
}

ModalCustomized.propTypes = {
    onClose: PropTypes.func, taskTitle: PropTypes.string, taskBody: PropTypes.string,id:PropTypes.number
};