import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";
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
              <label style={{ textAlign: "left" }}>Objective Class:</label>
              <input
                key={item.id}
                {...register(`objectives.${index}.objectiveClass`)}
                defaultValue={item.objectiveClass}
              />

              <button
                className="buttonMinus"
                style={{ margin: "-.65em 0 1.5em" }}
                type="button"
                onClick={() => objRemove(index)}
              >
                Delete
              </button>
              <NestedArray nestIndex={index} {...{ control, register }} />
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
                defaultActors: [
                  {
                    actor: "Touchscreen Display ETD101 Maintenance Rack 2",
                    preCmd: "Enable",
                    preArgs: true,
                    postCmd: "Enable",
                  },
                ],
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
                defaultActors: [
                  {
                    actor: "Touchscreen Display ETD101 Maintenance Rack 2",
                    preCmd: "Enable",
                    preArgs: true,
                    postCmd: "Enable",
                  },
                ],
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
