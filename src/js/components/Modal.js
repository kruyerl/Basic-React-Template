import React from 'react'
import styled from 'styled-components'
import { rgba, linearGradient } from 'polished'
import Anchor from '../components/Anchor'
import backgroundPic from '../../assets/img/signupBackground.jpg'

const Container = styled.div`
    position: fixed;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    background: url('${backgroundPic}');
    background-size: cover;
    padding: 24px;
    z-index: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props => rgba(props.theme.colors.brand.base, 0.8)};
    }
    @media (max-width: ${props => props.theme.screens.mobile}) {
        padding: 0px;
    }
`
const ContentBlock = styled.div`
    position: relative;
    background: ${props => props.theme.colors.layout.white};
    width: 100%;
    max-width: ${props => props.theme.screens.mobile};
    min-height: 400px;
    ${props => props.theme.shadows.z1};
    border-radius: 3px;
    padding: 40px;
    @media (max-width: ${props => props.theme.screens.mobile}) {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
const Close = styled(Anchor)`
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 20px;
`

function Auth(props) {
    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <Container onClick={handleClick}>
            <ContentBlock>
                <Close tag="link" to="/">
                    ╳
                </Close>
            </ContentBlock>
        </Container>
    )
}

export default Auth
