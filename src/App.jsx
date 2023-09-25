import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import TodosList from './pages/TodosList';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todosList" element={<TodosList />} />
                <Route path="/todosList/:id" element={<Todo />} />
            </Routes>
        </>
    );
}

export default App;
