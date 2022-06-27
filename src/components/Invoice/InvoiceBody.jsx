import React from "react";
import { monthsPrefixes } from "../../App";
import useMediaQuery from "@mui/material/useMediaQuery";

function InvoiceBody({ invoice }) {
  const mediaQuery = useMediaQuery("(max-width: 465px)");
  let paymentDate = new Date(
    monthsPrefixes[Number(invoice.invoiceDate.date[1])] +
      " " +
      invoice.invoiceDate.date[0] +
      "," +
      invoice.invoiceDate.date[2][2] +
      invoice.invoiceDate.date[2][3]
  );
  paymentDate.setDate(paymentDate.getDate() + invoice.invoiceDate.netDays);
  const getTotalPrice = (invoice) => {
    let total = 0;
    invoice.itemsList.forEach((item) => {
      total += item.qty * item.price;
    });
    return total;
  };
  const paymentDay = [
    paymentDate.getDate() > 9
      ? paymentDate.getDate()
      : "0" + paymentDate.getDate(),
    monthsPrefixes[Number(paymentDate.getMonth())],
    paymentDate.getFullYear(),
  ];

  return (
    <div className="invoiceBody">
      <div>
        <div>
          <div>
            <h1 className="head2">
              <span>#</span>
              {invoice.key}
            </h1>
            <p>Graphic Design</p>
          </div>
          <ul>
            <li>{invoice.billFrom.adress}</li>
            <li>{invoice.billFrom.city}</li>
            <li>{invoice.billFrom.postCode}</li>
            <li>{invoice.billFrom.country}</li>
          </ul>
        </div>
        <div>
          <div>
            <div>
              <p>Payment Due</p>
              <h1 className="head2">
                {invoice.invoiceDate.date[0] +
                  " " +
                  monthsPrefixes[Number(invoice.invoiceDate.date[1])] +
                  " " +
                  invoice.invoiceDate.date[2]}
              </h1>
            </div>
            <div>
              <p>PaymentDay</p>
              <h1 className="head2">
                {paymentDay[0] + " " + paymentDay[1] + " " + paymentDay[2]}
              </h1>
            </div>
          </div>
          <div>
            <p>Bill To</p>
            <h1 className="head2">{invoice.billTo.clientName}</h1>
            <ul>
              <li>{invoice.billTo.streetAdress}</li>
              <li>{invoice.billTo.city}</li>
              <li>{invoice.billTo.postCode}</li>
              <li>{invoice.billTo.country}</li>
            </ul>
          </div>
          <div>
            <p>Sent to</p>
            <h1 className="head3">{invoice.billTo.clientEmail}</h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          {!mediaQuery ? (
            <table>
              <tr>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              {invoice.itemsList.map((item) => (
                <tr key={Math.random()}>
                  <td>{item.itemName}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.price * item.qty}</td>
                </tr>
              ))}
            </table>
          ) : (
            <div className="itemsMobile">
              {invoice.itemsList.map((item) => (
                <div key={Math.random()}>
                  <div>
                    <p className="head3">{item.itemName}</p>
                    <p>{item.qty + "x" + item.price}</p>
                  </div>
                  <p className="head2">{item.qty * item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <p>Amount Due</p>
          <h1>{getTotalPrice(invoice)}</h1>
        </div>
      </div>
    </div>
  );
}

export default InvoiceBody;
