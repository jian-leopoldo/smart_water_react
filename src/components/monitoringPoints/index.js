import React, { Component } from 'react';
import request from '../request';
import Charts from '../charts/index';


const Card = (props) => (
    <div className="mdl-cell mdl-cell--3-col">
        <h2> 
            <div classNameName="demo-card-wide mdl-card mdl-shadow--2dp">
                <div classNameName="mdl-card__title">
                    <h2 classNameName="mdl-card__title-text">{props.title}</h2>
                </div>
                <div classNameName="mdl-card__supporting-text">
                    {props.address}
                </div>
                <div classNameName="mdl-card__actions mdl-card--border">
                    <a classNameName="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locale/${props.id}`}>
                    Editar
                    </a>
                    <a classNameName="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locale/${props.id}`}>
                    Visualizar
                    </a>
                </div>
            </div>
        </h2>
    </div>
);




class MonitoringPoints extends Component {


constructor(props) {
    super(props);
    this.state = {
        locales: {
            monitoring_points: []
        }
    };
}
    


  componentWillMount(){
    request.get(`/locales/${this.props.match.params.localeId}/show_monitoring_points`)
    .then((response) => {
      // handle success
      console.log(response.data);
      this.setState({
          locales: response.data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    return (
      <div >
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
                <h1>{this.state.locales.title}</h1>
                <h6>{this.state.locales.address}</h6>
            </div>

            <div className="mdl-cell mdl-cell--12-col">
            </div>

            <div className="mdl-cell mdl-cell--4-col"> </div>

                <div className="mdl-cell mdl-cell--4-col">
                    <ul className="demo-list-three mdl-list">
                        <li className="mdl-list__item mdl-list__item--three-line">
                            <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-avatar">warning</i>
                            <span>Alerta de consumo</span>
                            <span className="mdl-list__item-text-body">
                                O consumo de água no banheiro ultrapassou os paraâmetros configurados
                            </span>
                            </span>
                            <span className="mdl-list__item-secondary-content">
                            <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">announcement</i></a>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="mdl-cell mdl-cell--8-col"></div>

                <div className="mdl-cell mdl-cell--12-col">
                    <a href={`/locale/${this.props.match.params.localeId}/monitoring_point/new`} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                        Adicionar ponto de monitoramento
                    </a>
                </div>

                <div className="mdl-cell mdl-cell--4-col"></div>

                <div className="mdl-cell mdl-cell--4-col">
                    <table style={{width: '100%'}} className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                        <thead>
                            <tr>
                            <th className="mdl-data-table__cell--non-numeric">Ponto de monitoramento</th>
                            <th>Consumo</th>
                            <th>Ultimo monitoramento</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          this.state.locales.monitoring_points.map((monitoringPoint) =>
                            <tr>
                                <td className="mdl-data-table__cell--non-numeric">{monitoringPoint.title}</td>
                                <td>{monitoringPoint.value}</td>
                                <td>{monitoringPoint.last_log}</td>
                                <td>
                                    <a href={`/locale/${this.props.match.params.localeId}/monitoring_point/new`} 
                                       className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                                        Visualizar
                                    </a>
                                </td>
                            </tr>
                          )
                        }
                        </tbody>
                    </table>
                </div>

        </div>
      </div>
    );
  }
}

export default MonitoringPoints;
