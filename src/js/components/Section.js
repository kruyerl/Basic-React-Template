import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPage = styled.section`
    max-width: ${props => {
        switch (props.max) {
            case 'desktop':
                return props.theme.screens.desktop
            case 'tablet':
                return props.theme.screens.tablet
            case 'mobile':
                return props.theme.screens.mobile
            default:
                return '100%'
        }
    }};
    margin: 0 auto;
`

export default function Section({ max, children, className }) {
    return (
        <StyledPage className={className} max={max}>
            {children}
        </StyledPage>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    max: PropTypes.string,
    className: PropTypes.string,
}
