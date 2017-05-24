import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <div className="error">
                <p>Everything is not okay.</p>
                <p>{this.props.errorMessage}</p>
                <button onClick={this.props.loadWithSuccess}>Try Again</button>
            </div>
        );
    }
}

export default Error;