import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './screens/homeScreen';
import EditEmployeeScreen from './screens/editEmployeeScreen';
import AddEmployeeScreen from './screens/addEmployeeScreen';
import Navigation from './components/navigation';
function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/editemp" component={EditEmployeeScreen}/>
          <Route path="/addemp" component={AddEmployeeScreen}/>
        </Switch>
        </div>
        <div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					
						
				
				</div>
				<div className="flex-large">
					<h2>View users</h2>
				</div>
			</div>
		</div>
      </div>
    </Router>
  );
}

export default App;
