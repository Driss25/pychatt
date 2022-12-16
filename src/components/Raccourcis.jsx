import React, { useState } from "react";
import icon_settings from "../assets/icons/settings.png";
import icon_galerie from "../assets/icons/galerie.png";
import icon_ajouterPublication from "../assets/icons/ajouterPublication.png";
import icon_ajouterAmi from "../assets/icons/ajouterAmi.png";
import icon_messageDeGroupe from "../assets/icons/messageDeGroupe.png";
import icon_modeNuit from "../assets/icons/modeNuit.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMode } from "../redux/modeSlice";
import '../styles/raccourcis.css';

function Raccourcis(props) {
    const dispatch = useDispatch()
    const [setting_raccourcis, setSetting_raccourcis] = useState(false);
    const [galerie, setGalerie] = useState(true)
    const [ajouterPublication, setAjouterPublication] = useState(true)
    const [ajouterAmi, setAjouterAmi] = useState(true)
    const [messageDeGroupe, setMessageDeGroupe] = useState(true)
    const [modeNuit, setModeNuit] = useState(true)
    function SettingRaccourcis() {
        function convert_name_to_id(name) {
            let result = '';
            for (let i = 0; i < name.length; i++) {
                if (name[i] === ' ') {
                    continue
                }
                result += name[i].toLowerCase()
            }
            return result
        }
        const lable = (b) => {
            return (
                <div className="item" >
                    <label htmlFor={convert_name_to_id(b.name)}>
                        <input type="checkbox" defaultChecked={b.change} id={convert_name_to_id(b.name)} onChange={() => b.onChange(!b.change)} />
                        {b.name}
                    </label>
                </div>
            )
        }
        return (
            <div className="setting_raccourcis">
                {lable({ name: "Galerie", onChange: setGalerie, change: galerie })}
                {lable({ name: "Ajouter publication", onChange: setAjouterPublication, change: ajouterPublication })}
                {lable({ name: "Ajouter ami", onChange: setAjouterAmi, change: ajouterAmi })}
                {lable({ name: "Message de groupe", onChange: setMessageDeGroupe, change: messageDeGroupe })}
                {lable({ name: "Mode nuit", onChange: setModeNuit, change: modeNuit })}
                <div className="item hide-item text-center" onClick={() => props.hideRaccourcis(false)}><label>Masquer les raccourcis</label></div>
            </div>
        )
    }
    return (
        <>
            <div className="raccourcis mt-3">
                <div className="head_raccourcis">
                    <div className="head_raccourcis_cnt">
                        <h4>Raccourcis:</h4><img alt="icon" onClick={() => setSetting_raccourcis(!setting_raccourcis)} className="icon_settings_raccourcis" src={icon_settings} />
                    </div>
                    {setting_raccourcis && <SettingRaccourcis />}
                </div>
                <div className="body_raccourcis">
                    {galerie && <Link to={"/utilisateurs/gallery"}><div className="racc" ><img alt="icon" src={icon_galerie} />Galerie</div></Link>}
                    {ajouterPublication && <Link to={"/utilisateurs/addPub"}><div className="racc" ><img alt="icon" src={icon_ajouterPublication} />Ajouter publication</div></Link>}
                    {ajouterAmi && <Link to={"/utilisateurs/friends"}><div className="racc" ><img alt="icon" src={icon_ajouterAmi} />Ajouter ami</div></Link>}
                    {messageDeGroupe && <Link to="/utilisateurs/msgGroup"><div className="racc" ><img alt="icon" src={icon_messageDeGroupe} />Message de groupe</div></Link>}
                    {modeNuit && <div className="racc" onClick={() => dispatch(changeMode())} ><img alt="icon" src={icon_modeNuit} />Mode nuit</div>}
                </div>
            </div>
        </>
    )
}

export default Raccourcis
