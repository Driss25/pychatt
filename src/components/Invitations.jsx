import React, { useState } from "react";
import invitations from "../data/invitations";
import compts from "../data/compts_utilisateur";
import icon_acceptance from "../assets/icons/icon_acceptance.png";
import icon_rejection from "../assets/icons/icon_rejection.png";
import icon_settings from "../assets/icons/settings.png";
import "../styles/invitations.css"
function SettingInvitations(props) {
    return (
        <div className="setting_invitations">
            <div className="item hide-item text-center" onClick={() => props.hideInvitations(false)}>
                <label>Masquer les invitations</label>
            </div>
        </div>
    )
}
function Invitations(props) {
    const [setting_Invitations, setSetting__Invitations] = useState(false);
    function get_owner(id) {
        const compte = compts.find(c => c.id === id)
        return (
            <div className="compte_invitations">
                <img className="profile" src={compte.profil} alt="icon" />
                <a href="/">{`${compte.fname} ${compte.lname}`}</a>
                <img onClick={(e) => e.target.parentElement.remove()} className="icon_acceptance" src={icon_acceptance} alt="icon" />
                <img onClick={(e) => e.target.parentElement.remove()} className="icon_rejection" src={icon_rejection} alt="icon" />
            </div>
        )
    }
    return (
        <>
            <div className="invitations mt-3">
                <div className="head_invitations">
                    <div className="head_invitations_cnt">
                        <h4>Invitations:</h4><img onClick={() => setSetting__Invitations(!setting_Invitations)} className="icon_settings" src={icon_settings} alt="icon" />
                    </div>
                    {setting_Invitations && <SettingInvitations hideInvitations={props.hideInvitations} />}
                </div>
                <div className="body_invitations">
                    {
                        invitations.map(id => {
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
export default Invitations



