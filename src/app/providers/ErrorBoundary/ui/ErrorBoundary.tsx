import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';
import { PageLoader } from 'widgets/PageLoader';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <ErrorPage />
                </Suspense>
            );
        }

        const { children } = this.props;

        return children;
    }
}

export default ErrorBoundary;
