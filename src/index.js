import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MoreOptions from "./MoreOptions";
import Home from "./Home"

ReactDOM.render((
  <BrowserRouter>
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={MoreOptions} />
        </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
