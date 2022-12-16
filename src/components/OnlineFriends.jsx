import React, { useState } from "react";
import icon_settings from "../assets/icons/settings.png";
import icon_chatt from "../assets/icons/icon_chatt.png";
import online_friends from "../data/online_friends";
import compts from "../data/compts_utilisateur";
import "../styles/online_friends.css"
import { Link } from "react-router-dom";
function SettingOnlineFriends(props) {
    return (
        <div className="setting_online_friends">
            <div className="item hide-item text-center" onClick={() => props.hideOnlineFriends(false)}><label>Masquer les amis en ligne</label></div>
        </div>
    )
}
function OnlineFriends(props) {
    const [setting_online_friends, setSetting_online_friends] = useState(false);
    function get_owner(id) {
        const compte = compts.find(c => c.id === id)
        return (
            <div className="compte_online_friends">
                <img className="profile" src={compte.profil} alt="profile"/>
                <Link to={`/utilisateurs/friends/${compte.id}`}>{`${compte.fname} ${compte.lname}`}</Link>
                <Link to={`/utilisateurs/messages/${compte.id}`}><img className="chatt" src={icon_chatt} alt="icon" /></Link>
            </div>
        )
    }
    return (
        <>
            <div className="online_friends mt-3">
                <div className="head_online_friends">
                    <div className="head_online_friends_cnt">
                        <h4>Amis en ligne:</h4><img onClick={() => setSetting_online_friends(!setting_online_friends)} className="icon_settings" src={icon_settings} alt="profile" />
                    </div>
                    {setting_online_friends && <SettingOnlineFriends hideOnlineFriends={props.hideOnlineFriends} />}
                </div>
                <div className="body_online_friends">
                    {
                        online_friends.map(id => {
                            return (
                                <div key={id}>
                                    {get_owner(id)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OnlineFriends