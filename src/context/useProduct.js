import { createContext, useContext, useState } from "react";

const useMainProduct = createContext();
export const useMainContext = () => useContext(useMainProduct);

const UseProduct = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [order , setOrder] = useState(0)

  let values = {
    counter,
    setCounter,
    order,
    setOrder
  };

  return (
    <useMainProduct.Provider value={values}>{children}</useMainProduct.Provider>
  );
};  

export default UseProduct;
