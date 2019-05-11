import React, { useEffect } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Text from '../atoms/Text'

import Actions from '../actions/Actions'
import Action from '../actions/Action'
import NonNegotiable from '../actions/NonNegotiable'

const Background = styled.section`
    background: ${props => rgba(props.theme.colors.layout.white, 0.5)};
    width: 100%;
    padding: 160px 24px 72px 24px;
`
const StyledContainer = styled.div`
    max-width: ${props => props.theme.screens.desktop};
    margin: 0 auto;
`

export default function Dashboard() {
    return (
        <Background>
            <StyledContainer>
                <Text tag="h1">Hi Luke</Text>
                <Text tag="h2">Today's Focus</Text>
                <Text tag="h4">Main objectives:</Text>
                <Actions>
                    <Action category={1} body="Write out a meal plan" objective="Lose 5kg by July" />
                    <Action category={2} body="Play guitar for 30 minutes" objective="Learn to play the guitar" />
                    <Action category={3} body="Set up the monthly budget" objective="Save R10000 by July" />
                    <Action
                        category={4}
                        body="Spend Time with Robyn"
                        objective="Spend 50 hours of Quality time with Robyn by July"
                    />
                </Actions>
                <Text tag="h4">Non negotiables:</Text>
                <Actions>
                    <NonNegotiable body="Workout" />
                    <NonNegotiable body="Hydrate" />
                    <NonNegotiable body="Read" />
                    <NonNegotiable body="Meditate" />
                    <NonNegotiable body="Plan" />
                </Actions>
            </StyledContainer>
        </Background>
    )
}

Dashboard.propTypes = {}
