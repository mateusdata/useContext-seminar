import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import AuthProvider, { ContextAuth } from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";


const AllRoutes = () => {

    function Private({ children }: any) {
        const { loading, authenticated } = useContext(ContextAuth);
        if (loading) {
            return <Spin size="large" delay={0} />
        }
        if (!authenticated) {
            return <Navigate to={"/login"} />
        }
        return children
    }
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Private>  {String} <Home /> </Private>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
export default AllRoutes;