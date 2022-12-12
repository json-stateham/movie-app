import { Component, ErrorInfo } from 'react'
import { Button } from 'components'
import { Text } from '@/components/text'

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('From ErrorBoundary:', error, errorInfo)
  }

  handleRefreshPage = () => window.history.go()

  render() {
    if (this.state.hasError) {
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
