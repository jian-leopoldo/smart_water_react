import React, { Component } from 'react';
import request from '../request';



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
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locales/${props.id}`}>
                    Editar
                    </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locales/${props.id}/charts`}>
                    Visualizar
                    </a>
                </div>
            </div>
        </h2>
    </div>
);



class Locales extends Component {


constructor(props) {
    super(props);
    this.state = {locales: []};
}
    


  componentWillMount(){
    request.get('/locales')
    .then((response) => {
      // handle success
      console.log(response.data);
      this.setState({
          locales: response.data
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

  render() {
    const listItems = this.state.locales.map((locale) =>
        <Card title={locale.title} 
              address={locale.address}
              id={locale.id}/>
    );
    return (
      <div >
        <div class="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
                <h1>Locais </h1>
                <a href={`/locale/new`} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
                <i class="material-icons">
                    add
                </i>
                    Novo Local
                </a>
            </div>
                {listItems}
        </div>
      </div>
    );
  }
}

export default Locales;
