/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Anchor from '../atoms/Anchor'
import { Input, Label } from '../atoms/Form'
import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from '../../store/types'
import { loginUser } from '../../store/actions/userActions'
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
    })
    const handleChange = e => {
        setState({ ...state, form: { ...state.form, [e.target.id]: e.target.value } })
    }
    useEffect(
        () => () => {
            dispatch({
                type: CLEAR_ERRORS,
            })
        },
        []
    )
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: LOADING_UI })
        // validate form
        const validated = validateSignIn(state.form)
        if (validated.valid) {
            dispatch(loginUser(state.form, history))
        } else {
            dispatch({
                type: SET_ERRORS,
                payload: validated.errors,
            })
        }
    }

    return (
        <>
            <div>
                <Text tag="h3">Welcome back</Text>
                <Text tag="h4">Let's get to work</Text>

                <StyledForm noValidate onSubmit={handleSubmit}>
                    <Label htmlFor="email" tag="small">
                        <StyledLabel tag="small">Email </StyledLabel>
                        <StyledInput
                            id="email"
                            value={state.form.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                        />
                        {appState.ui.errors.email && (
                            <ValidatorLabel mod="warning" tag="small">
                                {appState.ui.errors.email}
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
                        {appState.ui.errors.password && (
                            <ValidatorLabel mod="warning" tag="small">
                                {appState.ui.errors.password}
                            </ValidatorLabel>
                        )}
                    </Label>
                    {appState.ui.errors.general && (
                        <GeneralValidatorLabel mod="warning" tag="small">
                            {appState.ui.errors.general}
                        </GeneralValidatorLabel>
                    )}
                    {appState.ui.loading && (
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
