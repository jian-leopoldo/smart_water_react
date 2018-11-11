import React from "react";
import Locales from '../components/locales'
import FormLocale from '../components/locales/formLocale';
import Charts from '../components/charts';
import MonitoringPoints from '../components/monitoringPoints';
import FormMonitoringPoint from '../components/monitoringPoints/formMonitoringPoint';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path='/locale/new' component={FormLocale} />
      <Route path='/locales' component={LocaleRoute} />
      <Route path='/locale/:localeId/monitoring_point/new' component={FormMonitoringPoint} />
      <Route path='/charts' component={Charts} />
    </div>
  </Router>
);

const LocaleRoute = ({ match }) => (
  <div>
    <Route path={`${match.url}/:localeId`} component={MonitoringPoints} />
    <Route
      exact
      path={match.url}
      component={Locales}
    />
  </div>
);

const Home = () => (
  <div>
    <h2>
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Welcome</h2>
        </div>
        <div className="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
      </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
        </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>

    </h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Login = () => (
  <div className="mdl-cell mdl-cell--4-col">
    <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
      <main className="mdl-layout__content">
        <div className="mdl-card mdl-shadow--6dp">
          <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
            <h2 className="mdl-card__title-text">Login</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="username" />
                <label className="mdl-textfield__label" htmlFor="username">Username</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="password" id="userpass" />
                <label className="mdl-textfield__label" htmlFor="userpass">Password</label>
              </div>
            </form>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Routes;
