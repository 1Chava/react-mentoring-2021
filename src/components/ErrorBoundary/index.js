import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <Card>
          <div>
            <p>
              There was an error in loading this page.{' '}
              <Link
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
          </Link>{' '}
            </p>
          </div>
        </Card>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

const Card = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Link = styled.span`
  cursor: pointer; 
  color: #0077FF;
`;

export default ErrorBoundary;
