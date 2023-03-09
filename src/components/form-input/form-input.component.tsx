import { InputHTMLAttributes, FC } from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer {...otherProps} />
    {label && (
      <FormInputLabel
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === "string" &&
            otherProps.value.length
        )}
      >
        {label}
      </FormInputLabel>
    )}
  </GroupContainer>
);

export default FormInput;
