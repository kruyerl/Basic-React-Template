import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rgba } from 'polished'
import { Link, NavLink } from 'react-router-dom'
import LogoPic from '../../../assets/img/logo.svg'
import Anchor from "../atoms/Anchor";
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Background = styled.nav`
    background: ${props => rgba(props.theme.colors.layout.white, 0.5)};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 40px 24px;
    z-index: 800;
`
const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: ${props => props.theme.screens.desktop};
    margin: 0 auto;
    object {
    }
`

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        margin-left: 1em;
    }
`

export default function Navbar() {
    return (
        <Background>
            <StyledNavbar>
                <Link to="/">
                    <img src={LogoPic} alt="Logo for Intently" />
                </Link>
                <StyledUl>
                    <SignedInLinks />
                    <SignedOutLinks />
                </StyledUl>
            </StyledNavbar>
        </Background>
    )
}

Navbar.propTypes = {}
