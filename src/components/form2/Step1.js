import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import styled from "styled-components";
import "./../styles/tailwind.css";
import updateAction from "./../common/updateAction";

const Step1 = () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: state.delayObjective,
  });

  const history = useHistory();
  const onSubmit = (data) => {
    action(data);
    history.push("/step2");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Step-1</h3>
        <label>
          Task Name:
          <input {...register("taskName")} />
        </label>

        <div className="flex-items">
          <CheckSpacer />
          <div
            className="pretty p-default p-thick"
            style={{ marginTop: ".5em", marginBottom: ".75em" }}
          >
            <input {...register("invisible")} type="checkbox" />
            <div className="state">
              <label className="checkLabel" style={{ paddingTop: "3px" }}>
                Invisible
              </label>
            </div>
          </div>
          <CheckSpacer />
        </div>

        <input type="submit" value="&#x226A; Submit &#x226B;" />

        <input
          type="button"
          className="resetButton"
          value="Reset Selection"
          onClick={() => {
            reset(state);
            window.STATE_MACHINE_RESET();
            window.location.reload();
          }}
        />
      </form>
    </FormContainer>
  );
};

export default Step1;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;
const CheckSpacer = styled.div`
  border-top: 0px inset #10101080;
  width: 100%;
  margin: 2px 0;
`;
