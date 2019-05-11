import React from 'react'
import styled from 'styled-components'
import Anchor from '../atoms/Anchor'
import backgroundPic from '../../../assets/img/signupBackground.jpg'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

const Container = styled.section`

    position: absolute;
    left: 0;
    right:0;
    top: 0;
    bottom: auto;
    min-height: 100%;
    background: url('${backgroundPic}');
    background-size: cover;
    padding: 24px 10vw;
    z-index: 990;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    @media (max-width: ${props => props.theme.screens.tablet}) {
        padding: 40px;
        justify-content: center;
    };
    @media (max-width: ${props => props.theme.screens.mobile}) {
        padding: 0px;
        height: 100%;
    };
`
const ContentBlock = styled.div`
    position: relative;
    background: ${props => props.theme.colors.layout.white};
    width: 100%;
    max-width: 400px;
    min-height: 400px;
    ${props => props.theme.shadows.z2};
    transition: 300ms all ease-in-out;
    &:hover {
        ${props => props.theme.shadows.active};
    }
    border-radius: 3px;
    padding: 32px;
    box-sizing: border-box;
    @media (max-width: ${props => props.theme.screens.mobile}) {
        width: 100%;
        min-width: 100%;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`
const Close = styled(Anchor)`
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 20px;
    margin-bottom: 0;
`

function Auth(props) {
    const {
        history,
        location: { search },
    } = props
    const handleClick = e => {
        const { target } = e
        if (target.tagName !== 'SECTION') return
        return history.push('/')
    }
    return (
        <Container onClick={handleClick}>
            <ContentBlock>
                <Close tag="link" to="/">
                    ╳
                </Close>
                {search.split('?')[1] === 'sign-in' ? <SignIn {...props} /> : <SignUp />}
            </ContentBlock>
        </Container>
    )
}

export default Auth
