import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Join from "./Pages/Join";
import MyPage from "./Pages/MyPage";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/join" element={<Join/>} />
            <Route path="/mypage" element={<MyPage/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;