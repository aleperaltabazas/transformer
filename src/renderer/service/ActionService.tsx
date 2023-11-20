import React, { useState } from 'react';
import { Action } from '../model/transformer';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export interface ActionContextProps {
  actions: Array<Action>;
  addAction(action: Action): void;
  replaceAction(idx: number, newAction: Action): void;
  updateAction(idx: number, f: (a: Action) => Action): void;
  deleteAction(action: Action): void;
}

export const ActionContext = React.createContext<ActionContextProps>(
  {} as ActionContextProps,
);

const ActionService = (props: Props) => {
  const { children } = props;
  const [actions, setActions] = useState<Array<Action>>([]);

  const context: ActionContextProps = {
    actions: actions,
    updateAction: (idx, f) =>
      setActions(actions.map((a, i) => (i == idx ? f(a) : a))),
    replaceAction: (idx, newAction) =>
      setActions(actions.map((a, i) => (i == idx ? newAction : a))),
    addAction: (action) => setActions(actions.concat(action)),
    deleteAction: (action) => setActions(actions.filter((a_) => a_ != action)),
  };

  return (
    <ActionContext.Provider value={context}>{children}</ActionContext.Provider>
  );
};

export default ActionService;
