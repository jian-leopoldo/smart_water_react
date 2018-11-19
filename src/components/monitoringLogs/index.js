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
                <h1>Logs Recebidos</h1>
            </div>

            <div className="mdl-cell mdl-cell--4-col">

            </div>

            <div className="mdl-cell mdl-cell--4-col">
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
                            <td>{log.current_value}</td>
                            <td>{log.created_at}</td>
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
