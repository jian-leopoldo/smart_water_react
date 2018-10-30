import React, { Component } from 'react';
import axios from 'axios';


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
        locales: []
    };
}
    


  componentWillMount(){
    axios.get('http://localhost:2000/places/' + this.props.match.params.localeId)
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
                <h1>{this.state.locales.name}</h1>
                <h6>{this.state.locales.address}</h6>
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

                <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-cell mdl-cell--7-col"></div>
                    <div className="mdl-cell mdl-cell--4-col">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Adicionar ponto de monitoramento
                        </button>
                    </div>
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
                            <tr>
                            <td className="mdl-data-table__cell--non-numeric">Banheiro</td>
                            <td>25 Litros/hora</td>
                            <td>25/08/2018</td>
                            </tr>
                            <tr>
                            <td className="mdl-data-table__cell--non-numeric">Banheiro 2</td>
                            <td>10 Litros/hora</td>
                            <td>30/12/2018</td>
                            </tr>
                            <tr>
                            <td className="mdl-data-table__cell--non-numeric">Jardim</td>
                            <td>67 Litros/hora</td>
                            <td>hoje</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
      </div>
    );
  }
}

export default MonitoringPoints;
