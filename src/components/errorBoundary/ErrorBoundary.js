import { Component } from "react";

import ErrorMessage from '../errorMessage/ErrorMessage'

class ErrorBoundary extends Component {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({
            error: error
        })
    }

    render() {
        if (this.state.error) {
            return (   
                <div>
                    <h2 style={{textAlign:'center'}}>Something went wrong!</h2>
                    <ErrorMessage />
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;