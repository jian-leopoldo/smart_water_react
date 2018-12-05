import React, { Component } from 'react';
import request from '../request';




class Alerts extends Component {


constructor(props) {
    super(props);
    this.state = {
      alerts: [],
      title: ''
    };
}
    


  componentWillMount(){
    request.get(`/locales/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}/alerts`)
    .then((response) => {
      // handle success
      console.log(response)
      this.setState({
          alerts: response.data,
          title: response.data[0].monitoring_point
      })
    })
    .catch((error) => {
      // handle error
      
      console.log("erro doido")
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  deleteAlert(e){
    console.log()
  }

  render() {
    return (
      <div >
        <div class="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
            <h1>Alertas do ponto: {this.state.title}</h1>
        </div>
        <div className="mdl-cell mdl-cell--4-col">
        </div>
        <div className="mdl-cell mdl-cell--3-col">
                    <table style={{width: '100%'}} className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                        <thead>
                            <tr>
                            <th className="mdl-data-table__cell--non-numeric">Título</th>
                            <th>Valor para o alerta</th>
                            <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          this.state.alerts.map((alert) =>
                            <tr>
                                <td className="mdl-data-table__cell--non-numeric">{alert.title}</td>
                                <td>{alert.max_value}</td>
                                <td>{alert.alert_type}</td>
                                <td>
                                    <a href={`/locale/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}`} 
                                       className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                                          <i class="material-icons">
                                            edit
                                          </i>
                                        Editar
                                    </a>
                                    <a href='#' 
                                       onClick={(e) => { if (window.confirm('Quer deletar esse item?')) this.deleteAlert(e) }}
                                       style={{marginLeft: '5px', backgroundColor: '#cc4039'}}
                                       className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                                         <i class="material-icons">
                                            delete
                                          </i>
                                        Excluir
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

export default Alerts;
