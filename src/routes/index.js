import React from "react";
import Locales from '../components/locales'
import FormLocale from '../components/locales/formLocale';
import Charts from '../components/charts';
import MonitoringPoints from '../components/monitoringPoints';
import ManageMonitoringPoint from '../components/monitoringPoints/manageMonitoringPoint';
import FormMonitoringPoint from '../components/monitoringPoints/formMonitoringPoint';
import MonitoringLogs from '../components/monitoringLogs';
import FormAlert from '../components/alerts/formAlert';
import Alerts from '../components/alerts';
import EditLocale from '../components/locales/editLocale';
import Login from '../components/authentication/login';
import Logout from '../components/authentication/logout';
import Signup from '../components/authentication/signup';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={Signup} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path='/locale/new' component={FormLocale} />
      <Route path='/locales' component={LocaleRoute} />
      <Route path='/locale/:localeId/edit' component={EditLocale} />
      <Route path='/locale/:localeId/monitoring_point/new' component={FormMonitoringPoint} />
      <Route path='/locale/:localeId/monitoring_points/:monitoringPointId/logs' component={MonitoringLogs} />
      <Route path='/locale/:localeId/monitoring_points/:monitoringPointId/alert/new' component={FormAlert} />
      <Route path='/locale/:localeId/monitoring_points/:monitoringPointId/alerts' component={Alerts} />
      <Route path='/charts' component={Charts} />
    </div>
  </Router>
);

const LocaleRoute = ({ match }) => (
  <div>
    <Route path={`${match.url}/:localeId`} component={MonitoringPoints} />
    <Route path={`${match.url}/:localeId/charts`} component={Charts} />
    <Route path={`${match.url}/:localeId/manage_monitoring_points`} component={ManageMonitoringPoint} />
    <Route
      exact
      path={match.url}
      component={Locales}
    />
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Logins = () => (
  <div className="mdl-grid">

  <div className="mdl-cell mdl-cell--5-col">
  </div>
  <div className="mdl-cell mdl-cell--4-col">

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
            <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>
            </form>
         
          </div>
          <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Cadastra-se</button>                  
        </div>
    </div>
  </div>
);
const Signup2 = () => (
  <div className="mdl-grid">

  <div className="mdl-cell mdl-cell--5-col">
  </div>
  <div className="mdl-cell mdl-cell--4-col">

        <div className="mdl-card mdl-shadow--6dp">
          <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
            <h2 className="mdl-card__title-text">Cadastre-se</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" value=''id="username" />
                <label className="mdl-textfield__label" htmlFor="username">Email</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" value='' id="username" />
                <label className="mdl-textfield__label" htmlFor="username">Nome </label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="password" id="userpass" />
                <label className="mdl-textfield__label" htmlFor="userpass">Senha</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="password" id="userpass" />
                <label className="mdl-textfield__label" htmlFor="userpass">Confirme a senha</label>
              </div>
            <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Salvar</button>
            </form>
         
          </div>
        </div>
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
