import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';


class Logout extends Component {


constructor(props) {
    super(props);

    this.logout =  this.logout.bind(this);

}

redirect(){

    const history = createHistory({
        basename: "", // The base URL of the app (see below)
        forceRefresh: true, // Set true to force full page refreshes
        keyLength: 6, // The length of location.key
        // A function to use to confirm navigation with the user (see below)
        getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })   
    let uri = `/login`

    history.push(uri)

}

 
  componentWillMount(){
      this.logout();
      this.redirect();

  }


    


  logout(){   
    sessionStorage.removeItem('user_info')
  }

  render() {
    return (
    <div className="mdl-grid">

    </div>
    );
  }
}

export default Logout;
