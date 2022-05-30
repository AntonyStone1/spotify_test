import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import spotifyReducer from './reducers'

const middlewareEnchancer = applyMiddleware(thunkMiddleware)

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(middlewareEnchancer)

const store = createStore(spotifyReducer, enhancer)

export default store