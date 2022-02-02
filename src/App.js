
import './App.css';
import HomePage from "./pages/homepage.component";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'; 
import Header from './componenets/directory/header/header.component';
import signInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     // this.setState({ currentUser : user });
     // createProfileDocument(user); 
     // console.log('currenruser',user);
     if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          },  () => {
            console.log(this.state);
          })
        });
      
     }
     this.setState({ currentUser : userAuth})
     
    });
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
