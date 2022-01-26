import { Component, ReactNode, ErrorInfo } from 'react'
import { Button, Text } from 'shared/ui'

interface IState {
  error: null | Error
}

interface IProps {
  children: ReactNode
}

class ErrorBoundary extends Component<IProps, IState> {
  state = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('From ErrorBoundary:', error, errorInfo)
  }

  handleRefreshPage = () => window.history.go()

  render() {
    if (this.state.error) {
      return (
        <div className="flex flexCol flexAlCent">
          <Text className="mb32 mt32" tag="h2">
            Something went wrong
          </Text>
          <Button onClick={this.handleRefreshPage}>
            <Text tag="span">Refresh Page</Text>
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
