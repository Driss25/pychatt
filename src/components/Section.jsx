import React, {useEffect} from "react";
import Home from "./Home";
import Profil from "./Profil";
import Messages from "./Messages";
import Notifications from "./Notifications";
import BoxMessage from "./BoxMessage";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Friends from "./Friends";
import ProfilFriends from "./ProfilFriends";
import Gallery from "./Gallery";
import AddPub from "./AddPub";
import MsgGroup from "./MsgGroup";

function Section(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        props.setLocation(pathname)
    },[pathname, props]);
    return (
        <section className="col-8" style={{ backgroundColor: "#D6D6D6" }}>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profil />} />
                <Route path="messages" element={<Messages />} />
                <Route path="messages/:id" element={<BoxMessage />} />
                <Route path="friends" element={<Friends />} />
                <Route path="friends/:id" element={<ProfilFriends />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="addPub" element={<AddPub />} />
                <Route path="msgGroup" element={<MsgGroup />} />
                <Route path="/*" element={<Navigate to="home" />} />
            </Routes>
        </section>
    )
}
export default Section
