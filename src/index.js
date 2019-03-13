import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import UserReducer from './reducers/UserReducer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(UserReducer)

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
,document.getElementById('root'));


