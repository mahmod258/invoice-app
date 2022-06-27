import React, { useState, useEffect } from "react";
import FormEl2 from "../../Shared/FormEls/FormEl2";
import FormEl3 from "../../Shared/FormEls/FormEl3";

function InvoiceDate({ changeData }) {
  const date = new Date();

  const [invoiceDate, setInvoiceDate] = useState({
    date: [
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate() + "",
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1 + "",
      date.getFullYear() + "",
    ],
    netDays: 30,
  });
  const changeInvoiceDate = (name, newValue) => {
    setInvoiceDate((obj) => ({ ...obj, [name]: newValue }));
  };
  useEffect(() => {
    changeData("invoiceDate", invoiceDate);
  }, [invoiceDate]);
  return (
    <div className="InvoiceDate">
      <FormEl3
        changeInvoiceDate={(name, newValue) =>
          changeInvoiceDate(name, newValue)
        }
      />
      <FormEl2
        changeInvoiceDate={(name, newValue) =>
          changeInvoiceDate(name, newValue)
        }
      />
    </div>
  );
}

export default InvoiceDate;
