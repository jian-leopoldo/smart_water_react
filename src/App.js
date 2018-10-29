import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

const Header = () => (
  <header className="mdl-layout__header">
  <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">SmartWater</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
      <a className="mdl-navigation__link" href="">Jian Rodrigues</a>
      <a className="mdl-navigation__link" href="/login">Logout</a>
      </nav>
  </div>
</header>
);

const Drawer = () => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Jian Rodrigues</span>
    <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="/charts">Gráficos</a>
        <a className="mdl-navigation__link" href="/locales">Locais</a>
        <a className="mdl-navigation__link" href="">Pontos de monitoramento</a>
        <a className="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
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
