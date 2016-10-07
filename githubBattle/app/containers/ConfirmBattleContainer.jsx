import React from 'react';

import ConfirmBattle from '../components/ConfirmBattle.jsx'
import githubHelpers from '../utils/githubHelpers'


class ConfirmBattleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            playersInfo: []
        }

        this.handleInitiateBattle = this.handleInitiateBattle.bind(this)
    }

    componentDidMount() {
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(players) {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            }.bind(this)); //have to bind promise to this so that we can
                        // say this.setstate correctly
    }

    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    }

    render() {
        return (
            <ConfirmBattle
            isLoading={this.state.isLoading}
            playersInfo={this.state.playersInfo}
            onInitiateBattle={this.handleInitiateBattle} />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer
