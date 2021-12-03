import React, { FC } from "react";
import * as Styled from "./with-spinner.styles";

interface IWithSpinnerProps {
  isLoading: boolean;
}

const WithSpinner =
  (Component: FC) =>
  ({ isLoading, ...otherProps }: IWithSpinnerProps) => {
    console.log(isLoading);
    return isLoading ? (
      <Styled.SpinnerOverlay>
        <Styled.SpinnerContainer />
      </Styled.SpinnerOverlay>
    ) : (
      <Component {...otherProps} />
    );
  };

export default WithSpinner;
