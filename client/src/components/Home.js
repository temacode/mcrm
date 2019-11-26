import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ContentHeader from './ContentHeader';
import SettingsContainer from './SettingsContainer';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import UsersContainer from './UsersContainer';

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
`;

const ContentBody = styled.div`
width: 100%;
height: 100%;
`;

const Content = styled.div`
box-sizing: border-box;
padding: 15px;
box-sizing: border-box;
`;

const Home = (props) => {
    return (
        <Wrapper>
            <SidebarContainer></SidebarContainer>
            <ContentBody>
                <HeaderContainer></HeaderContainer>
                <Content>
                    <Switch>
                        <Route path="/users">
                            <UsersContainer></UsersContainer>
                        </Route>
                        <Route path="/settings">
                            <SettingsContainer></SettingsContainer>
                        </Route>
                        <Route path="/">
                            <ContentHeader>Главная</ContentHeader>
                        </Route>
                    </Switch>
                </Content>
            </ContentBody>
        </Wrapper>
    );
}

export default Home;