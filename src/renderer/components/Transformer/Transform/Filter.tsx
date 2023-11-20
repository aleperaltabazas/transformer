import {
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import { ActionContext } from '../../../service/ActionService';
import { FilterAction } from '../../../model/transformer';
import Regex from './Filter/Regex';
import Extension from './Filter/Extension';

interface Props {
  input?: string[];
  idx: number;
  action: FilterAction;
}

const REGEX = 'REGEX';
const EXTENSION = 'EXTENSION';

type FilterType = typeof REGEX | typeof EXTENSION;

const Filter = (props: Props) => {
  const [filterType, setFilterType] = useState<FilterType>(EXTENSION);

  const { replaceAction } = useContext(ActionContext);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    switch (event.target.value as FilterType) {
    }

    setFilterType(event.target.value as FilterType);
  };

  console.log(props.input?.filter(props.action.filter));
  return (
    <Container>
      <InputLabel id="filter-type-select-label">Filter</InputLabel>
      <Select
        value={filterType}
        labelId="filter-type-select-label"
        id="filter-type-select"
        label="Filter"
        onChange={handleChange}
        autoWidth
      >
        <MenuItem value={EXTENSION}>By extension</MenuItem>
        <MenuItem value={REGEX}>By regex</MenuItem>
      </Select>
      {filterType == REGEX && <Regex action={props.action} idx={props.idx} />}
      {filterType == EXTENSION && (
        <Extension action={props.action} idx={props.idx} />
      )}
      {props.input
        ?.filter(props.action.filter)
        ?.map((f, i) => <div key={i}>{f}</div>)}
    </Container>
  );
};

export default Filter;
