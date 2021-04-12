
import './App.css';
import UserList from './UserList';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/Profile';


function App() {
  return (
    
      // wrapping the app with browserRouter 
     <BrowserRouter>
      <div className="App">
        
        <Switch>
          
          <Route
            path = '/' exact render = {()=> <UserList/>}/>
            
          <Route path="/profile/:Id">
            <Profile/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

    
