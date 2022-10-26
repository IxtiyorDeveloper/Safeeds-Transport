import React, {lazy} from 'react';
import {Navigate, Route, Routes} from "react-router-dom"
import Layout from "./layout"
import "./App.css"
import "./assets/var.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Admin from "./components/admin/admin";
import RequireAuth from "./utils/functions/requireAuth";
import {useSelector} from "react-redux";
import {_getMe} from "./redux";

const Home = lazy(() => import("./pages/home/home"))
const About = lazy(() => import("./pages/about/about"))
const Services = lazy(() => import("./pages/services/services"))
const Blogs = lazy(() => import("./pages/blogs/blogs"))
const Blog = lazy(() => import("./pages/blog/blog"))
const Teams = lazy(() => import("./pages/teams/teams"))
const Contact = lazy(() => import("./pages/contact/contact"))
const Help = lazy(() => import("./pages/help/help"))
const Auth = lazy(() => import("./pages/auth/auth"))
const Articles = lazy(() => import("./pages/articles/articles/articles"))
const Article = lazy(() => import("./pages/articles/article/article"))
const Quote = lazy(() => import("./pages/quote/quote"))
const CreateArticle = lazy(() => import("./pages/articles/create-article/create-article"))
const Team = lazy(() => import("./pages/team/team"))
const ResetPassword = lazy(() => import("./pages/reset-password/reset-password"))
const SatisfiedCustomers = lazy(() =>
    import("./pages/satisfied-customers/satisfied-customers/satisfied-customers")
)
const SatisfiedCustomer = lazy(() =>
    import("./pages/satisfied-customers/satisfied-customer/satisfied-customer")
)
const CreateSatisfiedCustomer = lazy(() =>
    import("./pages/satisfied-customers/create-satisfied-customer/create-satisfied-customer")
)
const SuccessPage = lazy(() =>
    import("./components/quote-sections/success-page/success-page")
)

function App(props) {

    const user = useSelector(_getMe)

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home/></Layout>}/>
                <Route path='/about' element={<Layout><About/></Layout>}/>
                <Route path='/services' element={<Layout><Services/></Layout>}/>
                <Route path='/blogs' element={<Layout><Blogs/></Layout>}/>
                <Route path='/blogs/:id' element={<Layout><Blog/></Layout>}/>
                <Route path='/team' element={<Layout><Teams/></Layout>}/>
                <Route path='/contact' element={<Layout><Contact/></Layout>}/>
                <Route path='/help' element={<Layout><Help/></Layout>}/>
                <Route path='/terms-and-conditions' element={<Layout><Help/></Layout>}/>
                <Route path='/quote' element={<Layout><Quote/></Layout>}/>
                <Route path='/success' element={<Layout><SuccessPage/></Layout>}/>
                <Route path='/team/:id' element={<Layout><Team/></Layout>}/>
                <Route path='/login' element={user ? <Navigate to="/articles"/> : <Auth/>}/>
                <Route path='/reset-password' element={<ResetPassword/>}/>
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
                <Route path='/articles/create' element={
                    <RequireAuth>
                        <Admin>
                            <CreateArticle/>
                        </Admin>
                    </RequireAuth>
                }/>
                <Route path='/satisfied-customers' element={
                    <RequireAuth>
                        <Admin>
                            <SatisfiedCustomers/>
                        </Admin>
                    </RequireAuth>
                }/>
                <Route path='/satisfied-customers/:id' element={
                    <RequireAuth>
                        <Admin>
                            <SatisfiedCustomer/>
                        </Admin>
                    </RequireAuth>
                }/>
                <Route path='/satisfied-customers/create' element={
                    <RequireAuth>
                        <Admin>
                            <CreateSatisfiedCustomer/>
                        </Admin>
                    </RequireAuth>
                }/>
            </Routes>
        </div>
    );
}

export default App;
