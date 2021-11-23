import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main, Movie, NotFound } from 'pages'
import { Header } from 'ui'
import { ErrorBoundary } from 'entities'

const Routes = () => (
  <>
    <Router>
      <Header />
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </Router>
  </>
)

export { Routes }
