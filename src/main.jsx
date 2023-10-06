import React from "react";
import ReactDOM from "react-dom/client";
import '../src/assets/index.css'
import MainLayout from "./Layouts/MainLayout";
import { ContexProvider } from "./Context/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
    <ContexProvider>
        <MainLayout />

    </ContexProvider>
);
