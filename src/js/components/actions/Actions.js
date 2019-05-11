import React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'

const Container = styled.ul`
    list-style: none;
    margin: 24px 0;
    padding: 0px;
`

const Actions = ({ children }) => <Container>{children}</Container>
export default Actions
