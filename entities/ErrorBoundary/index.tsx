import { Component, ErrorInfo } from 'react';
import { Button } from 'components';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('From ErrorBoundary:', error, errorInfo);
  }

  handleRefreshPage = () => window.history.go();

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flexCol flexAlCent">
          <h2 className="mb32 mt32">Something went wrong</h2>
          <Button onClick={this.handleRefreshPage}>
            <span>Refresh Page</span>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
