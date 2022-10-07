import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom"
import Layout from "./layout"
import "./App.css"
import "./assets/var.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';

const Home = lazy(() => import("./pages/home/home"))
const About = lazy(() => import("./pages/about/about"))
const Services = lazy(() => import("./pages/services/services"))
const Blogs = lazy(() => import("./pages/blogs/blogs"))
const Teams = lazy(() => import("./pages/teams/teams"))

function App(props) {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
                <Route path='/about' element={<Layout><About/></Layout>}/>
                <Route path='/services' element={<Layout><Services/></Layout>}/>
                <Route path='/blogs' element={<Layout><Blogs/></Layout>}/>
                <Route path='/team' element={<Layout><Teams/></Layout>}/>
            </Routes>
        </div>
    );
}

export default App;
