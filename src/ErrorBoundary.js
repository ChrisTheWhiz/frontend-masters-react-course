import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error boundary caught error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click here </Link>
          to go back to the homepage, or wait 5 seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;