import React, { useEffect, useState } from "react";

function Search({ nameBooks }) {
  const [searchProduct, setSearchProduct] = useState([]);

  function getSearch() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setSearchProduct(data);
  }
    let res = searchProduct.filter((el)=>{
      return  el.name == nameBooks
    })

  useEffect(() => {
    getSearch();
  }, [nameBooks]);

  return (
    <div className="container">
      <div className="search">
        <div className="blocks_books">
          {res.map((el) => (
            <div>
              <img src={el.img} alt="" />
              <h2>{el.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
