import { Badge } from '@material-ui/core';

import {ShoppingCartOutlined,Search, Facebook, Twitter, Instagram, YouTube} from '@material-ui/icons';


import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 100px;
    background-color: #6B635D;
    padding : 80px 60px;
`;

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : center;
    align-items: center;

    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
`;

const Column = styled.div`
    display:flex;
    flex-direction : column;
    text-align: left;
    margin-left: 60px;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
`;


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Column>
                    <Language style={{color:'black'}}>About Us</Language>
                    <Language style={{color:'black'}}>Help</Language> 
                    <Language style={{color:'black'}}>Contact Us</Language> 
                    <Badge color = "primary"> 
                    <Instagram/><Twitter/><Facebook/><YouTube/>
                    </Badge>
                    </Column>
                   
                </Left>
              
            </Wrapper>
            
        </Container>
    )
}

export default Footer
