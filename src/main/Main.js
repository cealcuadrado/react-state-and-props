import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">{this.props.header}</h4>
                </div>
                <div className="card-body">
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Main;