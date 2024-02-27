import React from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMainContext } from "../../context/useProduct";

function Header({ setValue, nameBooks }) {
  const { order } = useMainContext();
  const {searchProduct}  = useMainContext()
  let nav = useNavigate();
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <h1 onClick={() => [nav("/")]}>BOOKShop</h1>

            <div className="header_right">
              <div className="inputs">
                <input
                  onInput={(e) => {
                    setValue(e.target.value);
                  }}
                  type="text"
                  placeholder="Search here..."
                  value={nameBooks}
                />

                <button
                  onClick={() => {
                    nav("/search");
                    }
                  }
                >
                  <FaSearch />
                </button>
                {/* </Link> */}
              </div>
              <div className="header_icons">
                <div className="korzina_btn">
                  <p
                    onClick={() => {
                      nav("/order");
                    }}
                  >
                    {" "}
                    <FaShoppingCart />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "25px",
                        right: "120px",
                        borderRadius: "20px",
                        width: "15px",
                        height: "15px",
                        background: order === 0 ? "none" : "red",
                      }}
                    >
                      {order === 0 ? "" : order}
                    </div>
                  </p>
                  <button
                    onClick={() => {
                      nav("/order");
                    }}
                  >
                    Корзина
                  </button>
                </div>
                <div className="admin_btn">
                  {/* <Link to={"/admin"}> */}
                  <p
                    onClick={() => {
                      nav("/admin");
                    }}
                  >
                    <AiOutlineUser />
                  </p>
                  <button
                    onClick={() => {
                      nav("/admin");
                    }}
                  >
                    Админ
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
