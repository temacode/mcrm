import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuList = styled.ul`
margin-top: 22px;
`;

const MenuButton = styled(Link)`
position: relative;
display: block;
padding: 16px 32px;
border-radius: 6px;
margin-bottom: 20px;
/* box-shadow: 0 1px 6px 0 #eaeaea; */
cursor: pointer;
color: #393939;
transition: 0.3s;
font-weight: 600;
overflow: hidden;
:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #eaeaea;
    opacity: 0;
    transition: 0.3s;
    transform: translateX(-50%) translateY(-50%);
}
:hover {
    :before {
        width: 300px;
        height: 300px;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0.5;
    }
}
`;

const Menu = props => {
    function MenuItems(props) {
        let menuArray = props.menu;
        let menuList = menuArray.map((value, index, array) => {
            return <MenuButton key={"menuTab" + index} to={value.href}>{value.title}</MenuButton>
        });
        return (
            <MenuList>{menuList}</MenuList>
        );
    }
    return (
        <div>
            <MenuItems menu={props.menu}></MenuItems>
        </div>
    );
}

export default Menu;