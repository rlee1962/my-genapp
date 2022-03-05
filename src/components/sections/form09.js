import React from "react";
import Form9 from "../form9/index";
import { useStateMachine } from "little-state-machine";
import updateAction from "../common/updateAction";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";

export const Form09 = () => {
  const { state } = useStateMachine(updateAction);
  console.log(state);

  return (
    <StateMachineProvider>
      <Router>
        <Form9 />
      </Router>
    </StateMachineProvider>
  );
};
