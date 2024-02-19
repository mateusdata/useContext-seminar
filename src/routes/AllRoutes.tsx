import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import Home from "../pages/Home";
import Login from "../pages/Login";


const AllRoutes = () => {

   /*function Private({ children }: any) {
        const { loading, authenticated } = useContext(ContextAuth);
        if (loading) {
            return <Spin size="large" delay={0} />
        }
        if (!authenticated) {
            return <Navigate to={"/login"} />
        }
        return children
    }*/
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={  <Home /> } />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </BrowserRouter>
    );
};
export default AllRoutes;