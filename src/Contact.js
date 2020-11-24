import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <li className="contact">
        <img
          className="contact-image"
          alt="foto" 
          src={this.props.image} 
          width="60px" 
          height="60px"
        />
        <div className="contact-info">
          <div className="contact-name">
            {this.props.firstName}
            <span> </span>
            {this.props.lastName}
          </div>
          <div className="contact-number">{this.props.phone}</div>
        </div>
        
      </li>
    )
  }
}

export default Contact;