import { createContext, useContext, useEffect, useState } from "react";

const useMainProduct = createContext();
export const useMainContext = () => useContext(useMainProduct);

const UseProduct = ({ children }) => {
  const [description, setDescription] = useState(false);
  const [counter, setCounter] = useState(1);
  const [order, setOrder] = useState(0);
  const [box, setBox] = useState([]);
  const [modal, setModal] = useState(false);
  const [book, setBook] = useState([]);
  const [detal, setDetal] = useState([]);



  useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("orders"));
    if (savedData) {
      setBox(savedData);
    }
    let saveCounter = JSON.parse(localStorage.getItem("counter"));
    if (saveCounter) {
      setOrder(saveCounter);
    }
  }, []);

  let values = {
    counter,
    setCounter,
    order,
    setOrder,
    modal,
    setModal,
    box,
    setBox,
    description,
    setDescription,
    book,
    setBook,
    detal,
    setDetal
  };

  return (
    <useMainProduct.Provider value={values}>{children}</useMainProduct.Provider>
  );
};

export default UseProduct;
