import React, { Component } from 'react';
import axios from 'axios';


const Card = (props) => (
    <div class="mdl-cell mdl-cell--3-col">
        <h2> 
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {props.address}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locale/${props.id}`}>
                    Editar
                    </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locale/${props.id}`}>
                    Visualizar
                    </a>
                </div>
            </div>
        </h2>
    </div>
);

const AlertList = (props) => (
    <ul class="demo-list-three mdl-list">
        <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-avatar">person</i>
            <span>Bryan Cranston</span>
            <span class="mdl-list__item-text-body">
                Bryan Cranston played the role of Walter in Breaking Bad. He is also known
                for playing Hal in Malcom in the Middle.
            </span>
            </span>
            <span class="mdl-list__item-secondary-content">
            <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
            </span>
        </li>
        <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            <span>Aaron Paul</span>
            <span class="mdl-list__item-text-body">
                Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
                the "Need For Speed" Movie.
            </span>
            </span>
            <span class="mdl-list__item-secondary-content">
            <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
            </span>
        </li>
        <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            <span>Bob Odenkirk</span>
            <span class="mdl-list__item-text-body">
                Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
                character, Bob stars in his own show now, called "Better Call Saul".
            </span>
            </span>
            <span class="mdl-list__item-secondary-content">
            <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
            </span>
        </li>
    </ul>
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
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
                <h1>{this.state.locales.name}</h1>
                <h6>{this.state.locales.address}</h6>
            </div>
                <div class="mdl-cell mdl-cell--6-col">
                    <ul class="demo-list-three mdl-list">
                        <li class="mdl-list__item mdl-list__item--three-line">
                            <span class="mdl-list__item-primary-content">
                            <i class="material-icons mdl-list__item-avatar">person</i>
                            <span>Bryan Cranston</span>
                            <span class="mdl-list__item-text-body">
                                Bryan Cranston played the role of Walter in Breaking Bad. He is also known
                                for playing Hal in Malcom in the Middle.
                            </span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                            <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--three-line">
                            <span class="mdl-list__item-primary-content">
                            <i class="material-icons  mdl-list__item-avatar">person</i>
                            <span>Aaron Paul</span>
                            <span class="mdl-list__item-text-body">
                                Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
                                the "Need For Speed" Movie.
                            </span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                            <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--three-line">
                            <span class="mdl-list__item-primary-content">
                            <i class="material-icons  mdl-list__item-avatar">person</i>
                            <span>Bob Odenkirk</span>
                            <span class="mdl-list__item-text-body">
                                Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
                                character, Bob stars in his own show now, called "Better Call Saul".
                            </span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                            <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                            </span>
                        </li>
                    </ul>
                </div>
        </div>
      </div>
    );
  }
}

export default MonitoringPoints;
