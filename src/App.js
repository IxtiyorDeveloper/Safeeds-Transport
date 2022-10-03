import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom"
import Layout from "./layout"
import "./App.css"
import "./assets/var.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';

const Home = lazy(() => import("./components/pages/home/home"))
const About = lazy(() => import("./components/pages/about/about"))

function App(props) {


    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
                <Route path='/about' element={<Layout><About/></Layout>}/>
            </Routes>
        </div>
    );
}

export default App;
