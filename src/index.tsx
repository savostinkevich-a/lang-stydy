import React from 'react';
import "./ship/styles/app.css"
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./ship/routes/AppRouter";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);