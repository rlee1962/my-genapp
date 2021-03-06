import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";
import PostedArray from "./postFieldArray";
import "./../styles/tailwind.css";
import "./../styles/Custom.css";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const {
    fields: objFields,
    append: objAppend,
    remove: objRemove,
    prepend: objPrepend,
  } = useFieldArray({ control, name: "objectives" });

  // renderCount++;

  return (
    <>
      <ul>
        {objFields.map((item, index) => {
          return (
            <li key={item.id}>
              <NestedArray nestIndex={index} {...{ control, register }} />
              <label style={{ textAlign: "left" }}>action:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.action`)}
                defaultValue={item.action}
              />

              <label style={{ textAlign: "left" }}>document:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.document1`)}
                defaultValue={item.document1}
              />

              <label style={{ textAlign: "left" }}>document:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.document2`)}
                defaultValue={item.document2}
              />

              <button
                className="buttonMinus"
                style={{ margin: "-.65em 0 1.5em" }}
                type="button"
                onClick={() => objRemove(index)}
              >
                Delete
              </button>
              <PostedArray postIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          className="buttonPlus"
          style={{ marginBottom: "-5px" }}
          type="button"
          onClick={() => {
            objAppend({ name: "append" });
          }}
        >
          Append
        </button>

        <button
          className="buttonPlus"
          type="button"
          onClick={() => {
            setValue("objectives", [
              ...getValues().objectives,
              {
                actors: [{ actor: "append", presetState: "append" }],
              },
            ]);
          }}
        >
          Append Nested
        </button>

        <button
          className="buttonPlus"
          type="button"
          onClick={() => {
            objPrepend({ name: "append" });
          }}
        >
          Prepend
        </button>

        <button
          className="buttonPlus"
          style={{ marginTop: "-2px" }}
          type="button"
          onClick={() => {
            setValue("objectives", [
              {
                actors: [{ actor: "prepend", presetState: "prepend" }],
              },
              ...getValues().objectives,
            ]);
          }}
        >
          Prepend Nested
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
