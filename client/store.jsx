import {
    createStore as createReduxStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import reduxThunk from 'redux-thunk'


const reducers = combineReducers({
    login: (state, action) => ({ state })
})

const rootReducer = (state, action) => (reducers(state, action))

export default () => {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createReduxStore)
    const store = createStoreWithMiddleware(rootReducer)

    return store
}
