import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import {Cart} from "./client/components/Cart";
import {HomePage} from "./client/components/HomePage";
import {ProductWindow} from "./client/components/ProductWindow";
import {Shopwindow} from "./client/components/Shopwindow";
import {Page_404} from './client/components/Page_404'
import {store} from './store/store'
import {Provider} from "react-redux";
import {CurrencySwitcher} from './shared/components/CurrencySwitcher/CurrencySwitcher'
import {TotalPrice} from "./shared/components/TotalPrice/TotalPrice";

function App() {

    return (
        <Router>
            <Provider store={store}>
                <navbar className="navbar navbar-dark bg-primary">
                    <NavLink className='navbar-brand' to='/'>Home</NavLink>
                    <NavLink className='navbar-brand' to='/Shopwindow'>Shopwindow</NavLink>
                    <NavLink className='navbar-brand text-center' to='/Cart'>Cart <span role = "img" aria-label= "Cart">&#128722;</span>
                        <TotalPrice/>
                    </NavLink>

                </navbar>
                <CurrencySwitcher/>
                <Switch>
                    <Route exact path='/'>{HomePage}</Route>
                    <Route exact path='/Shopwindow' component={Shopwindow}/>
                    <Route path='/ProductWindow' component={ProductWindow}/>
                    <Route exact path='/Cart' component={Cart}/>
                    <Route path='*' component={Page_404}/>
                </Switch>
            </Provider>
        </Router>
    )
}

export default App;
