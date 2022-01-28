
import './App.css';
import HomePage from "./pages/homepage.component";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component'; 

{/*
const HomePage = (props) => {
  return(
    <div>
       
        <button onClick={() => props.history.push("/topics")}>Topics</button>
       <h1>HOME PAGE</h1>
    </div>
  )
}

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
          TOPICS PAGE
      </h1>  
      <Link to={`${props.match.url}/02`}>Topic 02</Link>
      <Link to={`${props.match.url}/23`}>Topic 23</Link>
      <Link to={`${props.match.url}/22`}>Topic 22</Link>
   </div>
  )  
}

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
          TOPIC DETAIL PAGE {props.match.params.topicId}
      </h1>  
    
   </div>
  )  
}
*/}

function App() {
    return (
        <div>
              <Route exact path="/" component={HomePage} />
             {/* <Route exact path="/topics" component={TopicsList} />    
              <Route path="/topics/:topicId" component={TopicDetail} />  */}
             <Route path="/shop" component={ShopPage}></Route>
             
        </div>
    );
}

export default App;
