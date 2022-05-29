import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import spotifyReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({ reducer: spotifyReducer }, composedEnhancer)

export default store