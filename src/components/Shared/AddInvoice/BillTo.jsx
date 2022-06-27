import React, { useState, useEffect } from "react";

function BillTo({ changeData }) {
  const [billTo, setBillTo] = useState({
    clientName: "",
    clientEmail: "",
    streetAdress: "",
    city: "",
    postCode: "",
    country: "",
  });
  const receivingData = (name, value) => {
    setBillTo((obj) => ({
      ...obj,
      [name]: value,
    }));
  };
  useEffect(() => {
    changeData("billTo", billTo);
  }, [billTo]);
  return (
    <div className="groupForm">
      <p className="head4">Bill To</p>
      <div>
        <div>
          <p className="head4">Client’s Name</p>
          <input
            type="text"
            className=" formEl1 formInput"
            placeholder="clientName"
            onChange={(e) => receivingData("clientName", e.target.value)}
            required
          />
        </div>
        <div>
          <p className="head4">Client’s Email</p>
          <input
            type="email"
            className=" formEl1 formInput"
            placeholder="clientEmail"
            onChange={(e) => receivingData("clientEmail", e.target.value)}
            required
          />
        </div>
        <div>
          <p className="head4">Street Address</p>
          <input
            type="text"
            className=" formEl1 formInput"
            placeholder="street Adress"
            onChange={(e) => receivingData("streetAdress", e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <div>
          <p className="head4">City</p>
          <input
            type="text"
            className="formEl1 formInput"
            placeholder="city"
            onChange={(e) => receivingData("city", e.target.value)}
            required
          />
        </div>
        <div>
          <p className="head4">Post Code</p>
          <input
            type="text"
            className="formEl1 formInput"
            placeholder="postCode"
            onChange={(e) => receivingData("postCode", e.target.value)}
            required
          />
        </div>
        <div>
          <p className="head4">Country</p>
          <input
            type="text"
            className="formEl1 formInput"
            placeholder="country"
            onChange={(e) => receivingData("country", e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default BillTo;
