import React, { FC } from "react";

import Spinner from "src/components/layout/spinner/spinner.component";

interface IWithSpinnerProps {
  isLoading: boolean;
}

const WithSpinner =
  (Component: FC) =>
  ({ isLoading, ...otherProps }: IWithSpinnerProps) =>
    isLoading ? <Spinner /> : <Component {...otherProps} />;

export default WithSpinner;
