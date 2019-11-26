import React from 'react';
import styled from 'styled-components';

const H4 = styled.h4`
font-size: 16px;
font-weight: 400;
color: #393939;
`;

const TextHeader = (props) => {
    return(
        <H4>
            {props.children}
        </H4>
    );
}

export default TextHeader;