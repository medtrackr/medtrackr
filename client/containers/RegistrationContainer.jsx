import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
// create functions that will dispatch action creators
  register: (firstName, lastName, email, password) => {
    dispatch(actions.registerActionCreator(firstName, lastName, email, password));
  },

});

class RegistrationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return(
    <div className="inner-container">
      <div className="schedule-box-header">
        <h2>Register</h2>
      </div>
      <div className="login-box">
        <div className="login-box-inputs"> 
          <div className="input-group">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" className="login-input" placeholder="First Name" onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" className="login-input" placeholder="Last Name" onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" className="login-input" placeholder="Email" onChange={this.handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" className ="login-input" placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className='add-medicine-button'>
            <button type="button" className="login-button" onClick={ () => {this.props.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password)} }>Register</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(RegistrationContainer);