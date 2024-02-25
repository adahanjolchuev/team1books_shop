import React, { useEffect, useState } from "react";
import "./books.css";
import { Link } from "react-router-dom";

function Books() {
  const [book, setBook] = useState([]);
  function getProduct() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setBook(data);
  }

  // function getDeleteProduct(id) {
  //   let data = JSON.parse(localStorage.getItem("books")) || [];
  //   data = data.filter((el) => el.id !== id);
  //   localStorage.setItem("books", JSON.stringify(data));
  //   getProduct();
  // }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div id="books">
        <div className="container">
          <div className="books">
            <div className="books_text">
              <h3>Возможно, Вам понравится</h3>{" "}
              <select>
                <option>popular</option>
                <option>All books</option>
              </select>
            </div>
            <div className="blocks_books">
              {book.map((el) => (
                <div className="block_book">
                  <Link to={`/book-detals/${el.id}`}>
                    <img src={el.img} alt="" />
                    <h2>{el.name}</h2>
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      width: "230px",
                    }}
                    className="pDelbtn"
                  >
                    <p>{el.price}сом</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
