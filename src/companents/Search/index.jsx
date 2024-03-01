import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMainContext } from "../../context/useProduct";
import "./search.css";
// import Books from "../pages/Home/Books";

function Search({ nameBooks }) {
  const [searchProduct, setSearchProduct] = useState([]);
  const { bookId } = useParams();
  const { book, setBook } = useMainContext();
  const nav = useNavigate();

  function getSearch() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setSearchProduct(data);
  }
  let res = searchProduct.filter((el) => {
    return el.name.toLowerCase().includes(nameBooks.toLowerCase());
  });
  function getDetal() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data = data.filter((el) => el.id == bookId);
    setBook(data);
  }

  useEffect(() => {
    getSearch();
    getDetal();
  }, [nameBooks]);

  return (
    <div className="container">
      <div className="search">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="blocks_books"
        >
          {res.length === 0 ? (
            <div className="searchAlerts">
              <div
                className="searchAlert"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "500px",
                  gap: "20px",
                }}
              >
                {/* <center> */}
                <img
                  style={{
                    width: "450px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  src="https://www.matsuri72.ru/images/empty-cart.png"
                  alt=""
                />
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    color: "gray",
                    fontWeight: "200",
                  }}
                >
                  К сожалению, мы не смогли найти то, что вы ищете. Попробуйте{" "}
                  <br />
                  другой поиск или просмотрите наши рекомендации ниже.
                </h3>
                {/* </center> */}
              </div>
            </div>
          ) : ( 
            
            res.map((el) => (
              <div
                onClick={() => {
                  nav(`/book-detals/${el.id}`);
                }}
                className="block_book"
              >
                <img src={el.img} alt="" />
                <h2>{el.name}</h2>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
