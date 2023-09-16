import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import TodosList from "./pages/TodosList";
import {Nav} from "react-bootstrap";

function App() {
  return <>
            <Nav className="w-50nav nav-pills mb-3 p-2 bg-light">
                <NavLink  className="nav-link mr-3" to="/" end>Home</NavLink >
                <NavLink className="nav-link  mx-lg-0"  to="/todosList">Todos List</NavLink>
            </Nav>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/todosList" element={<TodosList/>} />
                  <Route path="/todosList/:id" element={<Todo/>} />
              </Routes>
          </>
}

export default App;
