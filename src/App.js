import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom"
import Layout from "./layout"
import "./App.css"
import "./assets/var.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import Admin from "./components/admin/admin";
import RequireAuth from "./utils/functions/requireAuth";

const Home = lazy(() => import("./pages/home/home"))
const About = lazy(() => import("./pages/about/about"))
const Services = lazy(() => import("./pages/services/services"))
const Blogs = lazy(() => import("./pages/blogs/blogs"))
const Teams = lazy(() => import("./pages/teams/teams"))
const Contact = lazy(() => import("./pages/contact/contact"))
const Help = lazy(() => import("./pages/help/help"))
const Auth = lazy(() => import("./pages/auth/auth"))
const Articles = lazy(() => import("./pages/articles/articles/articles"))
const Article = lazy(() => import("./pages/articles/article/article"))

function App(props) {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
                <Route path='/about' element={<Layout><About/></Layout>}/>
                <Route path='/services' element={<Layout><Services/></Layout>}/>
                <Route path='/blogs' element={<Layout><Blogs/></Layout>}/>
                <Route path='/team' element={<Layout><Teams/></Layout>}/>
                <Route path='/contact' element={<Layout><Contact/></Layout>}/>
                <Route path='/help' element={<Layout><Help/></Layout>}/>
                <Route path='/login' element={<Auth/>}/>
                <Route path='/articles' element={
                    <RequireAuth>
                        <Admin>
                            <Articles/>
                        </Admin>
                </RequireAuth>
                }/>
                <Route path='/articles/:id' element={
                    <RequireAuth>
                        <Admin>
                            <Article/>
                        </Admin>
                </RequireAuth>
                }/>
            </Routes>
        </div>
    );
}

export default App;
