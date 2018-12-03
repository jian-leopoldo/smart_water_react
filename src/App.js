import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

const LoggedIn = sessionStorage.getItem('user_info') !== null ? true : false;

const userData = JSON.parse(sessionStorage.getItem('user_info')) !== null ? JSON.parse(sessionStorage.getItem('user_info')) : '';

const Header = () => (
  <header className="mdl-layout__header">
  <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">SmartWater</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
      <a className="mdl-navigation__link" href="">{userData.email}</a>
      <a className="mdl-navigation__link" href="/login">    
          <i class="material-icons" style={{marginRight: '5px'}}>
            arrow_back
          </i>
          Sair
      </a>
      </nav>
  </div>
</header>
);

const Drawer = () => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">{userData.email}</span>
    <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="/charts">
          <i class="material-icons" style={{marginRight: '5px'}}>
          account_circle
          </i>
          Meu Perfil
        </a>
        <a className="mdl-navigation__link" href="/locales">
          <i class="material-icons" style={{marginRight: '5px'}}>
            assignment
          </i>
            Gráficos
          </a>
        <a className="mdl-navigation__link" href="/locales">
          <i class="material-icons" style={{marginRight: '5px'}}>
            home
          </i>
          Locais
         </a>
        <a className="mdl-navigation__link" href="">
          <i class="material-icons" style={{marginRight: '5px'}}>
            arrow_back
          </i>
          Sair
        </a>
    </nav>
  </div>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          { LoggedIn ? <Header /> : ''}
          <Drawer />
          <main className="mdl-layout__content">
            <div className="page-content"><Routes /></div>
          </main>
          
        </div>
      </div>
    );
  }
}

export default App;
