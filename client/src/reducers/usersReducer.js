import axios from 'axios';

const SHOW_USERS = 'SHOW-USERS';
const LOADING = 'LOADING';

let initialState = {
    loading: false,
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:
            let usersState = { ...state };
            usersState.users = action.data;
            return usersState;
        case LOADING:
            let loadingState = { ...state };
            loadingState.loading = !loadingState.loading;
            return loadingState;
        default:
            return state;
    }
}

export const showUsersActionCreator = (users) => {
    return {
        type: SHOW_USERS,
        data: users
    }
}

export const loadingSwitchActionCreator = () => { return ({ type: LOADING }) };

export const getUsersThunkCreator = () => dispatch => {
    dispatch(loadingSwitchActionCreator());
    setTimeout(() => {
        axios.get('/api/users').then(res => {
            dispatch(showUsersActionCreator(res.data));
            dispatch(loadingSwitchActionCreator());
        });
    }, 5000);
}

export default usersReducer;