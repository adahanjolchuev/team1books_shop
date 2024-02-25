import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./bookDetals.css";
import { useMainContext } from "../../context/useProduct";

function BookDetals() {
  const { counter, setCounter } = useMainContext();
  // const [btns, setBtns] = useState(false);
  const [detal, setDetal] = useState([]);
  const [description, setDescription] = useState(false);
  const { order, setOrder } = useMainContext();

  const { bookId } = useParams();

  function getDetal() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data = data.filter((el) => el.id == bookId);
    setDetal(data);
    // console.log(data);
  }

  function getOrder(el) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let res = orders.some((il) => {
      return el.id == il.id;
    });
    if (res == false) {
      orders.push(el);
      localStorage.setItem("orders", JSON.stringify(orders));
      setOrder(order + 1);
    } else {
      alert("У вас уже есть такая книга");
    }
  }

  useEffect(() => {
    getDetal();
  }, []);

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
                    <span>Author:</span>
                    {el.author}
                  </h2>

                  <h2>{el.name}</h2>
                  <p>{el.price}сом</p>
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
                          marginLeft: "10px",
                        }}
                        className="descriptionBtn"
                        onClick={() => {
                          setDescription(!description);
                        }}
                      >
                        {description ? "скрыть" : "далее..."}
                      </button>
                    </h3>
                  </div>
                  <div className="countBtns">
                    <button
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    >
                      +
                    </button>
                    <h3>{counter}</h3>
                    <button
                      onClick={() => {
                        if (counter > 1) {
                          setCounter(counter - 1);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      getOrder(el);
                    }}
                  >
                    Заказать сейчас
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetals;
