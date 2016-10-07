import React from 'react'
import { Link } from 'react-router'
import MainWrapper from '../components/MainWrapper.jsx'

function Home(props) {
    return (
        <MainWrapper>
            <h1>Github Battle</h1>
            <p className="lead">Some fancy motto</p>
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-success">
                Get Started
                </button>
            </Link>
        </MainWrapper>
    );
}

export default Home
