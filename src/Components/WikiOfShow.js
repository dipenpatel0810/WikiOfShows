import React from 'react';
import SearchShow from "./SearchShow";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import ShowInfo from "./ShowInfo";

const WikiOfShows = () =>
    <div>
        <Router>
            <div>
                <Route path={"/"} exact component={SearchShow}/>
                <Route path={"/show/:id"} exact component={ShowInfo}/>
            </div>
        </Router>
    </div>

export default WikiOfShows;
