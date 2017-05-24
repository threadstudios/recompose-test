import React from 'react';

class Account extends React.Component {
    render() {
        return (
            <div className="test">
                <p onClick={this.props.onAccountClick}>Account: {this.props.accountReference}</p>
                <button onClick={this.props.loadWithSuccess}>Load Success</button>
                <button onClick={this.props.loadWithError}>Load Error</button>
            </div>
        );
    }
}

export default Account;
