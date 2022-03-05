import React from "react";
import Form1 from "../form1/index";
import { useStateMachine } from "little-state-machine";
import updateAction from "../common/updateAction";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

export const Form01 = () => {
  const { state } = useStateMachine(updateAction);
  console.log(state);

  return (
    <StateMachineProvider>
      <Router>
        <Form1 />
      </Router>
    </StateMachineProvider>
  );
};
