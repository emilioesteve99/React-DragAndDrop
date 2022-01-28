import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export const Home = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <h1>{'hola'}</h1>
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
