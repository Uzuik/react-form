import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  value: string;
};

export const ContactContentInput: React.FC<Props> = ({
  onChange,
  onBlur,
  error,
  value,
}) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>message</FormLabel>
      <Textarea
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Type your message here"
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
