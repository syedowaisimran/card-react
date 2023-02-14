// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  var obj = [
    {
      Title: "ABC",
      description: "this is a first example",
      price: 400,
      img: "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg",
    },
    {
      Title: "ABC",
      description: "this is a second example",
      price: 400,
      img: "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg",
    },
    {
      Title: "ABC",
      description: "this is a third example",
      price: 400,
      img: "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg",
    },
    {
      Title: "ABC",
      description: "this is a fourth example",
      price: 400,
      img: "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg",
    },
    {
      Title: "ABC",
      description: "this is a fifth example",
      price: 400,
      img: "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg",
    },
    {
      Title: "ABC",
      description: "this is a fifth example",
      price: 400,
      img: "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg",
    },
  ];

  return (
    <div className="row">
      {obj.map((e, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="shadow p-2 rounded">
              <div>
                <img src={e.img} alt="sadsad" width="100%" />
              </div>
              <div>
                <h1>{e.Title}</h1>
                <p>{e.description}</p>
                <button>{e.price}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
