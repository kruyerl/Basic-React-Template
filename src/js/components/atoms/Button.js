import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Text from './Text'

const modifier = ({ mod, theme }) => {
    switch (mod) {
        case 'black':
            return `
                color: ${theme.colors.layout.white};
                background: ${theme.colors.brand.dark};
                &:hover, &:focus {
                    background: ${theme.colors.brand.base};
                    ${theme.shadows.active};
                }

            `
        case 'interactive':
            return `
                color: ${theme.colors.layout.white};
                background: ${theme.colors.interactive.base};
                &:hover{
                    background: ${theme.colors.interactive.light};
                    ${theme.shadows.active};
                }

            `
        case 'white':
            return `
                color: ${theme.colors.brand.base};
                background: ${theme.colors.layout.white};
                &:hover, &:focus {
                    background: ${theme.colors.layout.grey};
                    ${theme.shadows.active};
                }

            `

        default:
            return `
                color: ${theme.colors.layout.white};
                background: ${theme.colors.brand.base};
                &:hover, &:focus {
                    background: ${theme.colors.brand.light};
                    ${theme.shadows.active};
                }

            `
    }
}

const StyledButton = styled.button`
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    transition: all 300ms ease-in-out;
    white-space: nowrap;
    ${props => modifier(props)}

    &:hover {
    }
    &:focus {
        outline: none;
    }
`

export default function Button({ mod, children, className }) {
    return (
        <StyledButton mod={mod} className={className}>
            {children}
        </StyledButton>
    )
}

Button.propTypes = {}
