import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
    login: (email, password) => {
      dispatch(actions.loginActionCreator(email, password));
    },
  
  });

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <h2>Login</h2>
      </div>
      <div className="login-box"> 
        <div className="login-box-inputs">
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" className="login-input" placeholder="Email" onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" className ="login-input" placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className='add-medicine-button'>
            <button type="button" className="login-button" onClick={ () => {this.props.login(this.state.email, this.state.password)} }>Login</button>
            <a href="/registration"> <button type="button" className="login-button">Create New User</button></a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);