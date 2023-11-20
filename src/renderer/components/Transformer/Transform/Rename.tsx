import { useContext, useState } from 'react';
import { RenameFileAction } from '../../../model/transformer';
import { ActionContext } from '../../../service/ActionService';
import { Container, TextField } from '@mui/material';

interface Props {
  input?: string[];
  action: RenameFileAction;
  idx: number;
}

const Rename = (props: Props) => {
  const { replaceAction } = useContext(ActionContext);
  const [valid, setValid] = useState(true);

  function updateRenamingFunction(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      replaceAction(props.idx, {
        ...props.action,
        newName: eval(event.target.value),
      });
      console.log('valid');
      setValid(true);
    } catch (e) {
      setValid(false);
      console.log('invalid', e);
    }
  }

  return (
    <Container>
      <TextField
        error={!valid}
        helperText={!valid && 'Invalid JS function'}
        onChange={updateRenamingFunction}
      />
    </Container>
  );
};

export default Rename;
