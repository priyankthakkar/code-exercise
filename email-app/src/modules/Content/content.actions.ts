import { ActionType, createAction } from "typesafe-actions";
import { TasksResponse } from "./Content.interface";

export enum ContentActionType {
  GET_CONTENT = "GET_CONTENT",
  SET_CONTENT = "SET_CONTENT",
  IS_LOADING = "IS_LOADING",
}

export const getContent = createAction(ContentActionType.GET_CONTENT)<void>();

export const setContent = createAction(ContentActionType.SET_CONTENT)<
  TasksResponse
>();

export const setLoading = createAction(ContentActionType.IS_LOADING)<boolean>();

const actions = {
  getContent,
  setContent,
  setLoading,
};

export type ContentActions = ActionType<typeof actions>;
