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
  SELECT_FILES,
  SelectFilesAction,
} from '../../model/transformer';
import { ActionContext } from '../../service/ActionService';
import ListFolder from './Transform/ListFolder';

const LIST_FOLDER = 'LIST_FOLDER';
const UNDEFINED = 'UNDEFINED';

type ActionSelectorOptions = typeof LIST_FOLDER | typeof UNDEFINED;

interface Props {
  idx: number;
  action: Action;
}

const Transform = ({ idx, action }: Props) => {
  const [actionType, setActionType] =
    useState<ActionSelectorOptions>(UNDEFINED);
  const { replaceAction } = useContext(ActionContext);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    switch (event.target.value as ActionSelectorOptions) {
      case LIST_FOLDER:
        replaceAction(idx, { type: SELECT_FILES, files: [] });
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
      </Select>
      {actionType == LIST_FOLDER && (
        <ListFolder action={action as SelectFilesAction} idx={idx} />
      )}
    </Container>
  );
};

export default Transform;