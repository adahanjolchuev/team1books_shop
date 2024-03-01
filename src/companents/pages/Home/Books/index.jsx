import React, { useEffect, useState } from "react";
import "./books.css";
import { Link } from "react-router-dom";
import { useMainContext } from "../../../../context/useProduct";

function Books() {
  const [select, setSelect] = useState("Все книги");
  const [selectValue, setSelectValue] = useState([]);
  const { book, setBook } = useMainContext();
  // const { description, setDescription } = useMainContext();

  function addSelect() {
    let res = book.filter((el) => {
      return el.category === select;
    });
    setSelectValue(res);
  }
  function getProduct() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setBook(data);
  }
  function up() {
    window.scroll({
      left: "0",
      top: "0",
      behavior: "auto",
    });
  }
  function handleSelect(event) {
    setSelect(event.target.value);
  }
  useEffect(() => {
    getProduct();
    addSelect();
  }, [select]);
  return (
    <>
      <div id="books">
        <div className="container">
          <div className="books">
            <div className="books_text">
              <h3>Возможно, Вам понравится</h3>{" "}
              <select onChange={handleSelect}>
                <option value="Все книги">Все книги</option>

                <hr
                  style={{
                    borderBottom: "red 3px solid",
                  }}
                />
                <option value="Детектив">Детектив</option>
                <hr />
                <option value="Фантастика">Фантастика</option>
                <hr />
                <option value="Приключения">Приключения</option>
                <hr />
                <option value="Научная">Научная</option>
                <hr />

                <option value="Детектив">Детектив</option>
                <option value="Фантастика">Фантастика</option>
                <option value="Приключения">Приключения</option>
                <option value="Научная">Научная</option>

                <option value="Психология">Психология</option>
              </select>
            </div>
            <div onClick={() => up()} className="blocks_books">
              {select === "Все книги"
                ? book.map((el) => (
                    <div className="block_book">
                      <Link to={`/book-detals/${el.id}`}>
                        <img src={el.img} alt="" />
                        <h2>{el.name}</h2>
                      </Link>
                      <p>{el.price}сом</p>
                    </div>
                  ))
                : selectValue.map((el) => (
                    <div className="block_book">
                      <Link to={`/book-detals/${el.id}`}>
                        <img src={el.img} alt="" />
                        <h2>{el.name}</h2>
                      </Link>
                      <p>{el.price}сом</p>
                    </div>
                  ))}
            </div>
            {/* <div
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
