import React, { useEffect, useState } from "react";
import "./books.css";
import { Link } from "react-router-dom";
import { useMainContext } from "../../../../context/useProduct";

function Books() {
  const [select, setSelect] = useState("");
  const { book, setBook } = useMainContext();
  const { description, setDescription } = useMainContext();

  function getProduct() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setBook(data);
  }

  function handleSelect(event) {
    setSelect(event.target.value);
  }
  function handleFantastic() {
    if (select === "Фантастика") {
      book.map((el) => {
        <div className="block_book">
          <Link to={`/book-detals/${el.id}`}>
            <img src={el.img} alt="" />
            <h2>{el.name}</h2>
          </Link>
          <p>{el.price}сом</p>
        </div>;
      });
    }
  }

  useEffect(() => {
    getProduct();
    handleFantastic();
  }, []);
  return (
    <>
      <div id="books">
        <div className="container">
          <div className="books">
            <div className="books_text">
              <h3>Возможно, Вам понравится</h3>{" "}
              <select onChange={handleSelect}>
                <option value={select === "Детектив"}>Детектив</option>
                <option onClick={() => handleFantastic()} value={select}>
                  Фантастика
                </option>
                <option value={select === "Приключения"}>Приключения</option>
                <option value={select === "Научная"}>Научная</option>
                <option value={select === "Психология"}>Психология</option>
                <option value={select === "Все книги"}>Все книги</option>
              </select>
            </div>
            <div className="blocks_books">
              {description
                ? book.map((el) => (
                    <div className="block_book">
                      <Link to={`/book-detals/${el.id}`}>
                        <img src={el.img} alt="" />
                        <h2>{el.name}</h2>
                      </Link>
                      <p>{el.price}сом</p>
                    </div>
                  ))
                : book.slice(0, 10).map((el) => (
                    <div className="block_book">
                      <Link to={`/book-detals/${el.id}`}>
                        <img src={el.img} alt="" />
                        <h2>{el.name}</h2>
                      </Link>
                      <p>{el.price}сом</p>
                    </div>
                  ))}
            </div>
            <div
              onClick={() => setDescription(!description)}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="btnYet"
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  transition: "0.6s",
                }}
              >
                {description ? "скрыть" : "Показать ещё"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
