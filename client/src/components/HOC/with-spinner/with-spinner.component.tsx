import React, { FC } from "react";

import Spinner from "src/components/layout/spinner/spinner.component";

interface IWithSpinnerProps {
  isLoading: boolean;
}

const WithSpinner =
  (Component: FC) =>
  ({ isLoading, ...otherProps }: IWithSpinnerProps) => {
    console.log(isLoading);
    return isLoading ? <Spinner /> : <Component {...otherProps} />;
  };

export default WithSpinner;
