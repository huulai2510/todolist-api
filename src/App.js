import React, { Component } from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Nav />
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }

    showContentMenus = routes => {
        let result = null
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    < Route path={route.path} exact={route.exact} component={route.main} key={index} />
                )
            })
        }
        return result
    }

}

export default App;
