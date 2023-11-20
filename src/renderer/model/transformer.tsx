export const LIST_FILES = 'LIST_FILES';
export const SELECT_FILES = 'SELECT_FILES';
export const RUN_COMMAND = 'RUN_COMMAND';
export const MOVE = 'MOVE';
export const RENAME = 'RENAME';
export const FILTER = 'FILTER';
export const UNDEFINED = 'UNDEFINED';

export interface SelectFilesAction {
  type: typeof SELECT_FILES;
  files: Array<string>;
}

export interface UndefinedAction {
  type: typeof UNDEFINED;
}

export type Action = SelectFilesAction | UndefinedAction;

export type ActionType = typeof UNDEFINED | typeof SELECT_FILES;

export type TransformationPipeline = Array<Action>;
