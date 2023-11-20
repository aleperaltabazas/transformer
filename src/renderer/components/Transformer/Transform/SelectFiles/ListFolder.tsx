import { useContext, useState } from 'react';
import { SELECT_FILES, SelectFilesAction } from '../../../../model/transformer';
import { Box, Button, Container } from '@mui/material';
import { ActionContext } from '../../../../service/ActionService';
import SelectFiles from '../SelectFiles';

interface Props {
  input?: string[];
  action: SelectFilesAction;
  idx: number;
}

const ListFolder = (props: Props) => {
  const [dir, setDir] = useState<string>();
  const { replaceAction } = useContext(ActionContext);

  async function selectDirectory() {
    const res = await window.electron.selectFolder();
    if (res) {
      setDir(res.dir);
      console.log(dir);
      replaceAction(props.idx, { type: SELECT_FILES, files: res.files });
    }
  }

  return (
    <Container>
      <Button variant="contained" onClick={selectDirectory}>
        Select directory
      </Button>
      {dir && (
        <>
          <Box>{dir}</Box>
          <SelectFiles action={props.action} idx={props.idx} />
        </>
      )}
    </Container>
  );
};

export default ListFolder;
