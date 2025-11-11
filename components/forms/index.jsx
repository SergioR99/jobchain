"use client";
import React, { useState } from "react";

const InputMail = ({ labelText }) => {
  const [value, setValue] = useState("");

  function changeEmail(e) {
    setValue(e.target.value);
  }

  return (
    <fieldset className="relative mb-4">
      {value !== "" ? (
        <label className="absolute px-6 pt-1" style={{ color: "#7871FF" }}>
          {labelText}
        </label>
      ) : null}
      <input
        type="email"
        value={value}
        placeholder="Escribe tu correo electronico "
        onChange={changeEmail}
        className={`rounded-2xl w-full text-xl transition-all duration-200 ${
          value === "" ? "p-6" : "pt-9 px-6 pb-4"
        }`}
        style={{
          background: "#141534",
          color: "#FFF",
          ...(value !== "" && {
            border: "2px solid #7871ff",
            boxShadow: "0 0 0px 4px #7871ff66",
          }),
        }}
        id=""
      />
      {value !== "" ? (
        <button
          className="absolute rounded-full text-lg font-normal w-9 h-9 right-4 top-6"
          style={{ background: "#30305e" }}
          onClick={() => setValue("")}
        >
          x
        </button>
      ) : null}
    </fieldset>
  );
};

export default InputMail;
