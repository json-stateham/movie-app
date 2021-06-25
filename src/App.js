import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main, Movie, NotFound } from 'pages'
import 'scss/index.scss'

export const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/:movieId' component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
)
