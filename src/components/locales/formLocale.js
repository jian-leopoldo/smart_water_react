import React, { Component } from 'react';
import request from '../request';


class FormLocale extends Component {


constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.createLocale = this.createLocale.bind(this);

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
    


  componentWillMount(){

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
      console.log(response.data);
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
                                <h2 className="mdl-card__title-text">Novo Local</h2>
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
                                        <input className="mdl-textfield__input" 
                                               type="text" 
                                               id="addres" 
                                               onChange={this.handleChangeAddress}
                                               value={this.state.address}
                                        />
                                        <label className="mdl-textfield__label" htmlFor="addres">Endereço</label>
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

export default FormLocale;
