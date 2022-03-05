import React from "react";
import Form6 from "../form6/index";
import { useStateMachine } from "little-state-machine";
import updateAction from "../common/updateAction";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

export const Form06 = () => {
  const { state } = useStateMachine(updateAction);
  console.log(state);

  return (
    <StateMachineProvider>
      <Router>
        <Form6 />
      </Router>
    </StateMachineProvider>
  );
};
