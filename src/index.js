import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { SobreMi } from "./components/SobreMi";

const app = document.getElementById("app");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='sobre-mi' element={<SobreMi/>}/>
        </Routes>
    </BrowserRouter>
, app);