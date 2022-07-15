import React, {ReactNode, useContext} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import {AuthContext} from "./context/AuthContext";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

function App() {

    const  value = useContext(AuthContext)
    const RequireAuth = ({children}: any) => {
        return Object.keys(value.state.currentUser).length>0 ? children : <Navigate to="/login" />
    }


    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <Search/>
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
