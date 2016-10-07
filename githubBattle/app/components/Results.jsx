import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from '../styles/styles'
import UserDetails from './UserDetails.jsx'
import UserDetailsWrapper from './UserDetailsWrapper.jsx'
import MainWrapper from './MainWrapper.jsx'
import Loading from './Loading.jsx'

function StartOver() {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">
                    Start Over
                </button>
            </Link>
        </div>
    );
}

function Results(props) {
    if(props.isLoading === true) {
        return (
            <Loading text="One Moment" speed={100} />
        );
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainWrapper>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainWrapper>
        );
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0: 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainWrapper>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainWrapper>
    );
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};
export default Results
