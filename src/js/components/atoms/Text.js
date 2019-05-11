import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rgba } from 'polished'

const modifier = (prop, props) => {
    switch (prop) {
        case 'brand':
            return rgba(props.theme.colors.brand.base, 0.9)
        case 'interactive':
            return rgba(props.theme.colors.interactive.base, 0.9)
        case 'dark':
            return rgba(props.theme.colors.layout.white, 0.9)
        case 'warning':
            return rgba(props.theme.colors.denotive.warning, 0.9)
        default:
            return rgba(props.theme.colors.layout.black, 0.9)
    }
}

const H1 = styled.h1`
    font-family: ${props => props.theme.fonts.headings.primary};
    font-size: 56px;
    font-weight: 600;
    line-height: 1.2;
    margin: 0px 0px 16px 0px;
    color: ${props => modifier(props.mod, props)};
    max-width: 500px;
`
const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.headings.secondary};
    font-size: 48px;
    font-weight: 300;
    line-height: 1.2;
    margin: 0px 0px 16px 0px;
    color: ${props => modifier(props.mod, props)};
    max-width: 500px;
`
const H3 = styled.h3`
    font-family: ${props => props.theme.fonts.headings.primary};
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin: 0px 0px 16px 0px;
    color: ${props => modifier(props.mod, props)};
    max-width: 500px;
`
const H4 = styled.h4`
    font-family: ${props => props.theme.fonts.headings.secondary};
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
    margin: 0px 0px 16px 0px;
    color: ${props => modifier(props.mod, props)};
    max-width: 500px;
`
const P = styled.p`
    font-family: ${props => props.theme.fonts.body};
    font-size: 16px;
    line-height: 1.5;
    margin: 0px 0px 20px 0px;
    color: ${props => modifier(props.mod, props)};
    max-width: 500px;
`
const Small = styled.small`
    font-family: ${props => props.theme.fonts.headings.secondary};
    font-size: 12px;
    line-height: 1.5;
    margin: 0px 0px 16px 0px;
    color: ${props => modifier(props.mod, props)};
    max-width: 500px;
`

export default function Text({ tag, mod, children, className }) {
    switch (tag) {
        case 'h1':
            return (
                <H1 className={className} mod={mod}>
                    {children}
                </H1>
            )
        case 'h2':
            return (
                <H2 className={className} mod={mod}>
                    {children}
                </H2>
            )
        case 'h3':
            return (
                <H3 className={className} mod={mod}>
                    {children}
                </H3>
            )
        case 'h4':
            return (
                <H4 className={className} mod={mod}>
                    {children}
                </H4>
            )
        case 'p':
            return (
                <P className={className} mod={mod}>
                    {children}
                </P>
            )
        case 'small':
            return (
                <Small className={className} mod={mod}>
                    {children}
                </Small>
            )

        default:
            return <p>{children}</p>
    }
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    mod: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
}
