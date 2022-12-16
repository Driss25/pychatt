import React from "react";
import "../styles/adminNavbar.css";
import logo from "../assets/logo.png";
//import normal icon
import icon_adminProfi from "../assets/icons/adminProfi.png";
import icon_adminPlaintes from "../assets/icons/adminPlaintes.png";
import icon_adminUtilisateurs from "../assets/icons/adminUtilisateurs.png";
import icon_adminAdmins from "../assets/icons/adminAdmins.png";
import icon_adminLogOut from "../assets/icons/adminLogOut.png";
//import dark icon
import icon_adminProfiDark from "../assets/icons/adminProfiDark.png";
import icon_adminPlaintesDark from "../assets/icons/adminPlaintesDark.png";
import icon_adminUtilisateursDark from "../assets/icons/adminUtilisateursDark.png";
import icon_adminAdminsDark from "../assets/icons/adminAdminsDark.png";
import { Link } from "react-router-dom";
function AdminNavbar(props) {
    const menu = [
        { li: "Profil", to: 'profile', icon: icon_adminProfi, icon_dark: icon_adminProfiDark },
        { li: "Plaintes", to: 'complaints', icon: icon_adminPlaintes, icon_dark: icon_adminPlaintesDark },
        { li: "Utilisateurs", to: 'users', icon: icon_adminUtilisateurs, icon_dark: icon_adminUtilisateursDark },
        { li: "Admins", to: 'admins', icon: icon_adminAdmins, icon_dark: icon_adminAdminsDark },
    ];
    return (
        <nav className="col-2">
            <div id="myNav">
                <div className="row mt-3 m-auto">
                    <div className="col text-center">
                        <img id="logo" className="m-auto" alt="icon" src={logo} />
                    </div>
                    <ul className="list-unstyled pt-5">
                        {
                            menu.map(obj => {
                                return (
                                    <Link to={obj.to} key={obj.li}>
                                        <li
                                            className={props.location.indexOf(obj.to) !== -1 ? "active" : ""} >
                                            <img alt="icon" className="icon" src={props.location.indexOf(obj.to) !== -1 ? obj.icon_dark : obj.icon} />
                                            {obj.li}
                                        </li>
                                    </Link>
                                )
                            })
                        }
                        <li id="logout"><img alt="icon" className="icon" src={icon_adminLogOut} />Log out</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default AdminNavbar

