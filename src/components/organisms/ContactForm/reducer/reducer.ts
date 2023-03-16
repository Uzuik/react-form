import * as T from "./types";
import * as A from "./actions";

export const initialState: T.State = {
  name: "",
  contactContent: "",
  errors: { name: "", contactContent: "" },
  isRequesting: false,
  isSubmitted: false,
  isSucceeded: false,
} as const;

/**
 * NOTE: payload内部のプロパティがActionTypeによって異なるため、payload内部プロパティ参照時にtype errorが発生する
 * そのため、実際のActionTypeにtype assertionしている
 * いい方法があれば直したい
 */
export const reducer = (state: T.State, action: T.ActionType): T.State => {
  switch (action.type) {
    case A.UPDATE_FORM_FIELD: {
      const updateFormFieldAction = action as ReturnType<
        typeof A.updateFormFieldAction
      >;
      return {
        ...state,
        [updateFormFieldAction.payload.field]:
          updateFormFieldAction.payload.value,
      };
    }
    case A.UPDATE_FORM_ERROR: {
      const updateFormErrorAction = action as ReturnType<
        typeof A.updateFormErrorAction
      >;
      return {
        ...state,
        errors: {
          ...state.errors,
          [updateFormErrorAction.payload.field]:
            updateFormErrorAction.payload.value,
        },
      };
    }
    case A.SUBMIT_FORM_REQUEST:
      return {
        ...state,
        isRequesting: true,
        isSubmitted: false,
      };
    case A.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSubmitted: true,
        isSucceeded: true,
      };
    case A.SUBMIT_FORM_FAILURE:
      return {
        ...state,
        isRequesting: false,
        isSubmitted: true,
        isSucceeded: false,
      };
    default:
      return state;
  }
};
