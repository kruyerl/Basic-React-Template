import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TemplateStateFull from './TemplateStateFull'

const StyledPage = styled.section`
    background-color: palevioletred;
    height: 100%;
    width: 100%;
    max-width: ${props => (props.maxWidth ? props.theme.screens.desktop : `100vw`)};
`

export default function Section({ maxWidth, children }) {
    return (
        <StyledPage {...maxWidth}>
            <h1>testing</h1>
            <TemplateStateFull />

            {children}
        </StyledPage>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.bool,
}
