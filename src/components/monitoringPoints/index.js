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
        </div>
      </div>
    );
  }
}

export default MonitoringPoints;
