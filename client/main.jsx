import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'

import createStore from './store'

import App from './App'

import './main.scss'

const store = createStore()

const renderComponent = () => {
    render(
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </MuiPickersUtilsProvider>,
        document.getElementById('root')
    )
}


window.onload = () => {
    renderComponent()
}
