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
    const seed: [JSX.Element, string[]] = [
      <Transform action={actions[0]} idx={0} input={[]} />,
      dryRun([], actions[0]),
    ];

    const components: Array<JSX.Element> = [];
    let input: string[] = [];

    actions.forEach((a, i) => {
      components.push(<Transform action={a} idx={i} input={input} />);
      input = dryRun(input, a);
    });

    return components;
  };

  return (
    <Grid container rowSpacing={4}>
      {actions.length > 0 && componentsWithActions()}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={addUndefinedAction} size="small">
          Add action
        </Button>
      </Grid>
    </Grid>
  );
};

export default Transformer;
