import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import RegistrationContainer from './containers/RegistrationContainer.jsx';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={ <LoginContainer/> } />
            <Route path="registration" element={ <RegistrationContainer/> } />
            <Route path="home" element={ <HomeContainer/> } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
