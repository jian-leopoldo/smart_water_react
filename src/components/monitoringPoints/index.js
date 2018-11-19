import React, { Component } from 'react';
import request from '../request';

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
