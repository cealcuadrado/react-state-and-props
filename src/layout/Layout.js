import React from 'react';

import Main from '../main/Main';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'One Header',
      content: 'One Content',
    };
  }

  render() {
    return (
      <div>
        <h2>State and Props</h2>
        <hr />
        <Main header={this.state.header} content={this.state.content}/>
      </div>
    );
  }
}

export default Layout;
