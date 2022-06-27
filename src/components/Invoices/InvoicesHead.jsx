import Button1 from "../Shared/Buttons/Button1";
import FormEl4 from "../Shared/FormEls/FormEl4";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function MainHead({ setOpenInvoice, changerOptions, invoicesNumber }) {
  const mediaQuery = useMediaQuery("(max-width: 535px)");
  return (
    <div className="invoicesHead">
      <div>
        <h1 className="head1">Invoices</h1>
        <p className="text1">There are {invoicesNumber} total invoices</p>
      </div>
      <div>
        <FormEl4 changerOptions={(value) => changerOptions(value)} />
        <div onClick={() => setOpenInvoice(true)}>
          {!mediaQuery ? (
            <Button1 text="New Invoice" />
          ) : (
            <Button1 text="New" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHead;
