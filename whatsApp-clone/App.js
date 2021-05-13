import './App.css';
import Sidebar from './Sidebar.js'
import ChatSection from './ChatSection.js'
import Login from './Login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <div className={`colorDiv` /*${(user==null)&&`bgWhite`}*/}>
      </div>
      {!user ? (
        <Login></Login>
      ) :
        (
          <div className="appBody">
            <Router>
              <Sidebar></Sidebar>
              <Switch>
                <Route path="/rooms/:roomId">
                  <ChatSection /*tag='input'*/></ChatSection>
                </Route>
                <Route path='/'>  {/* Always use path='/' in the end */}
                  <ChatSection></ChatSection>
                </Route>
              </Switch>
            </Router>
          </div>
        )
      }
    </div>
  );
}

export default App;
