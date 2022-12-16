import React from "react";
import profil from "../data/profil"
import compts from "../data/compts_utilisateur"
import chatts from "../assets/icons/icon_chatt_dark.png"
import chatts_n from "../assets/icons/icon_chatt.png"
import messages from "../data/messages";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/messages.css"

function Messages() {
    const dark = useSelector(state => state.mode.darkMode)
    const getLastMessage = id => {
        const msgWithThisCompte = messages.filter(m => {
            return (
                (m.id_sender === profil.id && m.id_receiver === id) ||
                (m.id_receiver === profil.id && m.id_sender === id)
            )
        })
        if (msgWithThisCompte.length) {
            if (msgWithThisCompte.at(-1).id_sender === profil.id) {
                return <p className="last-msg"><span className="fw-bold">Vous : </span>{msgWithThisCompte.at(-1).content}</p>
            } else {
                return <p className="last-msg text-primary">{msgWithThisCompte.at(-1).content}</p>
            }
        }
    }
    return (
        <div className="messages">
            {
                profil.friends_ids.map(id => {
                    const compte = compts.find(c => c.id === id)
                    return (
                        <Link to={"/utilisateurs/messages/" + compte.id} className="link-divv" key={compte.id}>
                            <div className="divFCon p-2 bg-white mt-4" >
                                <img src={compte.profil} className="profilee" alt='profile' />
                                <div className="fleexDiv">
                                    <span className="spn" to={"/utilisateurs/friends/" + compte.id} >{compte.fname + ' ' + compte.lname}</span><br />
                                    {getLastMessage(compte.id)}
                                </div>
                                <img src={dark ? chatts_n : chatts} className="chatts pointer" alt='icon'/>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Messages