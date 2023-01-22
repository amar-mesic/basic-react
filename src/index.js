'use strict';

import MainComponent from "./components/MainComponent";
import NavBar from "./components/NavBar";
import React from "react";
import ReactDOM from 'react-dom/client';
import ReactFacts from "./components/ReactFacts";
import Footing from "./components/Footing";
import 'normalize.css'
import './main.css'


const headerDOM = ReactDOM.createRoot(document.getElementById('header'))
headerDOM.render(
  <NavBar />
)

const mainDom = ReactDOM.createRoot(document.getElementById('main'))
mainDom.render(
  <>
    <MainComponent />
    <ReactFacts />
  </>
)

const footDOM = ReactDOM.createRoot(document.getElementById('footer'))
footDOM.render(
  <Footing />
)