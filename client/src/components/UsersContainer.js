import { connect } from 'react-redux';
import Users from './Users';
import { getUsersThunkCreator } from '../reducers/usersReducer';

let mapStateToProps = state => {
    return({
        users: state.users.users,
        loading: state.users.loading
    });
}

let mapDispatchToProps = dispatch => {
    return({
        getUsers: () => {
            dispatch(getUsersThunkCreator());
        }
    });
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;