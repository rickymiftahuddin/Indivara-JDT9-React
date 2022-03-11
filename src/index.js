import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./hooks/useSM";
import reportWebVitals from "./reportWebVitals";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
