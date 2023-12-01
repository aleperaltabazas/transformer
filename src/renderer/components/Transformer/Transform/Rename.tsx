import { useContext, useState } from 'react';
import { RenameFileAction } from '../../../model/transformer';
import { ActionContext } from '../../../service/ActionService';
import { Container, ListItem, ListItemText, TextField } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface Props {
  input?: string[];
  action: RenameFileAction;
  idx: number;
}

function renderRow(f: (s: string) => string) {
  function doRenderRow(props: ListChildComponentProps<string[]>) {
    const { index, style, data } = props;

    const mapText = f instanceof Function ? f(data[index]) : '';

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemText primary={`${data[index]} => ${mapText}`} />
      </ListItem>
    );
  }

  return doRenderRow;
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
      <FixedSizeList
        height={200}
        width={360}
        itemSize={46}
        itemCount={(props.input || []).length}
        overscanCount={5}
        itemData={props.input || []}
      >
        {renderRow(props.action.newName)}
      </FixedSizeList>
    </Container>
  );
};

export default Rename;
