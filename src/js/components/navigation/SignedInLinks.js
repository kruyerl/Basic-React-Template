import React from 'react'

import Anchor from '../atoms/Anchor'

function SignedInLinks() {
    return (
        <>
            <li>
                <Anchor tag="navlink" mod="black" to="/login?sign-up">
                    Sign Out
                </Anchor>
            </li>
        </>
    )
}

export default SignedInLinks
