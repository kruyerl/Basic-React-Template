import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Anchor from '../atoms/Anchor'
import { Input, Label } from '../atoms/Form'
import LogoPic from '../../../assets/img/logo.svg'
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
function SignUp(props) {
    const [state, setState] = useState({
        form: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        errors: {
            password: null,
        },
        valid: {},
        submitted: false,
    })

    const handleChange = e => {
        setState({
            ...state,
            form: { ...state.form, [e.target.id]: e.target.value },
        })
        console.log(state)
    }
    function handleSubmit(e) {
        e.preventDefault()
        e.preventDefault()
        const validated = validateSignUp(state.form)
        const userData = state.form
        const url = '/signup'
        const FBtoken = axios
            .post(url, userData)
            .then(res => {
                localStorage.setItem('FbIdToken', `Bearer ${res.data.token}`)
                return res
            })
            .then(res => {
                console.log(res)
                return res.data
            })
            .then(token => {
                console.log(token)

                // settoken to redux
            })
            .catch(err => {
                if (err.response.data) {
                    setState({
                        ...state,
                        errors: err.response.data,
                    })
                }
                console.log(err.response.data)
            })
    }

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
                        {state.errors.username && (
                            <ValidatorLabel mod="warning" tag="small">
                                {state.errors.username}
                            </ValidatorLabel>
                        )}
                    </Label>
                    <Label tag="small">
                        <StyledLabel tag="small">Email</StyledLabel>
                        <StyledInput onChange={handleChange} id="email" value={state.form.email} type="email" name="" />
                        {state.errors.email && (
                            <ValidatorLabel mod="warning" tag="small">
                                {state.errors.email}
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
                        {state.errors.email && (
                            <ValidatorLabel mod="warning" tag="small">
                                {state.errors.password}
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
                        {state.errors.email && (
                            <ValidatorLabel mod="warning" tag="small">
                                {state.errors.confirmPassword}
                            </ValidatorLabel>
                        )}
                    </Label>
                    {state.errors.general && (
                        <GeneralValidatorLabel mod="warning" tag="small">
                            {state.errors.general}
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
