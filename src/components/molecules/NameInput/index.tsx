import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value: string;
};

export const NameInput: React.FC<Props> = ({
  onChange,
  onBlur,
  error,
  value,
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>Full Name</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Name"
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
