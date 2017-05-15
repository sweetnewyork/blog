import React from 'react'
import ReactDom from 'react-dom'

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import {Route, BrowserRouter} from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {Home, Technology, Mathematics, Life} from './components/Main.jsx'

//action
const REQUEST_DATA = 'REQUEST_DATA'
const RECEIVE_DATA = 'RECEIVE_DATA'

function requestData() {
    return {
        type: REQUEST_DATA
    }
}

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data: data
    }
}

//reducer
function togglePostList(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, {isFetching: true})
        case RECEIVE_DATA:
            return Object.assign({}, state, {isFetching: false, items: action.data})
        default:
            return state
    }
}

let todoApp = combineReducers({
    togglePostList
})

//store
let store = createStore(todoApp)

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="fill-height">
                <Header />

                <Route exact path="/" component={Home}/>
                <Route path="/tech" component={Technology}/>
                <Route path="/math" component={Mathematics}/>
                <Route path="/life" component={Life}/>

                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDom.render(
    <App />,
    document.getElementById('app')
)