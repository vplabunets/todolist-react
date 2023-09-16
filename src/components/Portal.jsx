import React from 'react'
import {createPortal} from "react-dom";
import {ModalCustomized} from "./Modal";
import PropTypes from "prop-types";

export const  Portal =({openModal, toggle, taskTitle, taskBody, id})=> {
         return (
            <>
                {openModal && createPortal(
                    <ModalCustomized taskBody={taskBody} taskTitle={taskTitle} onClose={toggle} id={id}/>,
                    document.body
                )}
            </>
        );

}

Portal.propTypes = {
    openModal: PropTypes.func,
    toggle: PropTypes.func,
    taskTitle: PropTypes.string,
    taskBody: PropTypes.string,
    id:PropTypes.number
};