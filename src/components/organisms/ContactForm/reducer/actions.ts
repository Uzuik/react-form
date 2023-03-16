export const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";
export const UPDATE_FORM_ERROR = "UPDATE_FORM_ERROR";
export const SUBMIT_FORM_REQUEST = "SUBMIT_FORM_REQUEST";
export const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";
export const SUBMIT_FORM_FAILURE = "SUBMIT_FORM_FAILURE";

export const updateFormFieldAction = (fieldName: string, value: string) => ({
  type: UPDATE_FORM_FIELD,
  payload: { field: fieldName, value: value },
});

export const updateFormErrorAction = (fieldName: string, value: string) => ({
  type: UPDATE_FORM_ERROR,
  payload: { field: fieldName, value: value },
});

export const submitFormRequest = () => ({
  type: SUBMIT_FORM_REQUEST,
  payload: {},
});

export const submitFormSuccess = () => ({
  type: SUBMIT_FORM_SUCCESS,
  payload: {},
});

export const submitFormFailure = () => ({
  type: SUBMIT_FORM_FAILURE,
  payload: {},
});
