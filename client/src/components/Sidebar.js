import React from 'react';
import styled from 'styled-components';
import UserToolContainer from './UserToolContainer';
import MenuContainer from './MenuContainer';

const SidebarBody = styled.div`
height: 100%;
width: 300px;
padding: 15px;
border-right: 2px solid #eaeaea;
box-sizing: border-box;
`;

class Sidebar extends React.Component {
    render() {
        return (
            <SidebarBody displayed={this.props.displayed} onClick={this.props.showMenu}>
                <UserToolContainer userpic={this.props.userpic}></UserToolContainer>
                <MenuContainer></MenuContainer>
            </SidebarBody>
        );
    }
}

export default Sidebar;