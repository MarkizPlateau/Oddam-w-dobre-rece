import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import * as ROUTES from "./constans/routes";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

const App = () => (
    <Router>
      <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route component={NotFound} />
      </Switch>
    </Router>
)

export default App;
