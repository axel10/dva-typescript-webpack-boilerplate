import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Index from 'src/routes'
import history from './history'

export function router () {
  return (
    <Router history={history}>
      <div style={{ width: '100%', height: '100%' }}>
        <Switch>
          <Route path='/' component={Index} />
        </Switch>
      </div>
    </Router>
  )
}
