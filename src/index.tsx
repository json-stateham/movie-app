import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { App } from './app/App'
import './i18n'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
