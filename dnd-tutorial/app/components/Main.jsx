import React from 'react'

function Main(props) {
    return (
        <div className='main-container'>
            {props.children}
        </div>
    );
}

export default Main
