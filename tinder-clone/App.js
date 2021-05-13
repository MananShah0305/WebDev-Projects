// import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js';
import Chats from './Chats.js';
import ChatScreen from './ChatScreen.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chats/:person'>
            <Header backButton='/chats'></Header>
            <ChatScreen></ChatScreen>
          </Route>
          <Route path='/chats'>
            <Header backButton='/'></Header>
            <Chats></Chats>
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
