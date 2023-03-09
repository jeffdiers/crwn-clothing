import { FC, ComponentType } from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

type WithSpinnerProps = {
  isLoading: boolean;
};

const WithSpinner = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P & WithSpinnerProps> => {
  const Spinner = ({ isLoading, ...otherProps }: WithSpinnerProps) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };
  return Spinner;
};

export default WithSpinner;
