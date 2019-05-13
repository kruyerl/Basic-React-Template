import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Anchor from '../atoms/Anchor'
import { Input, Label } from '../atoms/Form'
import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from '../../store/types'
import { signupUser } from '../../store/actions/userActions'
import { validateSignUp } from '../../utils/validators'

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
function SignUp({ history }) {
    const appState = useSelector(redux => redux)
    const dispatch = useDispatch()
    const [state, setState] = useState({
        form: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    })

    const handleChange = e => {
        setState({
            ...state,
            form: { ...state.form, [e.target.id]: e.target.value },
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: LOADING_UI })
        // validate form
        const validated = validateSignUp(state.form)
        if (validated.valid) {
            dispatch(signupUser(state.form, history))
        } else {
            dispatch({
                type: SET_ERRORS,
                payload: validated.errors,
            })
        }
    }

    useEffect(
        () => () => {
            dispatch({
                type: CLEAR_ERRORS,
            })
        },
        [dispatch]
    )

    return (
        <>
            <div>
                <Text tag="h3">Welcome</Text>
                <Text tag="h4">Let's get to work</Text>
                <StyledForm onSubmit={handleSubmit}>
                    <Label tag="small">
                        <StyledLabel tag="small">Username</StyledLabel>
                        <StyledInput
                            onChange={handleChange}
                            id="username"
                            value={state.form.username}
                            type="text"
                            name=""
                        />
                        {appState.ui.errors.username && (
                            <ValidatorLabel mod="warning" tag="small">
                                {appState.ui.errors.username}
                            </ValidatorLabel>
                        )}
                    </Label>
                    <Label tag="small">
                        <StyledLabel tag="small">Email</StyledLabel>
                        <StyledInput onChange={handleChange} id="email" value={state.form.email} type="email" name="" />
                        {appState.ui.errors.email && (
                            <ValidatorLabel mod="warning" tag="small">
                                {appState.ui.errors.email}
                            </ValidatorLabel>
                        )}
                    </Label>
                    <Label tag="small">
                        <StyledLabel tag="small">Password</StyledLabel>
                        <StyledInput
                            onChange={handleChange}
                            id="password"
                            value={state.form.password}
                            type="password"
                            name="password"
                        />
                        {appState.ui.errors.password && (
                            <ValidatorLabel mod="warning" tag="small">
                                {appState.ui.errors.password}
                            </ValidatorLabel>
                        )}
                    </Label>
                    <Label tag="small">
                        <StyledLabel tag="small">Confirm Password</StyledLabel>
                        <StyledInput
                            onChange={handleChange}
                            id="confirmPassword"
                            value={state.form.confirmPassword}
                            type="password"
                            name="confirmPassword"
                        />
                        {appState.ui.errors.confirmPassword && (
                            <ValidatorLabel mod="warning" tag="small">
                                {appState.ui.errors.confirmPassword}
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
                            Already a member?{' '}
                            <StyledAnchor mod="interactive" tag="link" to="/login?sign-in">
                                Sign in
                            </StyledAnchor>
                        </Text>
                    </StyledCTA>
                </StyledForm>
            </div>
        </>
    )
}

export default SignUp
