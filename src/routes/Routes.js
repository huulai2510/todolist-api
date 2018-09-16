import React from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import ProductEdit from '../containers/ProductEdit'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => < ProductsContainer />
    },
    {
        path: '/edit/:id',
        exact: false,
        main: ({match, history}) => < ProductEdit history={history} match={match} />
    },
    {
        path: '/edit',
        exact: false,
        main: ({match, history}) => < ProductEdit history={history} match={match} />
    }
]

export default routes