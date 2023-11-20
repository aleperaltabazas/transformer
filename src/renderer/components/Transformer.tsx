import { useContext } from 'react';
import Transform from './Transformer/Transform';
import { ActionContext } from '../service/ActionService';
import { Button, Grid } from '@mui/material';

interface Props {}

const Transformer = (props: Props) => {
  const { actions, addAction } = useContext(ActionContext);

  function addUndefinedAction() {
    addAction({ type: 'UNDEFINED' });
  }

  return (
    <div>
      <Grid container rowSpacing={1}>
        {actions.map((a, i) => (
          <Grid key={i} item xs={12}>
            <Transform action={a} idx={i} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="outlined" onClick={addUndefinedAction} size="small">
            Add action
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Transformer;
