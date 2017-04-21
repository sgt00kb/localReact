import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Github from './Github'
import Header from './Components/Header'
import Auth0Lock from 'auth0-lock'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profiler: {}
    };
  }

  showLock(){
      this.lock.show();
  }

  static defaultProps = {
    clientID: 'XvTnPybXuAR4YgBaoSZ0LQ-e9teDjWrJ',
    domain: 'shiyizhang.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          onLogin = {this.showLock.bind(this)}
          />
          <Github />

      </div>
    );
  }
}

export default App;
