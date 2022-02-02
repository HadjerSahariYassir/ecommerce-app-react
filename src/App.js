
import './App.css';
import HomePage from "./pages/homepage.component";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'; 
import Header from './componenets/directory/header/header.component';
import signInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from 'react';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user });
      console.log('currenruser',user);
    })
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path="/" component={HomePage} />
              {/* <Route exact path="/topics" component={TopicsList} />    
                <Route path="/topics/:topicId" component={TopicDetail} />  */}
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={signInAndSignUpPage} />
        </Switch>
          
      </div>
  );
  }
    
}

export default App;
