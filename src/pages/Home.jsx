import React from 'react';
import TodoForm from '../components/TodoForm';
import { Layout } from '../Layout';
import TodoBox from '../components/TodoBox';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <Layout>
            <Col>
                <TodoForm />
            </Col>
            <Col>
                <TodoBox />
            </Col>
        </Layout>
    );
}

export default Home;
