export type Action =
  | {
      type: "LIST_FILES";
      dir: string;
      query: true;
    }
  | {
      type: "RUN_COMMAND";
      command: string;
      query: false;
    }
  | {
      type: "MOVE";
      destination: string;
      query: false;
    }
  | {
      type: "RENAME";
      transform: (s: string) => string;
      query: false;
    }
  | {
      type: "FILTER";
      filter: Filter;
      query: true;
    };

export type ActionType =
  | "LIST_FILES"
  | "RUN_COMMAND"
  | "MOVE"
  | "RENAME"
  | "FILTER";

export type Filter = {
  type: "REGEX";
  regex: string;
};

export type TransformationPipeline = Array<Action>;
