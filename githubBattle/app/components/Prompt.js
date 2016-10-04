import React from 'react'
import { transparentBg } from '../styles/styles'

class Prompt extends React.Component {
    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{this.props.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.props.onSubmitUser}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                onChange={this.props.onUpdateUser}
                                value={this.props.username}
                                placeholder="Github username"
                                type='text' />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button
                                className="btn btn-block btn-success"
                                type="submit">
                                    Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Prompt
