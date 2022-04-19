import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

// esto es para que pueda enviar varios reducer  porque el create solo me recibe
// uno solito 
const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);