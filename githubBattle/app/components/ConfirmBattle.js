import React, { PropTypes } from 'react'

function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    if (props.isLoading) {
        return (
            <p> LOADING! </p>
        );
    } else {
        return (
            <p> CONFIRM BATTLE!: {puke(props)} </p>
        );
    }
}

export default ConfirmBattle
