import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import App from './containers/App'
import thunk from 'redux-thunk'

render(
    <Provider>
        <App/>
    </Provider>, document.getElementById('root')
)
