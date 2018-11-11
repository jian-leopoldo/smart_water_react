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
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locales/${props.id}`}>
                    Editar
                    </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={`/locales/${props.id}`}>
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
    axios.get('http://172.17.0.3:3009/locales',{
        headers: {
            'Content-Type': 'application/json',
          }
    })
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
        <Card title={locale.name} 
              address={locale.address}
              id={locale.id}/>
    );
    return (
      <div >
        <div class="mdl-grid">
            {listItems}
        </div>
      </div>
    );
  }
}

export default Locales;
