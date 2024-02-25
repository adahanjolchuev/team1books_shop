import React, { useEffect, useState } from "react";
import "./order.css";
import { useMainContext } from "../../context/useProduct";

function Order() {
  const [basket, setBasket] = useState([]);
  const { counter } = useMainContext();
  const { order, setOrder } = useMainContext();

  function getOrder() {
    let order = JSON.parse(localStorage.getItem("orders")) || [];
    setBasket(order);
  }

  function delBooks(id) {
    let order = JSON.parse(localStorage.getItem("orders")) || [];
    order = order.filter((el) => el.id !== id);
    localStorage.setItem("orders", JSON.stringify(order));
    getOrder();
  }
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div>
      {basket.length == "" ? (
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
            height: "600px",
            color: "red",
          }}
        >
          у вас ничего нету?
        </h3>
      ) : (
        basket.map((el) => (
          <div id="order">
            <div className="container">
              <div className="order">
                <img src={el.img} alt="" />
                <div className="order_text">
                  <h1>{el.author}</h1>
                  <h2>{el.name}</h2>
                  <p>quantity: {counter}</p>
                  <h3>{el.price}сом</h3>
                  <button
                    onClick={() => {
                      if (order >= 1) {
                        setOrder(order - 1);
                      }
                      // }
                      delBooks(el.id);
                    }}
                  >
                    remove books
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Order;
