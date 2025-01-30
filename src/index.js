import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root")); // Use createRoot

root.render(<App />);
