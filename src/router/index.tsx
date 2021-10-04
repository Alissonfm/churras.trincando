import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import _map from 'lodash/map'
import { useUserStore } from 'hooks'
import { Login, Events, NewEvent, EventDetails } from 'pages/'

const PATHS = [
  { path: '/', exact: true, component: Login },
  { path: '/events', exact: true, component: Events},
  { path: '/new-event', exact: true, component: NewEvent},
  { path: '/event-details', exact: true, component: EventDetails },
]

const Router: React.FC = () => {
  const { store } = useUserStore()
  console.log( 'user store: ', store)
  const { logged } = store 

  const mappedRoutes = _map(PATHS, (rt: any) => <Route {...rt} />)
  const checkAuth = logged ? () => <Redirect to="/events" /> : () => <Redirect to="/" />

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