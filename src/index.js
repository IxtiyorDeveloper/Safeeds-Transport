import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux"
import {QueryClient, QueryClientProvider} from 'react-query'
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Fallback from "./components/fallback/fallback";

const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: 1}},
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Suspense fallback={<Fallback/>}>
        <BrowserRouter>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App/>
                    <ToastContainer/>
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
