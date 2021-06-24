import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from './components/Footer'
import StudentDetails from "./pages/StudentDetails";
import registration from "./pages/registration";
import login from "./pages/login";
import Logout from "./pages/Logout";
import semesterRegistration from "./pages/semesterRegistration";

function App() { 
	
	return (
		
	<div className="App"> 
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={() => (<Redirect to ='/login'/>)} />
				<Route path="/Home" exact component={Home} />
				<Route path="/studentdetails" exact component={StudentDetails} />
				<Route path="/registration" exact component={registration} />
				<Route path="/login" exact component={login} />
				<Route path="/logout" exact component={Logout} />
				<Route path="/semesterRegistration" exact component={semesterRegistration} />
			</Switch>
			<Footer />
		</Router>
	</div>
	);
}

export default App; 
