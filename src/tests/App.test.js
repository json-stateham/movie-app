import { render, screen } from '@testing-library/react'

import { App } from '../app/App'

describe('App', () => {
  test('renders App component', () => {
    render(<App />)

    screen.debug()
  })
})