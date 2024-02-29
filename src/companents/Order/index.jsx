import React, { useEffect, useState } from "react";
import "./order.css";
import { useMainContext } from "../../context/useProduct";
import { useNavigate } from "react-router-dom";
import { CgArrowRightO } from "react-icons/cg";

function Order() {
  const [basket, setBasket] = useState([]);
  const { counter } = useMainContext();
  const { order, setOrder } = useMainContext();
  const { setBox } = useMainContext();
  const nav = useNavigate();

  // useEffect(() => {
  //   let savedData = JSON.parse(localStorage.getItem("orders"));
  //   if (savedData) {
  //     setBox(savedData);
  //   }
  //   let saveCounter = JSON.parse(localStorage.getItem("counter"));
  //   if (saveCounter) {
  //     setOrder(saveCounter);
  //   }
  // }, []);

  function getOrder() {
    let savedData = JSON.parse(localStorage.getItem("orders")) || [];
    setBasket(savedData);
  }

  const clearCount = () => {
    localStorage.removeItem("counter");
    getOrder();
  };

  function delBooks(id) {
    let savedData = JSON.parse(localStorage.getItem("orders")) || [];
    savedData = savedData.filter((el) => el.id !== id);
    localStorage.setItem("orders", JSON.stringify(savedData));
    getOrder();
  }

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div>
      {basket.length == "" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            height: "500px",
            marginTop: "90px",
          }}
        >
          <center>
            <img
              style={{ width: "450px" }}
              src="https://www.matsuri72.ru/images/empty-cart.png"
              alt=""
            />
          </center>
          <h3
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              fontFamily: "sans-serif",
              color: "red",
            }}
          >
            КОРЗИНА ПУСТА
          </h3>
          <h4
            style={{
              color: "gray",
              fontFamily: "sans-serif",
              fontWeight: "500",
            }}
          >
            Кажется у вас нет товаров в корзине
          </h4>
          <button
            onClick={() => nav("/books")}
            style={{
              color: "white",
              background: "black",
              padding: "10px",
              borderRadius: "30px",
              border: "none",
              width: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            Перейти на товар <CgArrowRightO />
          </button>
        </div>
      ) : (
        basket.map((el) => (
          <div id="order">
            <div className="container">
              <div className="order">
                <div
                  className="orders"
                >
                  <img src={el.img} alt="" />
                  <div className="order_text">
                    <h1>{el.author}</h1>
                    <h2>{el.name}</h2>
                    <p>quantity: {counter}</p>
                    <h3>{el.price * counter}сом</h3>
                    <button
                      onClick={() => {
                        if (order >= 1) {
                          setOrder(order - 1);
                        }

                        clearCount();
                        delBooks(el.id);
                        getOrder();
                      }}
                    >
                      remove books
                    </button>
                  </div>
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
