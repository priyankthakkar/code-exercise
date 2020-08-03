import { ContentActions, ContentActionType } from "./content.actions";
import { ContentState } from "./Content.interface";

export const defaultState: ContentState = {
  isLoading: false,
  tasksResponse: {
    taskData: [],
  },
};

export function contentReducer(
  state: ContentState = defaultState,
  action: ContentActions
): ContentState {
  const { type } = action;

  switch (type) {
    case ContentActionType.SET_CONTENT:
      // @ts-ignore
      return { ...state, tasksResponse: action.payload };
    case ContentActionType.IS_LOADING:
      // @ts-ignore
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
