import React from "react";
import Div1 from "../Shared/Other/Div1";
import Button2 from "../Shared/Buttons/Button2";
import Button3 from "../Shared/Buttons/Button3";
import Button5 from "../Shared/Buttons/Button5";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

function InvoiceHead({
  invoice,
  markInvoicesasPaid,
  deleteInvoice,
  changeOpenInvoice,
}) {
  const mediaQuery = useMediaQuery("(max-width: 510px)");
  return (
    <>
      {!mediaQuery ? (
        <div className="invoiceHead">
          <div>
            <p>Status:</p>
            <Div1 status={invoice.status} />
          </div>
          <div>
            <div onClick={() => changeOpenInvoice()}>
              <Button3 text="Edit" />
            </div>
            <div onClick={() => deleteInvoice(invoice.key)}>
              <Button5 text="Delete" />
            </div>
            <div onClick={() => markInvoicesasPaid(invoice.key)}>
              <Button2 text="Mark as Paid" />
            </div>
          </div>
        </div>
      ) : (
        <div className="invoiceHeadMobile">
          <div>
            <p>Status</p>
            <Div1 status={invoice.status} />
          </div>
          <div>
            <div onClick={() => changeOpenInvoice()}>
              <Button3 text="Edit" />
            </div>
            <div onClick={() => deleteInvoice(invoice.key)}>
              <Button5 text="Delete" />
            </div>
            <div onClick={() => markInvoicesasPaid(invoice.key)}>
              <Button2 text="Mark as Paid" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default InvoiceHead;
