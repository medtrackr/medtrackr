import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginContainer from './containers/LoginContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import RegistrationContainer from './containers/RegistrationContainer.jsx';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const mapStateToProps = state => ({
  firstName: state.meds.firstName,
  lastName: state.meds.lastName,
  email: state.meds.email,
  userMedicines: state.meds.userMedicines,
  userId: state.meds.userId,
  loginSuccess: state.meds.loginSuccess,
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.loginSuccess)
    if (!this.props.loginSuccess){
      return(
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={ <LoginContainer/> } />
              <Route path="registration" element={ <RegistrationContainer/> } />
            </Routes>
          </div>
        </BrowserRouter>
      )
    } else {
      return(
        <BrowserRouter>
          <div>
            <Routes>

              <Route path="registration" element={ <RegistrationContainer/> } />
              <Route path="/" element={ <HomeContainer firstName={this.props.firstName} lastName={this.props.lastName} email={this.props.email} userMedicines={this.props.userMedicines} userId={this.props.userId}/> } />
            </Routes>
          </div>
        </BrowserRouter>
      )
    }
  }
}

// export default App;
export default connect(mapStateToProps, null)(App);
