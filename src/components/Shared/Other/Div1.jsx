import React from "react";

function Div1({ status }) {
  const color = (status, opacity, bckground) => {
    return status === "Pending"
      ? "rgba(255, 143, 0," + opacity + ")"
      : status === "Paid"
      ? "rgba(51, 214, 159," + opacity + ")"
      : bckground
      ? "rgba(223, 227, 250," + opacity + ")"
      : "var(--text)";
  };
  return (
    <div
      className="div1"
      style={{
        backgroundColor: color(status, "0.2", true),
      }}
    >
      <div
        style={{
          backgroundColor: color(status, "1", false),
        }}
      ></div>
      <span
        style={{
          color: color(status, "1", false),
        }}
      >
        {status}
      </span>
    </div>
  );
}

export default Div1;
