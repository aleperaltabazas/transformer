import {
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import {
  Action,
  FilterAction,
  RENAME_FILES,
  RenameFileAction,
  SELECT_FILES,
  SelectFilesAction,
} from '../../model/transformer';
import { ActionContext } from '../../service/ActionService';
import ListFolder from './Transform/SelectFiles/ListFolder';
import Rename from './Transform/Rename';
import Filter from './Transform/Filter';

const LIST_FOLDER = 'LIST_FOLDER';
const UNDEFINED = 'UNDEFINED';
const RENAME = 'RENAME';
const FILTER = 'FILTER';

type ActionSelectorOptions =
  | typeof LIST_FOLDER
  | typeof UNDEFINED
  | typeof RENAME
  | typeof FILTER;

interface Props {
  input?: string[];
  idx: number;
  action: Action;
}

const Transform = ({ idx, action, ...props }: Props) => {
  console.log(action.type, props.input);
  const [actionType, setActionType] =
    useState<ActionSelectorOptions>(UNDEFINED);
  const { replaceAction } = useContext(ActionContext);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    switch (event.target.value as ActionSelectorOptions) {
      case LIST_FOLDER:
        replaceAction(idx, { type: SELECT_FILES, files: [] });
      case RENAME:
        replaceAction(idx, { type: RENAME_FILES, newName: (s) => s });
      case FILTER:
        replaceAction(idx, { type: FILTER, filter: () => true });
    }

    setActionType(event.target.value as ActionSelectorOptions);
  };

  return (
    <Container maxWidth="md">
      <InputLabel id="action-type-select-label">Action</InputLabel>
      <Select
        value={actionType}
        labelId="action-type-select-label"
        id="action-type-select"
        label="Action"
        onChange={handleChange}
        autoWidth
      >
        <MenuItem disabled value={UNDEFINED}>
          Select an action
        </MenuItem>
        <MenuItem value={LIST_FOLDER}>List folder</MenuItem>
        <MenuItem value={RENAME}>Rename</MenuItem>
        <MenuItem value={FILTER}>Filter</MenuItem>
      </Select>
      {actionType == LIST_FOLDER && (
        <ListFolder
          action={action as SelectFilesAction}
          idx={idx}
          input={props.input}
        />
      )}
      {actionType == RENAME && (
        <Rename
          action={action as RenameFileAction}
          idx={idx}
          input={props.input}
        />
      )}
      {actionType == FILTER && (
        <Filter action={action as FilterAction} idx={idx} input={props.input} />
      )}
    </Container>
  );
};

export default Transform;
