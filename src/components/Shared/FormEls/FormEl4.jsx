import React, { useState, useEffect } from "react";

function FormEl4({ changerOptions }) {
  const [toggler, setToggler] = useState(false);
  const [options, setOptions] = useState([
    { option: "Paid", chosen: true },
    { option: "Pending", chosen: true },
    { option: "Draft", chosen: true },
  ]);
  const changeOption = (index) => {
    setOptions((arr) =>
      arr.map((el, i) =>
        i !== index
          ? { ...el, chosen: el.chosen }
          : { ...el, chosen: !el.chosen }
      )
    );
  };
  useEffect(() => {
    changerOptions(options);
  });
  return (
    <div className="formEl4">
      <div onClick={() => setToggler(!toggler)}>
        <p className="text1">Filter by status</p>
        <svg
          width="11"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: toggler ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          <path
            d="M1 1l4.228 4.228L9.456 1"
            stroke="#7C5DFA"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      {toggler ? (
        <div className="options">
          {options.map((option, i) => {
            return (
              <div key={i}>
                <div onClick={() => changeOption(i)}>
                  {options[i].chosen ? (
                    <div>
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  ) : null}
                </div>
                <p>{option.option}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default FormEl4;
