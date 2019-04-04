import React, { Component } from 'react'

class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
               clientId:
                "779340881055-q5jf5gomlsao8ok8sohfafhe6r9ejf3d.apps.googleusercontent.com",
               scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
        });
    }

  renderAuthButton() {
      if (this.state.isSignedIn === null ){
          return <div>I do not know if we are signed in</div>;
      } else if (this.state.isSignedIn) {
          return <div>I am signed in</div>;
      } else {
          return <div>I am not signed in</div>;
      }
  }
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default GoogleAuth;
