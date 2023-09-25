import React from 'react';
import { createPortal } from 'react-dom';
import { ModalCustomized } from './Modal';
import PropTypes from 'prop-types';
import { useMyContext } from '../todoContext';

export const Portal = () => {
    const { openModal, toggle, selectedTodo } = useMyContext();
    if (!selectedTodo) return;
    const { taskBody, taskTitle, id } = selectedTodo;

    return (
        <>
            {openModal &&
                createPortal(
                    <ModalCustomized
                        taskBody={taskBody}
                        taskTitle={taskTitle}
                        onClose={toggle}
                        id={id}
                    />,
                    document.body
                )}
        </>
    );
};

Portal.propTypes = {
    openModal: PropTypes.bool,
    toggle: PropTypes.func,
    taskTitle: PropTypes.string,
    taskBody: PropTypes.string,
    id: PropTypes.string,
};
