import React from 'react';
import NotificationModal from '../NotificationModal/NotificationModal';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError({ message }) {
    return {
      error: message,
    };
  }

  componentDidCatch(err, errInfo) {
    console.error(errInfo);
  }

  clearError = () => {
    this.setState({
      error: null,
    });
  };

  render() {
    if (this.state.error) {
      return (
        <div className='container'>
          <NotificationModal clearError={this.clearError} error={this.state.error} />
          <strong>{this.state.error}</strong>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
