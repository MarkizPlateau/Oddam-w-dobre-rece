import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import * as ROUTES from "./constans/routes";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin"
import Signup from "./components/Signup/Signup";
import Signout from "./components/Signout/Signout";
import NotFound from "./components/NotFound/NotFound";
import React from "react";
import HomeNavigation from "./components/HomeNavigation/HomeNavigation";

const App = () => (
    <Router>
        <navigation>
            <div className={"container header-container"}>
                <HomeNavigation/>
            </div>
        </navigation>
      <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.SIGNIN} component={Signin}/>
            <Route exact path={ROUTES.SIGNUP} component={Signup}/>
            <Route exact path={ROUTES.SIGNOUT} component={Signout}/>
            <Route component={NotFound} />
      </Switch>
    </Router>
)

export default App;
