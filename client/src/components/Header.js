import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
width: 100%;
border-bottom: 2px solid #eaeaea;
padding: 15px;
height: 85px;
box-sizing: border-box;
`;

const Logo = styled.div`
width: 350px;
height: 100%;
padding: 15px 0px;
box-sizing: border-box;
`;

const H1 = styled.h1`
font-size: 20px;
font-weight: 700;
color: #393939;
`;

const H2 = styled.h1`
font-size: 15px;
font-weight: 100;
`;

const Header = () => {
    return(
        <StyledHeader>
            <Logo>
            <Link to="/">
                <H1>MCRM</H1>
            </Link>
            <H2>Modern CRM for business by Artem Mikhailov</H2>
            </Logo>
        </StyledHeader>
    );
}

export default Header;