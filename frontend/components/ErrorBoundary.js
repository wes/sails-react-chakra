import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    console.log({ error })
    console.log({ errorInfo })
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <div style={{ margin: '25px' }}>
          <div
            style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}
          >
            Something went wrong.
          </div>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'monaco',
              fontSize: '12px',
              lineHeight: '120%',
              backgroundColor: '#000',
              color: '#fff',
              padding: '15px',
              borderRadius: '10px',
            }}
          >
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
