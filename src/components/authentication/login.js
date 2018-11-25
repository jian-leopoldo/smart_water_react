import React, { Component } from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';


class Login extends Component {


constructor(props) {
    super(props);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.login =  this.login.bind(this);

    this.state = {
        email: '',
        password: '',
        errorMessage: '',
        rememberPass: false,
    };
}

redirect(){

    const history = createHistory({
        basename: "", // The base URL of the app (see below)
        forceRefresh: true, // Set true to force full page refreshes
        keyLength: 6, // The length of location.key
        // A function to use to confirm navigation with the user (see below)
        getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })   
    let uri = `/locales`

    history.push(uri)

}

 
  componentWillMount(){

  }


    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }


    handleChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    sessionCreate(user_data){
        if (this.state.rememberPass){
            localStorage.setItem('user_info', JSON.stringify(user_data))

        }else{
            sessionStorage.setItem('user_info', JSON.stringify(user_data))
        }
    }


  login(){
    let uri = `http://localhost:3009/login`

    axios.post(uri,{
        headers: {
            'Content-Type': 'application/json'    },
        email: this.state.email,
        password: this.state.password
       
    })
    .then((response) => {
      // handle success
      console.log(response)
      this.sessionCreate({email: response.data.email,
                          token: response.data.authentication_token})
      this.redirect();
    })
    .catch((error) => {
      // handle error
      this.setState({
        errorMessage: 'Usuário ou senha incorreta'
      })
      console.log(this.state.errorMessage)
    })
    .then(function () {
      // alw
    })
  }

  render() {
    return (
    <div className="mdl-grid">

        <div className="mdl-cell mdl-cell--5-col">
        </div>
        <div className="mdl-cell mdl-cell--4-col">
      
              <div className="mdl-card mdl-shadow--6dp">
                <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                  <h2 className="mdl-card__title-text">Login</h2>
                </div>
                <div className="mdl-card__supporting-text">
                {this.state.errorMessage.length !== '' ? <p style={{color: 'red'}}>{this.state.errorMessage}</p> : ''} 
                  <form action="#">
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" onChange={this.handleChangeEmail} value={this.state.email} type="text" id="username" />
                      <label className="mdl-textfield__label" htmlFor="username">Email</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input"onChange={this.handleChangePassword}  value={this.state.password} type="password" id="userpass" />
                      <label className="mdl-textfield__label" htmlFor="userpass">Password</label>
                    </div>
                  <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.login} >Log in</button>
                  </form>
               
                </div>
                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Cadastra-se</button>                  
              </div>
          </div>
        </div>
    );
  }
}

export default Login;
