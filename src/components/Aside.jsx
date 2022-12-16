import React, { useState } from "react";
import "../styles/aside.css"
import Raccourcis from "./Raccourcis"
import OnlineFriends from "./OnlineFriends"
import Invitations from "./Invitations"

function Aside() {
    const [raccourcis_visible, setRaccourcis_visible] = useState(true)
    const [OnlineFriends_visible, setOnlineFriends_visible] = useState(true)
    const [invitations_visible, setInvitations_visible] = useState(true)
    return (
        <aside className="col-2">
            {raccourcis_visible && <Raccourcis hideRaccourcis={r => setRaccourcis_visible(r)} />}
            {OnlineFriends_visible && <OnlineFriends hideOnlineFriends={r => setOnlineFriends_visible(r)} />}
            {invitations_visible && <Invitations hideInvitations={r => setInvitations_visible(r)} />}
        </aside>
    )
}
export default Aside