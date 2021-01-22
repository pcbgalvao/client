

const gapiAuth2Create = () => {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: "857182375119-0vsppg4bo1kehhrj29ij00vdqjbgetp4.apps.googleusercontent.com",
            scope: "email"
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            this.auth.isSignedIn.listen(this.onAuthChange)
        });
    });
}

export default gapiAuth2Create;