/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Anchor from '../atoms/Anchor'
import { Input, Label } from '../atoms/Form'
import { validateSignIn } from '../../utils/validators'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 24px;
`
const StyledButton = styled(Button)`
    margin: 8px 0px;
    border-color: transparent;
`
const StyledInput = styled(Input)`
    margin-bottom: 8px;
`
const StyledCTA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    small {
        margin-bottom: 0px;
    }
`
const StyledAnchor = styled(Anchor)`
    font-size: 12px;
`
const StyledLabel = styled(Text)`
    margin-bottom: 4px;
`
const ValidatorLabel = styled(Text)`
    text-align: right;
    margin: -4px 0 0 0;
`
const GeneralValidatorLabel = styled(Text)`
    text-align: center;
    margin: -4px 0 0 0;
`

function SignIn({ history }) {
    const appState = useSelector(redux => redux)
    const dispatch = useDispatch()

    const [state, setState] = useState({
        form: {
            email: '',
            password: '',
        },
        errors: {},
        valid: {},
        loading: false,
        submitted: false,
    })
    const handleChange = e => {
        setState({ ...state, form: { ...state.form, [e.target.id]: e.target.value } })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: 'increase-counter', payload: state.form })
    }

    return (
        <>
            <div>
                <Text tag="h3">Welcome back</Text>
                <Text tag="h4">Let's get to work</Text>

                <StyledForm noValidate onSubmit={handleSubmit}>
                    <Label htmlFor="email" tag="small">
                        <StyledLabel tag="small">Email {`${state.loading}`}</StyledLabel>
                        <StyledInput
                            id="email"
                            value={state.form.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                        />
                        {state.errors.email && (
                            <ValidatorLabel mod="warning" tag="small">
                                {state.errors.email}
                            </ValidatorLabel>
                        )}
                    </Label>
                    <Label htmlFor="password" tag="small">
                        <StyledLabel tag="small">Password</StyledLabel>
                        <StyledInput
                            id="password"
                            value={state.form.password}
                            onChange={handleChange}
                            type="password"
                            name=""
                        />
                        {state.errors.password && (
                            <ValidatorLabel mod="warning" tag="small">
                                {state.errors.password}
                            </ValidatorLabel>
                        )}
                    </Label>
                    {state.errors.general && (
                        <GeneralValidatorLabel mod="warning" tag="small">
                            {state.errors.general}
                        </GeneralValidatorLabel>
                    )}
                    {state.loading && (
                        <GeneralValidatorLabel mod="brand" tag="p">
                            Loading...
                        </GeneralValidatorLabel>
                    )}

                    <StyledCTA>
                        <StyledButton mod="interactive">Sign In</StyledButton>
                        <Text tag="small">
                            new to Intently?{' '}
                            <StyledAnchor mod="interactive" tag="link" to="/login?sign-up">
                                Sign Up
                            </StyledAnchor>
                        </Text>
                    </StyledCTA>
                </StyledForm>
            </div>
        </>
    )
}
SignIn.propTypes = {
    history: PropTypes.object.isRequired,
}

export default SignIn
