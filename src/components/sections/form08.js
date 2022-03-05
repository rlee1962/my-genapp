import React from "react";
import Form8 from "../form8/index";
import { useStateMachine } from "little-state-machine";
import updateAction from "../common/updateAction";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

export const Form08 = () => {
  const { state } = useStateMachine(updateAction);
  console.log(state);

  return (
    <StateMachineProvider>
      <Router>
        <Form8 />
      </Router>
    </StateMachineProvider>
  );
};
