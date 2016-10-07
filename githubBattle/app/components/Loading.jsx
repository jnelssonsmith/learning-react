import React, { PropTypes } from 'react'
import styles from '../styles/styles'

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        }
    }

    componentDidMount() {
        var stopper = this.props.text + '...';
        this.interval = setInterval(function() {
            if(this.state.text == stopper) {
                this.setState({
                    text: this.props.text
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }.bind(this), this.props.speed) //binds for use of this in anonymous function + 300ms checker
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={styles.container}>
            <p style={styles.content}>{this.state.text}</p>
            </div>
        );
    }
}

Loading.Proptypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
};

export default Loading
