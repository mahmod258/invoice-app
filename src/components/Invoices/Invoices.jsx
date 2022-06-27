import React, { useState } from "react";
import InvoicesHead from "./InvoicesHead";
import InvoicesList from "./InvoicesList";

function Main({ invoices, setOpenInvoice }) {
  const [options, setOptions] = useState([]);
  const instruFiltringAbtInvoices = [];
  options.forEach((el) =>
    el.chosen ? instruFiltringAbtInvoices.push(el.option) : null
  );
  return (
    <div className="invoices">
      <div>
        <InvoicesHead
          setOpenInvoice={() => setOpenInvoice()}
          changerOptions={(value) => setOptions(value)}
          invoicesNumber={invoices.length}
        />
        <InvoicesList
          invoices={invoices}
          instruFiltringAbtInvoices={instruFiltringAbtInvoices}
        />
      </div>
    </div>
  );
}

export default Main;
