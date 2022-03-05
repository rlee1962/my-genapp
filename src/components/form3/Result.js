import React from "react";
import { useStateMachine } from "little-state-machine";
import { saveAs } from "@progress/kendo-file-saver";
import updateAction from "./../common/updateAction";

const Result = () => {
  const { state } = useStateMachine(updateAction);
  console.log(state.floatingMenuEvent);

  const submitForm = () => {
    const blob = new Blob(
      [JSON.stringify(state.floatingMenuEvent, null, "\t")],
      {
        "Content-Type":
          "application/json" + JSON.stringify(state.ase1Preflight, null, "\t"),
      }
    );

    const slob =
      "data:application/json," +
      JSON.stringify(state.floatingMenuEvent, null, "\t");
    saveAs(blob, "data.json");
    console.log("Listening:", state.ase1Preflight, slob);
  };

  return (
    <div className="container">
      <pre id="results">{JSON.stringify(state.floatingMenuEvent, null, 2)}</pre>
      <button type="submit" onClick={submitForm}>
        Save &#8595;
      </button>
    </div>
  );
};

export default Result;
