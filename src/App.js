import { useState } from "react";
import Footer from "./companents/Footer";
import Header from "./companents/Header";
import Home from "./companents/pages/Home";
import Search from "./companents/Search";
import { Route, Routes } from "react-router-dom";
import Admin from "./companents/Admin";
import BookDetals from "./companents/BookDetals";
import Order from "./companents/Order";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Header setValue={setValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search nameBooks={value} />} />
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/book-detals/:bookId" element={<BookDetals/>}/>
        <Route path="/order" element={<Order/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
