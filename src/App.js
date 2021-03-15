import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Header from './components/Header'
import { Main, Movie, NotFound } from './pages'
import './scss/styles.scss'

export const App = () => (
  <>
    {/* <Header /> */}
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/:movieId' component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
)
