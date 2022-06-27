import React, { useEffect, useState } from "react";
import Button6 from "../../Shared/Buttons/Button6";
import useMediaQuery from "@mui/material/useMediaQuery";

function ItemsList({ changeItemsList }) {
  const mediaQuery = useMediaQuery("(max-width: 620px)");
  const [items, setItems] = useState([
    {
      itemName: "Item",
      qty: 1,
      price: 100,
      id: Math.random(),
    },
  ]);
  const changeItemDetails = (name, index, e) => {
    setItems((items) =>
      items.map((el, i) =>
        i === index
          ? {
              ...el,
              [name]: isNaN(e.target.value)
                ? e.target.value
                : Number(e.target.value),
            }
          : el
      )
    );
    changeItemsList(items);
  };
  const addItem = () => {
    setItems((items) => [
      ...items,
      {
        itemName: "Item",
        qty: 1,
        price: 100,
        id: Math.random(),
      },
    ]);
  };
  const deleteItem = (index) => {
    if (items.length > 1) {
      setItems((items) => items.filter((el, i) => i !== index));
    }
  };
  useEffect(() => {
    changeItemsList(items);
  }, [items]);
  return (
    <div className="itemsList">
      <h1 className="head2">Items List</h1>
      <div>
        {items.map((el, i) => {
          return (
            <div key={items[i].id}>
              <div>
                {i === 0 || mediaQuery ? <p>itemName</p> : null}
                <input
                  type="text"
                  className={el.id}
                  defaultValue={el.itemName}
                  onChange={(e) => {
                    changeItemDetails("itemName", i, e);
                  }}
                />
              </div>
              <div>
                {i === 0 || mediaQuery ? <p>QTY.</p> : null}
                <input
                  type="number"
                  defaultValue={el.qty}
                  onChange={(e) => {
                    if (e.target.value === "0") {
                      e.target.value = 1;
                    }
                    changeItemDetails("qty", i, e);
                  }}
                />
              </div>
              <div>
                {i === 0 || mediaQuery ? <p>Price</p> : null}
                <input
                  type="number"
                  defaultValue={el.price}
                  onChange={(e) => {
                    if (e.target.value === "0") {
                      e.target.value = 1;
                    }
                    changeItemDetails("price", i, e);
                  }}
                />
              </div>
              <p>{el.price * el.qty}</p>
              <svg
                width="13"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => deleteItem(i)}
              >
                <path
                  d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                  fill="#888EB0"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <Button6 text="+ Add New Item" />
      </div>
    </div>
  );
}

export default ItemsList;
