import React, { useState, useEffect } from "react";
import Navbar from "./components/Shared/Navbar/Navbar";
import AddInvoice from "./components/Shared/AddInvoice/AddInvoice";
import Invoices from "./components/Invoices/Invoices";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Invoice from "./components/Invoice/Invoice";

export const monthsPrefixes = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function App() {
  if (localStorage.invoices === undefined) {
    localStorage.setItem(
      "invoices",
      JSON.stringify([
        {
          billFrom: {
            adress: "Street",
            city: "Seattle",
            postCode: "E1 3EZ",
            country: "United States",
          },
          billTo: {
            clientName: "Mahmod",
            clientEmail: "mahmod.rabee2007@gmail.com ",
            streetAdress: "Mahmod Darweesh",
            city: "Taibe",
            postCode: "A2B1EZ",
            country: "Country",
          },
          invoiceDate: {
            date: ["09", "09", "2019"],
            netDays: 30,
          },
          itemsList: [
            {
              itemName: "Headphone",
              qty: 1,
              price: 100,
              id: Math.random(),
            },
          ],
          key: "AA1111",
          status: "Paid",
        },
      ])
    );
  }
  const [isLoading, setIsLoading] = useState(false);

  const [openInvoice, setOpenInvoice] = useState(false);
  const [invoices, setInvoices] = useState(JSON.parse(localStorage.invoices));
  const location = useLocation();
  const insertInvoice = (newInvoice) => {
    if (location.pathname === "/") {
      newInvoice.key =
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10);
      setInvoices((state) => [...state, newInvoice]);
    } else {
      setInvoices((state) =>
        state.map((invoice) =>
          "/" + invoice.key === location.pathname
            ? { ...newInvoice, key: invoice.key }
            : invoice
        )
      );
    }
  };
  const markInvoicesasPaid = (key) => {
    setInvoices((state) =>
      state.map((el) => (el.key === key ? { ...el, status: "Paid" } : el))
    );
  };
  let navigate = useNavigate();
  const deleteInvoice = (key) => {
    navigate("/");
    setInvoices((state) => state.filter((el) => el.key !== key));
  };
  useEffect(() => {
    setInvoices((state) =>
      state.map((invoice) => {
        let paymentDate = new Date(
          monthsPrefixes[Number(invoice.invoiceDate.date[1])] +
            " " +
            invoice.invoiceDate.date[0] +
            "," +
            invoice.invoiceDate.date[2][2] +
            invoice.invoiceDate.date[2][3]
        );
        paymentDate.setDate(
          paymentDate.getDate() + invoice.invoiceDate.netDays
        );

        let dateNow = new Date();
        paymentDate.setDate(
          paymentDate.getDate() + invoice.invoiceDate.netDays
        );
        return dateNow > paymentDate && invoice.status !== "Paid"
          ? { ...invoice, status: "Draft" }
          : invoice;
      })
    );
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=0")
      .then((respose) => respose.json())
      .then((respose) => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    setOpenInvoice(false);
    localStorage.invoices = JSON.stringify(invoices);
  }, [invoices]);
  useEffect(() => {
    setOpenInvoice(false);
  }, [location]);

  return (
    <div id="App">
      {isLoading ? (
        <div>
          <HashLoader
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            color="#9277ff"
            loading={isLoading}
            size={150}
          />
        </div>
      ) : (
        <>
          <Navbar />
          {openInvoice ? (
            <AddInvoice
              insertInvoice={(newInvoice) => insertInvoice(newInvoice)}
              closeAddInvoice={() => setOpenInvoice(false)}
            />
          ) : null}
          <Routes>
            <Route
              path="/"
              element={
                <Invoices
                  invoices={invoices}
                  setOpenInvoice={() => setOpenInvoice(true)}
                />
              }
            />
            {invoices.map((invoice) => (
              <Route
                path={"/" + invoice.key}
                key={invoice.key}
                element={
                  <Invoice
                    invoice={invoice}
                    markInvoicesasPaid={(key) => markInvoicesasPaid(key)}
                    deleteInvoice={(key) => deleteInvoice(key)}
                    changeOpenInvoice={() => setOpenInvoice(true)}
                  />
                }
              />
            ))}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
