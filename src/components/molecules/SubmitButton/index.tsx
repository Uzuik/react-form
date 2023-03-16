import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
  isLoading: boolean;
};

export const SubmitButton: React.FC<Props> = ({
  onClick,
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <Button onClick={onClick} isDisabled={isDisabled} isLoading={isLoading}>
      Submit
    </Button>
  );
};
