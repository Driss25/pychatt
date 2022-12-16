import React, { useEffect, useState } from 'react';
import InterfaceUtilisateurs from './InterfaceUtilisateurs';
import InterfaceAdministrateurs from './InterfaceAdministrateurs';
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css";

function App() {
    const [location3, setLocation3] = useState("");
    const { pathname } = useLocation();
    useEffect(() => {
        setLocation3(pathname)
    },
        [pathname]);
    return (
        <div id='app' className='container'>
            <div id='interface' className="row w-100 text-white text-center" >
                <div className='col p-0'>
                    <Link to='/utilisateurs'><h2 className={location3.indexOf("utilisateurs") !== -1 ? 'active' : ""}>Interface utilisateurs</h2></Link>
                </div>
                <div className='col p-0'>
                    <Link to='/administrateurs'><h2 className={location3.indexOf("administrateurs") !== -1 ? 'active' : ""}>Interface administrateurs</h2></Link>
                </div>
            </div>
            <div >
                <Routes>
                    <Route path='utilisateurs/*' element={<InterfaceUtilisateurs />} />
                    <Route path='administrateurs/*' element={<InterfaceAdministrateurs />} />
                    <Route path='*' element={<Navigate to='/utilisateurs/*' />} />
                </Routes>
            </div>
        </div>
    )
}
export default App