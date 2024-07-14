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
  directory?: string;
}

export interface RenameFileAction {
  type: typeof RENAME_FILES;
  newName: (s: string) => string;
}

export interface FilterAction {
  type: typeof FILTER;
  filter: (f: string) => boolean;
}

export interface RunCommandAction {
  type: typeof RUN_COMMAND;
  command: (f: string) => string;
}

export type Action =
  | UndefinedAction
  | SelectFilesAction
  | RenameFileAction
  | FilterAction
  | RunCommandAction;

export type ActionType =
  | typeof UNDEFINED
  | typeof SELECT_FILES
  | typeof RENAME_FILES
  | typeof FILTER
  | typeof RUN_COMMAND;

export function dryRun(input: string[], action: Action): string[] {
  switch (action.type) {
    case 'UNDEFINED':
      return [];
    case 'RENAME_FILES':
      return input.map(action.newName);
    case 'FILTER':
      return input.filter(action.filter);
    case 'SELECT_FILES':
      return action.files;
    case 'RUN_COMMAND':
      return input;
  }
}

export type TransformationPipeline = Array<Action>;
