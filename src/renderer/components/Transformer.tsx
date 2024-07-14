import { useContext } from 'react';
import Transform from './Transformer/Transform';
import { ActionContext } from '../service/ActionService';
import { Button, Grid } from '@mui/material';
import { Action, dryRun } from '../model/transformer';

interface Props {}

const Transformer = (props: Props) => {
  const { actions, addAction } = useContext(ActionContext);

  function addUndefinedAction() {
    addAction({ type: 'UNDEFINED' });
  }

  const componentsWithActions = () => {
    const components: Array<JSX.Element> = [];
    let input: string[] = [];

    actions.forEach((a, i) => {
      components.push(<Transform action={a} idx={i} input={input} />);
      input = dryRun(input, a);
    });

    return components;
  };

  async function run() {
    await window.electron.run(actions);
  }

  return (
    <Grid container rowSpacing={4}>
      {actions.length > 0 && componentsWithActions()}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={addUndefinedAction} size="small">
          Add action
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={run}>
          Run
        </Button>
      </Grid>
    </Grid>
  );
};

export default Transformer;
