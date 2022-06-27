import React, { useState, useEffect } from "react";
import { monthsPrefixes } from "../../../App";

function FormEl3({ changeInvoiceDate }) {
  const daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = new Date();
  const [toggler, setToggler] = useState(false);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [chosenDate, setChosenDate] = useState([
    day < 10 ? "0" + day : day + "",
    month + 1 < 10 ? "0" + month : month,
    year + "",
  ]);
  const changeMonth = (n) => {
    if (month <= 11) {
      if (month === 0 && n < 0) {
        setMonth(11);
        setYear(year + n);
      } else if (month === 11 && n > 0) {
        setMonth(0);
        setYear(year + n);
      } else {
        setMonth(month + n);
      }
    } else {
      setYear(year + n);
      if (n > 0) {
        setMonth(0);
      } else {
        setMonth(11);
      }
    }
  };
  const dates = [
    day < 10 ? "0" + day : day + "",
    month + 1 < 10 ? "0" + month : month,
    year + "",
  ];
  useEffect(() => {
    setChosenDate((state) => state.map((el, i) => dates[i]));
  }, [day]);
  useEffect(() => {
    changeInvoiceDate("date", chosenDate);
  }, [chosenDate]);
  useEffect(() => {
    setToggler(false);
  }, [day]);
  return (
    <div className="formEl3">
      <div onClick={() => setToggler(!toggler)}>
        <p>
          {chosenDate[0] +
            " " +
            monthsPrefixes[Number(chosenDate[1])] +
            " " +
            chosenDate[2]}
        </p>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667 .667 0 00-. 667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
            fill="#7E88C3"
            fill-rule="nonzero"
            opacity=".5"
          />
        </svg>
      </div>
      {toggler ? (
        <div className="datePicker">
          <div>
            <svg
              width="7"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => (year > 1970 ? changeMonth(-1) : null)}
            >
              <path
                d="M6.342.886L2.114 5.114l4.228 4.228"
                stroke="#9277FF"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
            <p>
              {monthsPrefixes[month]} {year}
            </p>
            <svg
              width="7"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => changeMonth(1)}
            >
              <path
                d="M1 1l4 4-4 4"
                stroke="#7C5DFA"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            {[...Array(daysInMonths[month])].map((el, i) => (
              <div
                key={i}
                className={day === i + 1 ? "selected" : null}
                onClick={() => {
                  setDay(i + 1);
                }}
              >
                <p>{i + 1}</p>
              </div>
            ))}
            {[...Array(35 - daysInMonths[month])].map((el, i) => (
              <div>
                <p className="disabled" key={i}>
                  {i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FormEl3;
