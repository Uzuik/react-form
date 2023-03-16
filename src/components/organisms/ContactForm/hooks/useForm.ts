import { useCallback, useReducer } from "react";
import * as A from "../reducer/actions";
import * as R from "../reducer/reducer";

/**
 * やっていること
 * - actionのdispatch
 * - validation
 * - api call 
 */
export const useForm = () => {
  const [state, dispatch] = useReducer(R.reducer, R.initialState);

  const updateName = useCallback(
    (value: string) => dispatch(A.updateFormFieldAction("name", value)),
    []
  );

  const updateContactContent = useCallback(
    (value: string) =>
      dispatch(A.updateFormFieldAction("contactContent", value)),
    []
  );

  const validateName = useCallback((inputValue: string): boolean => {
    if (inputValue === "") {
      dispatch(A.updateFormErrorAction("name", "Name is required."));
      return false;
    }
    if (inputValue.length > 100) {
      dispatch(
        A.updateFormErrorAction(
          "name",
          "Please enter your name within 100 characters."
        )
      );
      return false;
    }
    dispatch(A.updateFormErrorAction("name", ""));
    return true;
  }, []);

  const validateContactContent = useCallback((inputValue: string): boolean => {
    if (inputValue.length > 500) {
      dispatch(
        A.updateFormErrorAction(
          "contactContent",
          "Please enter your message within 500 characters."
        )
      );
      return false;
    }
    dispatch(A.updateFormErrorAction("contactContent", ""));
    return true;
  }, []);

  const submitForm = useCallback(async () => {
    const requestData = {
      name: state.name,
      contactContent: state.contactContent,
    } as const;

    dispatch(A.submitFormRequest());

    // API call
    await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        dispatch(A.submitFormSuccess());
      })
      .catch((error) => {
        dispatch(A.submitFormFailure());
      });
  }, [state]);

  return {
    updateName,
    updateContactContent,
    validateName,
    validateContactContent,
    submitForm,
    state,
  };
};
