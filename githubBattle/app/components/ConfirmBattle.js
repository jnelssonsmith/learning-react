import React, { PropTypes } from 'react'
import styles from '../styles/styles'
import { Link } from 'react-router'
import UserDetails from '../components/UserDetails'
import UserDetailsWrapper from '../components/UserDetailsWrapper'
import MainWrapper from '../components/MainWrapper'
import Loading from '../components/Loading'

function ConfirmBattle(props) {
    if (props.isLoading) {
        return (
            <Loading />
        );
    } else {
        return (
            <MainWrapper>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header='Player One'>
                        <UserDetails info={props.playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header='Player Two'>
                        <UserDetails info={props.playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={styles.space}>
                        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                            Initiate Battle!
                        </button>
                    </div>
                    <div className="col-sm-12" style={styles.space}>
                        <Link to="playerOne">
                            <button type="button" className="btn btn-lg btn-danger">
                                Reselect Players
                            </button>
                        </Link>
                    </div>
                </div>
            </MainWrapper>
        );
    }
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
};

export default ConfirmBattle
