import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Import State & Actions
import { useSelector, useActions } from 'react-redux'
import { addValueAction, subtractValueAction } from '../store/actions'
// Import State & Actions

export default function State() {
    // State & Actions
    const stateref = useSelector(state => state)
    const addValue = useActions(num => addValueAction(num))
    const subtractValue = useActions(num => subtractValueAction(num))
    console.log(stateref)
    const value = 2
    // State & Actions
    return (
        <section>
            <h1>State.value = {value}</h1>
            <button type="button" onClick={addValue.bind(null, 10)}>
                + 10
            </button>
            <button type="button" onClick={subtractValue.bind(null, 10)}>
                - 10
            </button>
        </section>
    )
}

State.propTypes = {}
