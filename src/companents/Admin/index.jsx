import React, { useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAutor] = useState("");
  let nav = useNavigate("");

  function getAdmin() { 
    let obj = {
      id: Date.now(),
      img,
      name,
      price,
      category,
      description,
      author,
    };
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data.push(obj);
    localStorage.setItem("books", JSON.stringify(data));
    nav("/");
  }

  return (
    <>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h3>ADMIN</h3>
            <div
              className="inputs_admin
            "
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
                className="imgSave"
              >
                <input
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="imgInput"
                  onChange={(event) => {
                    setImg(event.target.value);
                  }}
                  type="text"
                  placeholder="upload img"
                  value={img}
                />
                <button
                  onClick={() => {
                    if (
                      img &&
                      name &&
                      price &&
                      author &&
                      category &&
                      description !== ""
                    ) {
                      getAdmin();
                    } else {
                      alert("запольните все поля!!!");
                    }
                  }}
                >
                  save
                </button>
              </div>
              <div className="inputsAdmin">
                <input
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="text"
                  placeholder="name..."
                  value={name}
                />
                <input
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="categoryInput"
                  type="text"
                  placeholder="category"
                  value={category}
                />
                <input
                  className="priceInput"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  type="text"
                  placeholder="price..."
                  value={price}
                />
                <input
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="text"
                  placeholder="description..."
                  value={description}
                />
                <input
                  onChange={(e) => {
                    setAutor(e.target.value);
                  }}
                  type="text"
                  placeholder="author"
                  value={author}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
