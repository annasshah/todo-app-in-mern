import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { type_constants} from '../utils/contants';
import user_auth_slice from './slices/user_auth_slice';
import todos_slice from './slices/todos_slice';


let reducers = combineReducers({
    user_auth: user_auth_slice,
    todos_slice
    
})


const rootReducer = (state, action) => {
    if (action.type === type_constants.TYPE_LOGOUT_USER) {
        state = undefined
    }
    return reducers(state, action)
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
    { reducer: rootReducer },
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


export default store