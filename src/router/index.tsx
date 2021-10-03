import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import _map from 'lodash/map'

import { Login, Events } from 'pages/'


const ROUTES = [
  { path: '/', exact: true, component: Login },
  { path: '/events', exact: true, component: Events}
]

const Router: React.FC = () => {
  const mappedRoutes = _map(ROUTES, (rt: any) => <Route {...rt} />)

  return (
    <BrowserRouter>
      <Switch>
        {mappedRoutes}
      </Switch>
    </BrowserRouter>
  )
}

export default Router