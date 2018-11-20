import React, { Component } from 'react';
import request from '../request';
import createHistory from 'history/createBrowserHistory';


class EditLocale extends Component {


constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.createLocale = this.createLocale.bind(this);

    this.state = {
        locale: [],
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


handleChangeAddress(e){
    this.setState({
        address: e.target.value
    })
}

handleChangeDescription(e){
    this.setState({
        description: e.target.value
    })
}

redirect(){

    const history = createHistory({
        basename: "", // The base URL of the app (see below)
        forceRefresh: true, // Set true to force full page refreshes
        keyLength: 6, // The length of location.key
        // A function to use to confirm navigation with the user (see below)
        getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })   
    history.push(`/locales`)

}
    


  componentWillMount(){
    this.getLocale();
  }

  getLocale(){
    request.get(`/locales/${this.props.match.params.localeId}`)
    .then((response) => {
      // handle success
      this.setState({
        locale: response.data
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

  createLocale(){
    request.post('/locales',{
        locale: {
            title: this.state.title,
            address: this.state.address,
            description: this.state.description
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
      // always executed
    });
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
                                <h2 className="mdl-card__title-text">Editar Local</h2>
                            </div>

                            <div className="mdl-card__supporting-text">
                                <form action="#">
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" 
                                               onChange={this.handleChangeTitle}
                                               type="text" id="username" 
                                               value={this.state.locale.title}/>

                                        <label className="mdl-textfield__label" htmlFor="username"></label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" 
                                               type="text" 
                                               id="addres" 
                                               onChange={this.handleChangeAddress}
                                               value={this.state.locale.address}
                                        />
                                        <label className="mdl-textfield__label" htmlFor="addres"></label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input className="mdl-textfield__input" type="text" id="description" 
                                               onChange={this.handleChangeDescription}
                                               value={this.state.locale.description}/>
                                        <label className="mdl-textfield__label" htmlFor="description"></label>
                                    </div>
                                </form>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                        onClick={this.createLocale}>
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

export default EditLocale;
