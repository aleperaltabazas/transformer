import { Container, TextField } from '@mui/material';
import { FILTER, FilterAction } from '../../../../model/transformer';
import { useContext } from 'react';
import { ActionContext } from '../../../../service/ActionService';

interface Props {
  action: FilterAction;
  idx: number;
}

const Extension = (props: Props) => {
  const { updateAction } = useContext(ActionContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ends with ' + event.target.value);
    updateAction<FilterAction>(props.idx, (a) => ({
      ...a,
      filter: (s: string) => s.endsWith(event.target.value),
    }));
  };

  return (
    <Container>
      <TextField onChange={handleChange} />
    </Container>
  );
};

export default Extension;
