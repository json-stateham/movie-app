import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main, Movie, NotFound } from 'pages'
import { Header } from 'ui'
import 'scss/index.scss'

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/:movieId' component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
)

export { App }