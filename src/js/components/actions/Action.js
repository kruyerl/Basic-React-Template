import React, { useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Text from '../atoms/Text'

const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px;
    width: 100%;
    border-top: 1px solid ${props => rgba(props.theme.colors.brand.base, 0.02)};
    border-bottom: 1px solid ${props => rgba(props.theme.colors.brand.base, 0.02)};
`
const Right = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`
const CheckBox = styled.button`
    min-width: 24px;
    width: 24px;
    min-height: 24px;
    height: 24px;
    padding: 0px;
    border-radius: 50%;
    border: 1px solid ${props => rgba(props.theme.colors.brand.base, 0.2)};
    background: ${props => {
        if (props.checked) return props.theme.colors.interactive.base
        return props.theme.colors.layout.grey
    }};
    color: ${props => {
        if (props.checked) return props.theme.colors.layout.white
        return `transparent`
    }};
    transition: all 300ms ease-in-out;
    outline: 0px;
    margin-right: 16px;
    &:hover {
        ${props => props.theme.shadows.active};
        outline: 0px;
    }
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Content = styled(Text)`
    margin: 0px;

    text-decoration: ${props => {
        if (props.checked) return `line-through`
        return `none`
    }};
    color: ${props => {
        if (props.checked) return props.theme.colors.denotive.disabled
        return props.theme.colors.brand.dark
    }};
    transition: all 300ms ease-in-out;
    strong {
        margin-right: 24px;
    }
`
const ObjectiveContent = styled(Text)`
    margin: 0px;

    text-decoration: ${props => {
        if (props.checked) return `line-through`
        return `none`
    }};
    color: ${props => {
        if (props.checked) return props.theme.colors.denotive.disabled
        return rgba(props.theme.colors.brand.dark, 0.6)
    }};
    transition: all 300ms ease-in-out;
`

const Action = ({ body, category, objective }) => {
    const [state, setState] = useState({
        checked: false,
    })

    const handleClick = () => {
        setState({ checked: !state.checked })
    }

    const setCategory = categoryId => {
        switch (categoryId) {
            case 1:
                return 'Health'
            case 2:
                return 'Self'
            case 3:
                return 'Wealth'
            case 4:
                return 'Others'
            default:
                return 'none'
        }
    }

    return (
        <Container>
            <Right onClick={handleClick}>
                <CheckBox checked={state.checked}>✓</CheckBox>
                <ContentContainer>
                    <Content checked={state.checked} tag="p">
                        <strong>{`${setCategory(category)}`}</strong>
                        {`${body}`}
                    </Content>
                    <ObjectiveContent checked={state.checked} tag="small">
                        {objective}
                    </ObjectiveContent>
                </ContentContainer>
            </Right>
            <div>
                <Content tag="p">#</Content>
            </div>
        </Container>
    )
}

export default Action
