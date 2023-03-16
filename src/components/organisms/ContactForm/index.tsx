import React from "react";
import {
  ContactContentInput,
  NameInput,
  SubmitButton,
  SubmitResult,
} from "../../molecules";
import { useForm } from "./hooks/useForm";

export const ContactForm: React.FC = () => {
  const {
    updateContactContent,
    updateName,
    validateContactContent,
    validateName,
    submitForm,
    state,
  } = useForm();

  const hasErrors = Object.entries(state.errors).some(
    ([_key, value]) => value !== ""
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateName(e.target.value);
  };

  const handleNameBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    validateName(e.target.value);
  };

  const handleContactContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    updateContactContent(e.target.value);
  };

  const handleContactContentBlur = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    validateContactContent(e.target.value);
  };

  const submit = () => {
    const isNameValid = validateName(state.name);
    const isContactContentValid = validateContactContent(state.contactContent);
    if (isNameValid && isContactContentValid) {
      submitForm();
    }
  };

  return (
    <>
      <NameInput
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={state.errors.name}
        value={state.name}
      />
      <ContactContentInput
        onChange={handleContactContentChange}
        onBlur={handleContactContentBlur}
        error={state.errors.contactContent}
        value={state.contactContent}
      />
      <SubmitButton
        onClick={submit}
        isDisabled={hasErrors}
        isLoading={state.isRequesting}
      />
      <SubmitResult
        isSubmitted={state.isSubmitted}
        isSucceeded={state.isSucceeded}
      />
    </>
  );
};
