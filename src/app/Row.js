import React, { Component } from 'react';

class Row extends Component {
  render (){
    return(
      <tr>
        <td className='text-center'>{this.props.change.when}</td>
        <td className='text-center'>{this.props.change.who}</td>
        <td className='text-center'>{this.props.change.description}</td>
      </tr>
    )
  }
}

export default Row;