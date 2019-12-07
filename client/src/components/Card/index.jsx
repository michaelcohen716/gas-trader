import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    background: #e9e6da;
    padding: 0px;
    border: 2px solid grey;
    box-shadow: 2px 2px #dc5ff4, 4px 4px #9d63f7;
    margin-bottom: 20px;
`;

const CardHeader = styled.div`
    text-align: center;
    background: #cac9bf;
    padding: 10px;
    h3 {
        margin: 0px;
        font-size: 14px;
        font-weight: bold;
    }
`;

const CardBody = styled.div`
    padding: 10px 20px 20px 20px;
`;


const Card = ({ children, title }) => (
<StyledCard>
        <CardHeader>
            <h3>{title}</h3>
        </CardHeader>
        <CardBody>
            {children}
        </CardBody>
    </StyledCard>
);

export default Card;