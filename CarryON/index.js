import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MoreOptions from "./MoreOptions";
import ImageProc from "./ImageProc";
import Home from "./Home.js"
import FinalPage from "./FinalPage.js";
import SnowComponent from "./SnowComponent.js";
import SunnyComponent from "./SunnyComponent.js";
import RainComponent from "./RainComponent.js";
import CloudComponent from "./CloudComponent.js";


ReactDOM.render((
  <BrowserRouter>
    <div>
        <Switch>
            <Route exact path="/" component={ImageProc} />
            <Route exact path="/Home" component={Home} />
            <Route path="/MoreOptions" component={MoreOptions} />
            <Route path="/FinalPage" component={FinalPage} />
            <Route path="/SnowComponent" component={SnowComponent} />
            <Route path="/SunnyComponent" component={SunnyComponent} />
            <Route path="/RainComponent" component={RainComponent} />
            <Route path="/CloudComponent" component={CloudComponent} />
        </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
