import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/partials/Navbar'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Orders from './components/pages/Orders'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/orders" component={Orders}/>
                    </Switch>
                </>
            </BrowserRouter>

        );
    }
}

export default App;
