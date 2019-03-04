import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import loginReducer from './reducers/loginReducer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(loginReducer)

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
,document.getElementById('root'));


