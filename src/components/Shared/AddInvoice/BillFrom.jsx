import React, { useState, useEffect } from "react";

function BillFrom({ changeData }) {
  const [billFrom, setBillFrom] = useState({
    address: "",
    city: "",
    postCode: 0,
    country: "",
  });
  const receivingData = (name, value) => {
    setBillFrom((obj) => ({
      ...obj,
      [name]: value,
    }));
  };
  useEffect(() => {
    changeData("billFrom", billFrom);
  }, [billFrom]);
  return (
    <div className="groupForm">
      <p className="head4">Bill From</p>
      <div>
        <div>
          <p className="head4">Street Address</p>
          <input
            type="text"
            className=" formEl1 formInput"
            placeholder="Street Address"
            onChange={(e) => receivingData("address", e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <div>
          <p className="head4">City</p>
          <input
            type="text"
            className=" formEl1 formInput"
            placeholder="City"
            onChange={(e) => receivingData("city", e.target.value)}
            required
          />
        </div>
        <div>
          <p className="head4">Post Code</p>
          <input
            type="text"
            className=" formEl1 formInput"
            placeholder="PostCode"
            onChange={(e) => receivingData("postCode", e.target.value)}
            required
          />
        </div>
        <div>
          <p className="head4">Country</p>
          <input
            type="text"
            className=" formEl1 formInput"
            placeholder="Country"
            onChange={(e) => receivingData("country", e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default BillFrom;
