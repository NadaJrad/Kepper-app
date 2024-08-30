import React from "react";
import ReactDOM from "react-dom";
import Header from "../my-app/component/Header";
import Footer from "../my-app/component/Footer";
import Note from "../my-app/component/Note";

ReactDOM.render(
  <div>
    <Header />
    <Footer />
    <Note />
  </div>,
  document.getElementById("root")
);
