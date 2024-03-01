import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./bookDetals.css";
import { useMainContext } from "../../context/useProduct";

function BookDetals() {
  const { detal, setDetal } = useMainContext();
  const { description, setDescription } = useMainContext();
  const { order, setOrder } = useMainContext();
  const { book, setBook } = useMainContext();
  // const { setPrice } = useMainContext();
  const { bookId } = useParams();

  const nav = useNavigate();

  function placeOrder() {
    setOrder(order + 1);
    localStorage.setItem("counter", JSON.stringify(order + 1));
  }
  function getProduct() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setBook(data);
  }
  function getDetal() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data = data.filter((el) => el.id == bookId);
    setDetal(data);
  }

  function up() {
    window.scroll({
      left: "0",
      top: "0",
      behavior: "smooth",
    });
  }
  function getOrder(el) {
    let savedData = JSON.parse(localStorage.getItem("orders")) || [];
    let res = savedData.some((il) => {
      return el.id === il.id;
    });
    if (res === false) {
      savedData.push(el);
      localStorage.setItem("orders", JSON.stringify(savedData));
      placeOrder(el);
    } else {
      alert("У вас уже есть такая книга");
    }
  }

  useEffect(() => {
    getDetal();
    getProduct();
  }, [bookId]);

  return (
    <>
      <div id="detal">
        <div className="container">
          <div className="detal">
            {detal.map((el) => (
              <>
                <img src={el.img} alt="" />
                <div className="detal_book">
                  <h2 className="author">
                    <span>Автор:</span>
                    {el.author}
                  </h2>

                  <h2>{el.name}</h2>

                  <p>{el.price * el.count}сом</p>

                  <p>{el.price * counter}сом</p>

                  <h4
                    style={{
                      fontFamily: "sans-serif",
                      margin: "20px 0",
                      fontSize: "20px",
                    }}
                  >
                    Описание:
                  </h4>
                  <div>
                    <h3>
                      {description
                        ? el.description
                        : el.description.slice(0, 202)}
                      <button
                        style={{
                          border: "none",
                          fontWeight: "900",
                          fontSize: "15px",
                          padding: "0",
                          margin: "0",
                          color: "#181818",
                        }}
                        className="descriptionBtn"
                        onClick={() => {
                          setDescription(!description);
                        }}
                      >
                        {description ? "скрыть" : "...далее"}
                      </button>
                    </h3>
                  </div>
                  <div className="countBtns">
                    <button
                      onClick={() => {
                        if (el.count > 1) {
                          el.count -= 1;
                          getProduct();
                        }
                      }}
                    >
                      -
                    </button>
                    <h3>{el.count}</h3>
                    <button
                      onClick={() => {
                        el.count += 1;
                        getProduct();
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      getOrder(el);
                    }}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="container">
          <h1
            style={{
              fontFamily: "sans-serif",
              color: "#000F35",
              margin: "40px 0",
            }}
          >
            Рекомендация
          </h1>
          <div
            style={{
              display: "flex",
              overflow: "scroll",
              gap: "30px",
              margin: "20px 0",
            }}
            className="blog_books"
          >
            {book.map((el) => (
              <div
                onClick={() => {
                  nav(`/book-detals/${el.id}`);
                  up();
                }}
                className="block_book"
              >
                <img src={el.img} alt="" />
                <h2>{el.name}</h2>
                {/* </Link> */}
                <p>{el.price}сом</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default BookDetals;
