import React from "react";
import Form4 from "../form4/index";
import { useStateMachine } from "little-state-machine";
import updateAction from "../common/updateAction";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

export const Form04 = () => {
  const { state } = useStateMachine(updateAction);
  console.log(state);

  return (
    <StateMachineProvider>
      <Router>
        <Form4 />
      </Router>
    </StateMachineProvider>
  );
};
