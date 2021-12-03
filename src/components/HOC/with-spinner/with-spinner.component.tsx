import * as Styled from "./with-spinner.styles";

const WithSpinner = (Component: JSX.Element) => (isLoading: boolean) => {
  return isLoading ? (
    <Styled.SpinnerOverlay>
      <Styled.SpinnerContainer />
    </Styled.SpinnerOverlay>
  ) : (
    Component
  );
};

export default WithSpinner;
