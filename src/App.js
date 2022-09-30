import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom"
import Layout from "./layout"
import "./App.css"
import "./assets/var.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = lazy(() => import("./components/pages/home/home"))

function App(props) {


    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
            </Routes>
        </div>
    );
}

export default App;
