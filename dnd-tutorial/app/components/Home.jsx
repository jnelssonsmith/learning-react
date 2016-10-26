import React from 'react'
import Knight from './Knight.jsx'
import Square from './Square.jsx'

function Home(props) {
    return (
        <div>
            <Square black>
                <Knight />
            </Square>
        </div>
    );
}

export default Home
