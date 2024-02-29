import React, { useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [imgFile, setImgFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  let nav = useNavigate("");

  function handleImageChange(event) {
    const file = event.target.files[0];
    setImgFile(file);
  }

  function getAdmin() {
    if (imgFile && name && price && author && category && description !== "") {
      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onload = function () {
        const imgData = reader.result;
        const obj = {
          id: Date.now(),
          img: imgData,
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
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    } else {
      alert("Заполните все поля!!!");
    }
  }

  return (
    <>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <h3>ADMIN</h3>
            <div className="inputs_admin">
              <div className="imgSave">
                <input
                  className="imgInput"
                  onChange={handleImageChange}
                  type="file"
                  accept="image/"
                />
                <button onClick={getAdmin}>Save</button>
              </div>
              <div className="inputsAdmin">
                <input
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="text"
                  placeholder="Name..."
                  value={name}
                />
                <input
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="categoryInput"
                  type="text"
                  placeholder="Category"
                  value={category}
                />
                <input
                  className="priceInput"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  type="number"
                  placeholder="Price..."
                  value={price}
                />
                <input
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="text"
                  placeholder="Description..."
                  value={description}
                />
                <input
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  type="text"
                  placeholder="Author"
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
