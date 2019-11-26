import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
font-size: 30px;
color: #393939;
margin-bottom: 20px;
`;

const ContentHeader = (props) => {
    return(
        <div>
            <H3>{props.children}</H3>
        </div>
    );
}

export default ContentHeader;