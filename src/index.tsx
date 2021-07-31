import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'urql';
import App from './App';
import './styles/index.css';
import { UrqlClient } from './urql.client';

const client = new UrqlClient();

ReactDOM.render(
    <React.StrictMode>
        <Provider value={client.urqlClient}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
