import headerReducer from './reducers/headerReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import sidebarReducer from './reducers/sidebarReducer';
import settingsReducer from './reducers/settingsReducer';
import thunkMiddleware from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import usersReducer from './reducers/usersReducer';

let reducers = combineReducers({
        header: headerReducer,
        sidebar: sidebarReducer,
        settings: settingsReducer,
        menu: menuReducer,
        users: usersReducer
    }
)

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; //Убрать на проде

export default store;