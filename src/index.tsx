import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { ProductGridPage } from "./pages/ProductGridPage";
import { ProductTablePage } from "./pages/ProductTablePage";

export const Home = () => {

  const [styleBorder, setStyleBorder] = useState({});

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      setStyleBorder({
        boxShadow: "rgb(17 17 27 / 15%) 0px 2px 3px",
        width: "calc(100% + 60px",
        marginLeft: "-30px",
        marginRight: "-30px",
      });
    } else {
      setStyleBorder({
        boxShadow: "unset",
        width: "unset",
        marginLeft: "unset",
        marginRight: "unset",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product-list">
                      <Route path="grid" element={<ProductGridPage />}/>
                      <Route path="table" element={<ProductTablePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}


ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
);
