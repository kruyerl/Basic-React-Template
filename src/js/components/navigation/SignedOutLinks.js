import React from 'react'

import Anchor from '../atoms/Anchor'

function SignedOutLinks() {
    return (
        <>
            <li>
                <Anchor tag="navlink" mod="black" to="/login?sign-in">
                    Sign In
                </Anchor>
            </li>
            <li>
                <Anchor tag="navlink" mod="black" to="/login?sign-up">
                    Sign Up
                </Anchor>
            </li>
        </>
    )
}

export default SignedOutLinks
