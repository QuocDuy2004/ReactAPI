import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Thay đổi từ HashRouter thành BrowserRouter
import reportWebVitals from "./reportWebVitals";
import Spinner from "./views/Spinner/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <BrowserRouter> {/* Sử dụng BrowserRouter */}
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
