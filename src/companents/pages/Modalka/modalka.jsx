import React, { useState } from "react";
import "./modalka.css";
import { useMainContext } from "../../../context/useProduct";
import { useNavigate } from "react-router-dom";

function Modalka() {
  const { modal, setModal } = useMainContext();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClick = () => {
    if (password === "admin") {
      nav("/admin");
      setModal(false);
      setPassword('')
    } else {
      alert("Неверный пароль!!!");
    }
  };

  return (
    <div
      className="modal"
      style={{
        opacity: modal ? "1" : "0",
      }}
      onClick={() => setModal(false)}
    >
      <div
        className="modal_content"
        onClick={(e) => e.stopPropagation()}
        style={{
          pointerEvents: modal ? "all" : "none",
          display: modal ? "block" : "none",
        }}
      >
        <div className="Xbtn">
          <button onClick={() => setModal(!modal)}>x</button>
        </div>
        <h4>BOOKShop</h4>
        <div className="inputsModal">
          <input
            onChange={handlePasswordChange}
            type={passwordVisible ? "text" : "password"}
            placeholder="Password..."
            value={password}
          />
          <div
            style={{
              display: "flex",
            }}
            className="checkbox"
          >
            <input
              onClick={togglePasswordVisibility}
              style={{ maxWidth: "30px" }}
              type="checkbox"
            />
            <p
              style={{
                fontFamily: "sans-serif",
                color: "#010049",
              }}
            >
              Показать пароль
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="enter" onClick={handleClick}>
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalka;
