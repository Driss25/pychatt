import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSection from './AdminSection';


function InterfaceAdministrateurs() {
    const [location, setLocation] = useState("");
    return (
        <div className='row'>
            <AdminNavbar location={location}/>
            <AdminSection setLocation={new_path => setLocation(new_path)} />
        </div>
    )
}

export default InterfaceAdministrateurs