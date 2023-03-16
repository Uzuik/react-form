import * as A from "./actions";

export type State = {
  name: string;
  contactContent: string;
  errors: {
    name: string;
    contactContent: string;
  };
  isRequesting: boolean;
  isSubmitted: boolean;
  isSucceeded: boolean;
};

export type ActionType =
  | ReturnType<typeof A.updateFormFieldAction>
  | ReturnType<typeof A.updateFormErrorAction>
  | ReturnType<typeof A.submitFormRequest>
  | ReturnType<typeof A.submitFormSuccess>
  | ReturnType<typeof A.submitFormFailure>;
