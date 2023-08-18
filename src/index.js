import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Education from "./component/category/education/Education";
import Life from "./component/category/life/Life";
import CurrentEvents from "./component/category/current_events/CurrentEvents";
import Detail from "./component/detail/Detail";
import Left from "./component/Items/Left";
import Home from "./component/category/home/Home";
import {appRouter} from "./component/router";
import {RouterProvider} from "react-router-dom";
import Travel from "./component/category/travel/Travel";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <RouterProvider router={appRouter}>
      </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
