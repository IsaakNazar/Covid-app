import React from 'react';

class Display extends React.Component{
  render() {

    return (
        <div className="display-info">
          <div className="display-info__title">{this.props.title}</div>
          <div className="display-info__total">{this.props.total}</div>
        </div>
    )
  }
}

export default Display
