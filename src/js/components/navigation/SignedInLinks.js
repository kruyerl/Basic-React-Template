import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../atoms/Anchor'
import { logoutUser } from '../../store/actions/userActions'

function SignedInLinks() {
    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault()
        dispatch(logoutUser())
    }

    return (
        <>
            <li>
                <Anchor tag="navlink" mod="black" to="/" onClick={handleClick}>
                    Sign Out
                </Anchor>
            </li>
        </>
    )
}

export default SignedInLinks
