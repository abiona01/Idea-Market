import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Recover } from "./components/Recover";
import { MailSent } from "./components/MailSent";
import { CreateContest } from "./components/CreateContest";
import { AllContest } from "./components/AllContest";
import { Home } from "./pages/Home";
import { JoinContest } from "./components/JoinContest";
import { InputJoinContest } from "./components/InputJoinContest";

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/recoverPassword' component={Recover} />
					<Route exact path='/mailSent' component={MailSent} />
					<Route exact path='/createContest' component={CreateContest} />
					<Route exact path='/allContest' component={AllContest} />
					<Route exact path='/joinContest' component={JoinContest} />
					<Route exact path='/submitContest' component={InputJoinContest} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
