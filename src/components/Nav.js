import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

const menus = [
    {
        name: 'ProductList',
        to: '/',
        exact: true
    },
    {
        name: 'Add Product',
        to: '/edit',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active' : ''
            return (
                <li className={"nav-item" + active}>
                    <Link className="nav-link" to={to}>{label}</Link>
                </li>
            )
        }} />
    )
}

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </nav>
            </div>
        );
    }

    showMenus = menus =>{
        let result = null
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return( <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.active} key={index} /> )
            })
        }
        return result
    }

}

export default Nav;