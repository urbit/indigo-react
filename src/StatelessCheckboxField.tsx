import * as React from "react";
import { Checkbox } from "./Checkbox";
import { Box } from "./Box";
import { Col } from "./Col";
import { StructuralProps } from "./systemHelpers";

export type StatelessCheckboxFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  StructuralProps;

export const StatelessCheckboxField = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessCheckboxFieldProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <Checkbox
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="3"
      />
      <Col>{children}</Col>
    </Box>
  );
};

StatelessCheckboxField.displayName = "StatelessCheckboxField";
