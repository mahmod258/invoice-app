import React from "react";
import InvoiceBody from "./InvoiceBody";
import InvoiceHead from "./InvoiceHead";
import { useNavigate } from "react-router-dom";

function Invoice({
  invoice,
  markInvoicesasPaid,
  deleteInvoice,
  changeOpenInvoice,
}) {
  const navigate = useNavigate();
  return (
    <div className="invoice">
      <div>
        <p
          className="text1"
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <span>Go Back</span>
        </p>
        <InvoiceHead
          invoice={invoice}
          markInvoicesasPaid={(key) => markInvoicesasPaid(key)}
          deleteInvoice={(key) => deleteInvoice(key)}
          changeOpenInvoice={() => changeOpenInvoice(true)}
        />
        <InvoiceBody invoice={invoice} />
      </div>
    </div>
  );
}

export default Invoice;
