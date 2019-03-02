import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MoreOptions from "./MoreOptions";
import ImageProc from "./ImageProc";
import Home from "./Home.js"
import FinalPage from "./FinalPage.js";

ReactDOM.render((
  <BrowserRouter>
    <div>
        <Switch>
            <Route exact path="/" component={ImageProc} />
            <Route exact path="/Home" component={Home} />
            <Route path="/MoreOptions" component={MoreOptions} />
            <Route path="/FinalPage" component={FinalPage} />
        </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
