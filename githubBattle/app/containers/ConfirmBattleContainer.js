import React from 'react';

import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'


class ConfirmBattleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            playersInfo: []
        }
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

    render() {
        return (
            <ConfirmBattle
            isLoading={this.state.isLoading}
            playersInfo={this.state.playersInfo} />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer
