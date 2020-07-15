import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from './homepage';
import Employment from './employment';
import Table from './table';



export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/employment" component={Employment} />
                    <Route exact path="/table" component={Table} />
                </Switch>
            </BrowserRouter>

        )
    }
}