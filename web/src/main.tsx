import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RoutesApp } from "./RoutesApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RoutesApp />
    </React.StrictMode>
);
