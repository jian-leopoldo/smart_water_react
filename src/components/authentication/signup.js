import React, { Component } from 'react';
import request from '../request';
import createHistory from 'history/createBrowserHistory';


class FormAlert extends Component {


constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMaxValue = this.handleChangeMaxValue.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.createAlert = this.createAlert.bind(this);

    this.state = {
        alerts: [],
        title: '',
        max_value: '',
        alert_type: ''
    };
}

redirect(){

    const history = createHistory({
        basename: "", // The base URL of the app (see below)
        forceRefresh: true, // Set true to force full page refreshes
        keyLength: 6, // The length of location.key
        // A function to use to confirm navigation with the user (see below)
        getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })   
    let uri = `/locale/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}/alerts`

    history.push(uri)

}

 
  componentWillMount(){

  }


    handleChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }


    handleChangeMaxValue(e){
        this.setState({
            max_value: e.target.value
        })
    }

    handleChangeType(e){
        this.setState({
            alert_type: e.target.value
        })
    }

  createAlert(){
    let uri = `/locales/${this.props.match.params.localeId}/monitoring_points/${this.props.match.params.monitoringPointId}/alerts`

    request.post(uri,{
        alert: {
            title: this.state.title,
            max_value: this.state.max_value,
            alert_type: this.state.alert_type
        }
    })
    .then((response) => {
      // handle success
      this.redirect();
    })
    .catch((error) => {
      // handle error
      console.log("erro doido")
      console.log(error);
    })
    .then(function () {
      // alw
    })
  }

  render() {
    return (
      <div >
        <div className="mdl-grid">

            <div className="mdl-cell mdl-cell--4-col">
            </div>

             <div className="mdl-cell mdl-cell--4-col" >

                        <div className="mdl-card mdl-shadow--8dp mdl-cell--12-col" >

                            <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                                <h2 className="mdl-card__title-text">Novo Alerta</h2>
                            </div>

                            <div className="mdl-card__supporting-text">
                                <form action="#">
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" 
                                               onChange={this.handleChangeTitle}
                                               type="text" id="username" 
                                               value={this.state.title}/>

                                        <label className="mdl-textfield__label" htmlFor="username">Titulo do alerta</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" 
                                               type="text" 
                                               id="addres" 
                                               onChange={this.handleChangeMaxValue}
                                               value={this.state.max_value}
                                        />
                                        <label className="mdl-textfield__label" htmlFor="addres">Valor em litros para que o alerta seja emitido</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <label >Tipo do alerta</label>
                                        <label className="mdl-textfield__label" for="sample2">asd...</label>
                                        <select className="mdl-textfield__input" type="text" value={this.state.alert_type}
                                                onChange={this.handleChangeType} id="sample2" >
                                            <option>Inicial</option>
                                            <option>Intermediário</option>
                                            <option>Máximo</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                        onClick={this.createAlert}>
                                    Salvar
                                </button>
                            </div>
                            
                        </div>

            </div>

        </div>
      </div>
    );
  }
}

export default FormAlert;
