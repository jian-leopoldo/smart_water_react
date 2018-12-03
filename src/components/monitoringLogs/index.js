import React, { Component } from 'react';
import request from '../request';

class MonitoringLogs extends Component {


constructor(props) {
    super(props);
    this.state = {
        logs: []
    };
}
    
  componentWillMount(){
    request.get(`/locales/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}/monitoring_logs`)
    .then((response) => {
      // handle success
      console.log(response.data);
      this.setState({
        logs: response.data
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
            <div className="mdl-cell mdl-cell--4-col">
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <h1>Banheiro 1</h1>
            </div>

            <div className="mdl-cell mdl-cell--4-col">

            </div>

            <div className="mdl-cell mdl-cell--12-col">
                <a href={`/locale/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}/alert/new`} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                    <i class="material-icons">
                        add
                    </i>
                    Novo Alerta
                </a>
                <a href={`/locale/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}/alerts`} 
                                       className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary"
                                       style={{marginLeft: '5px', backgroundColor: '#42f4a4'}}>
                                          <i class="material-icons">
                                            remove_red_eye
                                          </i>
                    Visualizar Alertas
                </a>
            </div>
            <div className="mdl-cell mdl-cell--4-col"></div>

            <div className="mdl-cell mdl-cell--4-col">
                <h5>Registros do ponto de monitoramento</h5>

                <table style={{width: '100%'}} className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                        <th className="mdl-data-table__cell--non-numeric">Valor da medição</th>
                        <th>Valor atual</th>
                        <th>Data de criação</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.logs.map((log) => 
                        <tr>
                            <td>{log.point_value}</td>
                            <td>{Math.floor(Math.random() * 500) }</td>
                            <td>{log.log_date}</td>
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

export default MonitoringLogs;
