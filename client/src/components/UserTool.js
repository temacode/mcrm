import React from 'react';
import styled from 'styled-components';
import userpic from '../img/userpic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const User = styled.div`
box-sizing: border-box;
width: 100%;
height: 68px;
padding: 15px;
border-radius: 6px;
box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
display: flex;
justify-content: space-between;
align-items: center;
`;

const UserPhoto = styled.div`
width: 30px;
height: 30px;
border-radius: 15px;
overflow: hidden;
`;
const Img = styled.img`
width: 100%;
`;
const UserName = styled.div``;
const UserSettings = styled(Link)`
padding: 8px 10px;
background: #eaeaea;
border-radius: 6px;
color: #292929;
`;

class UserTool extends React.Component {
    render() {
        return (
            <User>
                <UserPhoto>
                    <Img src={this.props.userpic || userpic} alt=""></Img>
                </UserPhoto>
                <UserName>
                    <p>Artem Mikhailov</p>
                </UserName>
                <UserSettings to='/settings'>
                    <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                </UserSettings>
            </User>
        );
    }
}

export default UserTool;