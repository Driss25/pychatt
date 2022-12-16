import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import logo_n from "../assets/logo_n.png";
//import normal icon
import icon_accueil from "../assets/icons/accueil.png";
import icon_profil from "../assets/icons/profil.png";
import icon_messages from "../assets/icons/messages.png";
import icon_amies from "../assets/icons/amies.png";
import icon_notifications from "../assets/icons/notifications.png";
import icon_plus from "../assets/icons/plus.png";
//import dark icon
import icon_accueil_dark from "../assets/icons/accueil-dark.png";
import icon_profil_dark from "../assets/icons/profil-dark.png";
import icon_messages_dark from "../assets/icons/messages-dark.png";
import icon_amies_dark from "../assets/icons/amies-dark.png";
import icon_notifications_dark from "../assets/icons/notifications-dark.png";
//import _n icons
import icon_accueil_n from "../assets/icons/accueil-dark_n.png";
import icon_profil_n from "../assets/icons/profil-dark_n.png";
import icon_messages_n from "../assets/icons/messages-dark_n.png";
import icon_amies_n from "../assets/icons/amies-dark_n.png";
import icon_notifications_n from "../assets/icons/notifications-dark_n.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar(props) {
    const dark = useSelector(state => state.mode.darkMode)
    const menu = [
        { li: "Accueil", to: 'home', icon: icon_accueil, icon_dark: icon_accueil_dark, icon_n: icon_accueil_n },
        { li: "Profil", to: 'profile', icon: icon_profil, icon_dark: icon_profil_dark, icon_n: icon_profil_n },
        { li: "Messages", to: 'messages', icon: icon_messages, icon_dark: icon_messages_dark, icon_n: icon_messages_n },
        { li: "Amies", to: 'friends', icon: icon_amies, icon_dark: icon_amies_dark, icon_n: icon_amies_n },
        { li: "Notifications", to: 'notifications', icon: icon_notifications, icon_dark: icon_notifications_dark, icon_n: icon_notifications_n },
    ];
    return (
        <nav className="col-2">
            <div id="myNav">
                <div className="row mt-3 m-auto">
                    <div className="col text-center">
                        <img id="logo" className="m-auto" src={dark ? logo_n : logo} />
                    </div>
                    <ul className="list-unstyled pt-5">
                        {
                            menu.map(obj => {
                                return (
                                    <Link to={obj.to} key={obj.li}>
                                        <li
                                            className={props.location.indexOf(obj.to) !== -1 ? "active" : ""}>
                                            <img className="icon" src={props.location.indexOf(obj.to) !== -1 ? dark ? obj.icon_n : obj.icon_dark : obj.icon} />
                                            {obj.li}
                                        </li>
                                    </Link>
                                )
                            })
                        }
                        <li id="plus"><img className="icon" src={icon_plus} />Plus</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

