import {Outlet} from "react-router-dom";
import {useState} from "react";

function App() {
    if (JSON.parse(localStorage.getItem("viewedNews")) === null) {
        localStorage.setItem("viewedNews", JSON.stringify([]));
    }
    return (
        <div className="App">
            <Outlet/>
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center active"><i
                className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}

export default App;
