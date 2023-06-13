import React from "react";
import ReactDom from "react-dom";
import Home from "./Home"
import Hometwo from "./Hometwo"
import Filter from "./Filter"
import Login from "./Login"
import Register from "./Register"
import view from "./Viewfix"
import searchfix from "./Searchfix"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hometwo" component={Hometwo} />
                    <Route exact path="/filter" component={Filter} />
                    <Route exact path="/view" component={view} />
                    <Route exact path="/searchfix" component={searchfix} />
                    {/* <Redirect path="/"> */}
                    
            </Switch>
                </div>

                </Router>
            </div>
        )
    }
}