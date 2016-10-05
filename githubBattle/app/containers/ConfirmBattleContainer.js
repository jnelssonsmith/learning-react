import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            playerInfo: []
        }
    }

    componentDidMount() {
        var query = this.props.location.query;
        // Fetch info from github then update state
    }

    render() {
        return (
            <ConfirmBattle
            isLoading={this.state.isLoading}
            playerInfo={this.state.playerInfo} />
        );
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer
