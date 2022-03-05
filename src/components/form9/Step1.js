import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import styled from "styled-components";
import "./../styles/tailwind.css";
import updateAction from "./../common/updateAction";

const Step1 = () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register } = useForm({
    defaultValues: state.eTD101Objective,
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
          Description:
          <input {...register("description")} />
        </label>
        <label>
          Sub Description:
          <input {...register("subDescription")} />
        </label>
        <label>
          bind Event:
          <input {...register("bindEvent")} />
        </label>

        <input type="submit" value="&#x226A; Submit &#x226B;" />
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
