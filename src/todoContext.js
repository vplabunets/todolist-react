import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CurrentTodoContext = createContext();

export const useMyContext = () => {
    return useContext(CurrentTodoContext);
};

export const CurrentTodoContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const toggle = data => {
        setOpenModal(!openModal);
        setSelectedTodo(data);
    };
    return (
        <CurrentTodoContext.Provider
            value={{ openModal, setOpenModal, toggle, selectedTodo }}
        >
            {children}
        </CurrentTodoContext.Provider>
    );
};

CurrentTodoContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
