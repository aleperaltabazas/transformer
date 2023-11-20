export const SELECT_FILES = 'SELECT_FILES';
export const RUN_COMMAND = 'RUN_COMMAND';
export const RENAME_FILES = 'RENAME_FILES';
export const FILTER = 'FILTER';
export const UNDEFINED = 'UNDEFINED';

export interface UndefinedAction {
  type: typeof UNDEFINED;
}

export interface SelectFilesAction {
  type: typeof SELECT_FILES;
  files: Array<string>;
}

export interface RenameFileAction {
  type: typeof RENAME_FILES;
  newName: (s: string) => string;
}

export type Action = UndefinedAction | SelectFilesAction | RenameFileAction;

export type ActionType = typeof UNDEFINED | typeof SELECT_FILES;

export type TransformationPipeline = Array<Action>;
