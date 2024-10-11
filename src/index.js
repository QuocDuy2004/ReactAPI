import React, { Suspense,useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Thay đổi từ HashRouter thành BrowserRouter
import reportWebVitals from "./reportWebVitals";
import Spinner from "./views/Spinner/Spinner";
import axios from 'axios'; // Thêm dòng này

const root = ReactDOM.createRoot(document.getElementById("root"));

const setupAxiosCSRFToken = () => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (csrfToken) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  }
};

setupAxiosCSRFToken();
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
