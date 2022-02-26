import './App.css';
import HomePage from "./pages/homepage.component";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'; 
import Header from './componenets/directory/header/header.component';
import signInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const  {setCurrentUser} = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
    if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
       
        userRef.onSnapshot(snapShot => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          }); 
        });
     }
     setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  
  render() {
      return (
        <div>
          <Header />
          <Switch>
              <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={signInAndSignUpPage} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null, mapStateToProps)(App);
