import React, { PropTypes } from 'react'

function ConfirmBattle(props) {
    if (props.isLoading) {
        return (
            <p> LOADING! </p>
        );
    } else {
        return (
            <p> CONFIRM BATTLE! </p>
        );
    }
}

export default ConfirmBattle
