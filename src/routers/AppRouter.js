import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '.././components/Header';
import PortfolioHome from '.././components/PortfolioHome';
import Portfolio from '.././components/Portfolio';
import Contact from '.././components/Contact';
import NotFoundPage from '.././components/NotFoundPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={PortfolioHome} exact/>
                    <Route exact path="/portfolio/:id" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;