import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import _map from 'lodash/map'
import useUserStore from 'hooks/useUserStore'
import { Login, Events } from 'pages/'

const ROUTES = [
  { path: '/', exact: true, component: Login },
  { path: '/events', exact: true, component: Events}
]

const Router: React.FC = () => {
  const { logged } = useUserStore()
  const mappedRoutes = _map(ROUTES, (rt: any) => <Route {...rt} />)
  const checkAuth = logged ? () => <Redirect to="/" /> : () => <Redirect to="/events" />

  return (
    <BrowserRouter>
      <Switch>
        {mappedRoutes}
        <Route path="*" component={checkAuth} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router