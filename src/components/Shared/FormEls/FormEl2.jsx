import React, { useState } from "react";

function FormEl2({ changeInvoiceDate }) {
  const [toggler, setToggler] = useState(false);
  const [netDays, setNetDays] = useState(30);
  const days = [1, 7, 14, 30];
  return (
    <div className="formEl2">
      <div onClick={() => setToggler(!toggler)}>
        <span>Net {netDays} Days</span>
        <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
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
        <ul>
          {days.map((el, i) => {
            return (
              <li
                onClick={() => {
                  setNetDays(el);
                  setToggler(false);
                  setTimeout(() => {
                    changeInvoiceDate("netDays", el);
                  }, 0);
                }}
                key={i}
              >
                <span> Net {el} Days</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default FormEl2;
