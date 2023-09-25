import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { index, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
// eslint-disable-next-line no-unused-vars
import { CurrentTodoContextProvider } from './todoContext';
import { Portal } from './components/Portal';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CurrentTodoContextProvider>
            <Provider store={index}>
                <PersistGate loading={null} persistor={persistor}>
                    {/*<BrowserRouter  basename="/todolist-react">*/}
                    <BrowserRouter>
                        <App />
                        <Portal />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </CurrentTodoContextProvider>
    </React.StrictMode>
);
