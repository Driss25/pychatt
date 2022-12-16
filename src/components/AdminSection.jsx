import React, {useEffect} from "react";
import AdminProfile from "./AdminProfile"
import AdminComplaints from "./AdminComplaints"
import AdminUsers from "./AdminUsers"
import AdminAdmins from "./AdminAdmins"
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

function Section(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        props.setLocation(pathname)
    },
        [pathname, props]);
    return (
        <section className="col-10" style={{ backgroundColor: "#D6D6D6" }}>
            <Routes>
                <Route path="profile" element={<AdminProfile />} />
                <Route path="complaints" element={<AdminComplaints />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="admins" element={<AdminAdmins />} />
                <Route path="/*" element={<Navigate to="profile" />} />
            </Routes>
        </section>
    )
}
export default Section
