import React, { useState, useEffect } from "react";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemsList from "./ItemsList";
import InvoiceDate from "./InvoiceDate";
import Button2 from "../../Shared/Buttons/Button2";
import Button3 from "../../Shared/Buttons/Button3";
import Invoices from "../../Invoices/InvoicesList";
import { useLocation } from "react-router-dom";

function AddInvoice({ insertInvoice, closeAddInvoice }) {
  const [animation, setAnimation] = useState("-620px");
  const [state, setState] = useState(0);
  const [singleInvoice, setSingleInvoice] = useState({
    billFrom: {
      address: "",
      city: "",
      postCode: 0,
      country: "",
    },
    billTo: {
      clientName: "",
      clientEmail: "",
      streetAdress: "",
      city: "",
      postCode: "",
      country: "",
    },
    invoiceDate: {
      date: ["", "", ""],
      netDays: 30,
    },
    itemsList: [
      {
        itemName: "item",
        qty: 1,
        price: 100,
        id: 0.11260118820508169,
      },
    ],
    key: null,
    status: "Pending",
  });
  const changeData = (name, newValue) => {
    setSingleInvoice((obj) => {
      return { ...obj, [name]: newValue };
    });
  };
  const changeItemsList = (newValue) => {
    setSingleInvoice((obj) => ({ ...obj, itemsList: newValue }));
  };
  useEffect(() => {
    setAnimation("0");
  }, []);
  useEffect(() => {
    if (state === 1) {
      setAnimation("-620px");
      setState((state) => state + 1);
      console.log(state);
    } else if (state === 2) {
      setTimeout(() => {
        closeAddInvoice();
      }, 1000);
    }
  }, [state]);
  return (
    <form
      className="addInvoice"
      style={{ transform: `translateX(${animation})` }}
      onSubmit={(e) => {
        e.preventDefault();
        insertInvoice(singleInvoice);
      }}
    >
      <h1 className="head1">
        {useLocation().pathname === "/" ? "New" : "Edit"} Invoice
      </h1>
      <BillFrom changeData={(i, newValue) => changeData(i, newValue)} />
      <BillTo changeData={(i, newValue) => changeData(i, newValue)} />
      <InvoiceDate changeData={(i, newValue) => changeData(i, newValue)} />
      <ItemsList changeItemsList={(newValue) => changeItemsList(newValue)} />
      <div>
        <Button2 text="Save & Send" />
        <div
          onClick={(e) => {
            setState((state) => state + 1);
            e.preventDefault();
          }}
        >
          <Button3 text="Cancel" />
        </div>
      </div>
    </form>
  );
}

export default AddInvoice;
