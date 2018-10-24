import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../button';

class BackButton extends Component {
  onClick = (e) => {
    this.props.history.goBack();
  }

  render() {
    var divStyle = {
      marginBottom: '20px'
    };

    return (
      <Button style={divStyle} onClick={this.onClick}>{this.props.children}</Button>
    );
  }
}

export default withRouter(BackButton);
