import React, { Component } from 'react';
import request from '../request';
import createHistory from 'history/createBrowserHistory';


class Perfil extends Component {


constructor(props) {
    super(props);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConf = this.handleChangePasswordConf.bind(this);

    this.createUser = this.createUser.bind(this);

    this.state = {
        email: '',
        name: '',
        password: '',
        password_confirm:'',
        errorMessage: '',

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
    let uri = `/login`

    history.push(uri)

}

 
  componentWillMount(){
    request.get(`/user/${this.props.match.params.userId}`,{
        user: {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }
    })
    .then((response) => {
      // handle success
      this.redirect();
    })
    .catch((error) => {
        console.log(error)
        this.setState({
            errorMessage: 'Preencha corretamente os dados'
          })
    })
    .then(function () {
      // alw
    })
  }


    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }


    handleChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handleChangePasswordConf(e){
        this.setState({
            password_confirm: e.target.value
        })
    }

  createUser(){
    let uri = `/user/${match}`

    request.patch(uri,{
        user: {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }
    })
    .then((response) => {
      // handle success
      this.redirect();
    })
    .catch((error) => {
        console.log(error)
        this.setState({
            errorMessage: 'Preencha corretamente os dados'
          })
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
                  <h2 className="mdl-card__title-text">Cadastre-se</h2>
                </div>
                <div className="mdl-card__supporting-text">
                {this.state.errorMessage.length !== '' ? <p style={{color: 'red'}}>{this.state.errorMessage}</p> : ''} 
                  <form action="#">
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" onChange={this.handleChangeEmail} value={this.state.email} type="text" id="username" />
                      <label className="mdl-textfield__label" htmlFor="username">Email</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" onChange={this.handleChangeName} value={this.state.name} type="text" id="username" />
                      <label className="mdl-textfield__label" htmlFor="username">Nome </label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" onChange={this.handleChangePassword} value={this.state.password} type="password" id="userpass" />
                      <label className="mdl-textfield__label" htmlFor="userpass">Senha</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" onChange={this.handleChangePasswordConf} value={this.state.password_confirm} type="password" id="userpass" />
                      <label className="mdl-textfield__label" htmlFor="userpass">Confirme a senha</label>
                    </div>
                  <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.createUser} >Salvar</button>
                  </form>
               
                </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Perfil;
