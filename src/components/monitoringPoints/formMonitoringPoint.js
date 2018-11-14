import React, { Component } from 'react';
import request from '../request';
import createHistory from 'history/createBrowserHistory';


class FormMonitoringPoint extends Component {


constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.createMonitoringPoint = this.createMonitoringPoint.bind(this);

    this.state = {
        locales: [],
        title: '',
        address: '',
        description: ''
    };
}

handleChangeTitle(e){
    this.setState({
        title: e.target.value
    })
}


handleChangeDescription(e){
    this.setState({
        description: e.target.value
    })
}


    


  componentWillMount(){

  }

  createMonitoringPoint(){
    request.post(`/locales/${this.props.match.params.localeId}/monitoring_points`,{
        monitoring_point: {
            title: this.state.title,
            description: this.state.description,
            locale_id: this.props.match.params.localeId
        }
    })
    .then((response) => {
        this.redirect()
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


redirect(){

    const history = createHistory({
        basename: "", // The base URL of the app (see below)
        forceRefresh: true, // Set true to force full page refreshes
        keyLength: 6, // The length of location.key
        // A function to use to confirm navigation with the user (see below)
        getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })   
    history.push(`/locales/${this.props.match.params.localeId}/monitoring_points`)

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
                                <h2 className="mdl-card__title-text">Novo Ponto de monitoramento</h2>
                            </div>

                            <div className="mdl-card__supporting-text">
                                <form action="#">
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" 
                                               onChange={this.handleChangeTitle}
                                               type="text" id="username" 
                                               value={this.state.title}/>

                                        <label className="mdl-textfield__label" htmlFor="username">Titulo</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" type="text" id="description" 
                                               onChange={this.handleChangeDescription}
                                               value={this.state.description}/>
                                        <label className="mdl-textfield__label" htmlFor="description">Descrição</label>
                                    </div>
                                </form>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                        onClick={this.createMonitoringPoint}>
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

export default FormMonitoringPoint;
