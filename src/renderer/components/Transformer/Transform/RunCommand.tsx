import { useContext, useState } from 'react';
import { RunCommandAction } from '../../../model/transformer';
import { ActionContext } from '../../../service/ActionService';
import { Container, ListItem, ListItemText, TextField } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface Props {
  input?: string[];
  action: RunCommandAction;
  idx: number;
}

function renderRow(f: (s: string) => void) {
  function doRenderRow(props: ListChildComponentProps<string[]>) {
    const { index, style, data } = props;

    try {
      const mapText = f instanceof Function ? f(data[index]) : '';
      return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemText primary={`${data[index]} => ${mapText}`} />
        </ListItem>
      );
    } catch {
      return null;
    }
  }

  return doRenderRow;
}

const RunCommand = (props: Props) => {
  const { replaceAction } = useContext(ActionContext);
  const [valid, setValid] = useState(true);

  function updateRenamingFunction(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      replaceAction(props.idx, {
        ...props.action,
        command: eval(event.target.value),
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
      <FixedSizeList
        height={200}
        width={'80%'}
        itemSize={46 * 2}
        itemCount={(props.input || []).length}
        overscanCount={5}
        itemData={props.input || []}
      >
        {renderRow(props.action.command)}
      </FixedSizeList>
    </Container>
  );
};

export default RunCommand;
