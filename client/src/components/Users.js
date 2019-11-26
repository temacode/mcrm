import React from 'react';
import styled from 'styled-components';
import ContentHeader from './ContentHeader';
import { GooSpinner } from "react-spinners-kit";

const UserItem = styled.div`
`;

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        let usersElement = this.props.users.map((u, index, array) => 
            <UserItem key={index}>{u.name.firstName}</UserItem>
        );
        return (
            <div>
                <ContentHeader>Пользователи</ContentHeader>
                {this.props.loading ? <GooSpinner size={40} color="#686769" loading={this.props.loading}></GooSpinner> : usersElement}
            </div>
        );
    }
}

export default Users;