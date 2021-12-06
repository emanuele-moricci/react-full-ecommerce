import { ErrorBoundary } from "react-error-boundary";

import Error from "src/pages/error/error.page";

interface IErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorWrapper = ({ children }: IErrorWrapperProps): JSX.Element => {
  return <ErrorBoundary FallbackComponent={Error}>{children}</ErrorBoundary>;
};

export default ErrorWrapper;
