import React from "react";
import notifications from "../data/notifications";
import threeDots from "../assets/icons/threeDots.png";
import threeDots_n from "../assets/icons/threeDots_n.png";
import compts from "../data/compts_utilisateur";
import { Link, } from "react-router-dom"
import { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/notifications.css"
function Notifications() {
    const [filter, setFilter] = useState(0);
    const [notifications_, setNotifications_] = useState(notifications);
    const dark = useSelector(state => state.mode.darkMode)
    const getOwner = id => {
        return compts.find(c => c.id === id)
    }
    const filterNTF = n => {
        let copy;
        if (n) {
            copy = notifications_.filter(not => !not.readable)
            setNotifications_(copy)
        } else {
            setNotifications_(notifications)
        }
        setFilter(n)
    }
    const readAll = () => {
        let copy = [];
        for (let i of notifications_) {
            copy.push({ ...i, readable: 1 })
        }
        setNotifications_(copy)
    }
    return (
        <div className="notifications bg-white m-2 mt-3 p-2">
            <div className="row headRR fs-2 text-center fw-bolder">
                <div className="col">
                    <div className={filter ? "rr_ pointer" : "rr_ pointer active"} onClick={() => filterNTF(0)}>Tout</div>
                </div>
                <div className="col">
                    <div className={filter ? "pointer active" : "pointer "} onClick={() => filterNTF(1)}>Non lu</div>
                </div>
            </div>
            <span className="voirT pointer mt-1 rounded" onClick={readAll}>Voir tout</span>
            <br />
            {
                notifications_.map(not => {
                    const compte = getOwner(not.id_owner)
                    return (
                        <div className={not.readable ? "ntf mt-4 p-2" : "ntf mt-4 p-2 unread"} key={not.id}>
                            <img src={compte.profil} className="prfffl" alt="porfile" />
                            <div className="inff">
                                <p className="mb-2 fs-4">
                                    <Link to={'/utilisateurs/friends/' + compte.id}
                                        className="fw-bold me-2 text-decoration-none text-dark proffill">
                                        {compte.fname + ' ' + compte.lname}</Link>{not.content}</p>
                                <p>{not.date}</p>
                                <img src={dark ? threeDots_n :threeDots} className="pointer threeDotsNFT" alt="icon" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notifications

