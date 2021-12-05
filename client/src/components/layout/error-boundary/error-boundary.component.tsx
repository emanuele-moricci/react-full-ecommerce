import { ErrorBoundary } from "react-error-boundary";

import ErrorImg from "src/assets/img/error.png";
import * as Styled from "./error-boundary.styles";

interface IErrorWrapperProps {
  children: React.ReactNode;
}

interface IErrorFallbackProps {
  error: Error;
}

const ErrorWrapper = ({ children }: IErrorWrapperProps): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

const ErrorFallback = ({ error }: IErrorFallbackProps): JSX.Element => {
  console.error(error.message);
  return (
    <Styled.ErrorImageOverlay>
      <Styled.ErrorImageContainer imageUrl={ErrorImg} />
      <Styled.ErrorImageText>
        Sorry, we threw you in a shark tank...
      </Styled.ErrorImageText>
    </Styled.ErrorImageOverlay>
  );
};

export default ErrorWrapper;
