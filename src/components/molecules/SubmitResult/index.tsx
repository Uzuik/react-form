import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  isSubmitted: boolean;
  isSucceeded: boolean;
  errorMessage?: string;
};

export const SubmitResult: React.FC<Props> = ({
  isSubmitted = false,
  isSucceeded,
  errorMessage,
}) => {
  return isSubmitted ? (
    isSucceeded ? (
      <Succeeded />
    ) : (
      <Failed errorMessage={errorMessage} />
    )
  ) : null;
};

const Succeeded: React.FC = () => <Text>The form has been submitted successfully.</Text>;

const Failed: React.FC<{ errorMessage?: string }> = ({ errorMessage }) => (
  <Text>The form submission has failed.{errorMessage}</Text>
);
