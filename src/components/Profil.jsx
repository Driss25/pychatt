import React, { useEffect, useRef, useState } from "react";
import profil from "../data/profil";
import Publications from "./Publications";
import publications from "../data/publications";
import icon_modifierMonProfil from "../assets/icons/icon_modifierMonProfil.png";
import icon_partager from "../assets/icons/icon_partager.png";
import { Link } from "react-router-dom"
import "../styles/profil.css"
function Profil() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [menu1, setMenu1] = useState("all");
    const [menu2, setMenu2] = useState("all");
    const [my_publications] = useState(publications.filter(pub => pub.owner_id === profil.id));
    const [profil_loclal, setProfil_loclal] = useState(profil);
    const [form_modify_info, setForm_modify_info] = useState(false);
    const fname = useRef()
    const lname = useRef()
    const email = useRef()
    const day = useRef()
    const month = useRef()
    const year = useRef()
    const genre_homme = useRef()
    function save_modifications() {
        const new_profil_loclal = { ...profil_loclal }
        new_profil_loclal.fname = fname.current.value
        new_profil_loclal.lname = lname.current.value
        new_profil_loclal.email = email.current.value
        new_profil_loclal.dateDeNaissance = `${day.current.value}/${month.current.value}/${year.current.value}`
        new_profil_loclal.genre = genre_homme.current.checked ? 'Homme' : 'Femme'
        setProfil_loclal(new_profil_loclal)
        setForm_modify_info(false)
    }
    function FormInfo() {
        return (
            <div>
                <table className="Form_info">
                    <tbody>
                        <tr><th><label htmlFor="fname_f">Prénom :</label></th><td><input id="fname_f" type="text" ref={fname} defaultValue={profil_loclal.fname} /></td></tr>
                        <tr><th><label htmlFor="lname_f">Nom :</label></th><td><input id="lname_f" type="text" ref={lname} defaultValue={profil_loclal.lname} /></td></tr>
                        <tr><th><label htmlFor="email_f">Email :</label></th><td><input id="email_f" type="text" ref={email} defaultValue={profil_loclal.email} /></td></tr>
                        <tr><th><label htmlFor="dateDeNaissance_f">Date de naissance :</label></th>
                            <td className="row">
                                <div className="col" ><input type="number" placeholder="le jour" min="1" max="31" defaultValue={profil_loclal.dateDeNaissance.split('/')[0]} ref={day} /></div>
                                <div className="col" ><input type="number" placeholder="le mois" min="1" max="12" defaultValue={profil_loclal.dateDeNaissance.split('/')[1]} ref={month} /></div>
                                <div className="col" ><input type="number" placeholder="l'année" min="1920" max="2010" defaultValue={profil_loclal.dateDeNaissance.split('/')[2]} ref={year} /></div>
                            </td></tr>
                        <tr ><th >Genre :</th>
                            <td className="row genre mt-2">
                                <div className="col text-center">
                                    <input type="radio" id="homme" autoComplete="off" className="btn-check" name="genre" ref={genre_homme} defaultChecked={profil_loclal.genre === "Homme" ? true : false} />
                                    <label className="btn btn-outline-secondary" htmlFor="homme">Homme</label>
                                </div>
                                <div className="col text-center">
                                    <input type="radio" id="femme" autoComplete="off" className="btn-check" name="genre" defaultChecked={profil_loclal.genre === "Femme" ? true : false} />
                                    <label className="btn btn-outline-secondary" htmlFor="femme">Femme</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button className="btn btn-success fs-3 fw-semibold  mt-3" onClick={save_modifications}>Enregistrer les modifications</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    function my_publications_filtered() {
        let result = my_publications
        if (menu1 === "picture") {
            result = my_publications.filter(pub => pub.type === "picture")
        } else if (menu1 === "video") {
            result = my_publications.filter(pub => pub.type === "video")
        } else if (menu1 === "audio") {
            result = my_publications.filter(pub => pub.type === "audio")
        }
        if (menu2 === "public") {
            result = result.filter(pub => pub.spectateurs === "public")
        } else if (menu2 === "private") {
            result = result.filter(pub => pub.spectateurs === "private")
        } else if (menu2 === "friends") {
            result = result.filter(pub => pub.spectateurs === "friends")
        }
        return result
    }
    return (
        <>
            <div className="bg-white div-profile mt-3">
                <div className="my_profile">
                    <img className="profile_img" src={profil_loclal.profil} alt='profile' />
                    <div className="info">
                        <h2 className="fw-bolder">{`${profil_loclal.fname} ${profil_loclal.lname}`}</h2>
                        <h3><Link to="/utilisateurs/friends">{profil_loclal.friends} amis</Link></h3><br />
                        <span className="modifierMonProfil pointer" onClick={() => setForm_modify_info(!form_modify_info)}>
                            <img src={icon_modifierMonProfil} alt="icon" />
                            <span>{form_modify_info ? "Annuler les modifications" : "Modifier mon profil"}</span>
                        </span>
                    </div>
                    <div className="partager_ pointer">
                        <img src={icon_partager} alt="icon" />
                        Partager
                    </div>
                </div>
                {form_modify_info && <FormInfo />}
                <div className="row menu mt-5">
                    <span className="col">Filter 1 = </span>
                    <div onClick={() => setMenu1('all')} className={"col pointer border-end border-start border-2 border-dark " + (menu1 === "all" ? "active" : null)}>Tout</div>
                    <div onClick={() => setMenu1('picture')} className={"col pointer border-end border-2 border-dark " + (menu1 === "picture" ? "active" : null)}>Photos</div>
                    <div onClick={() => setMenu1('video')} className={"col pointer border-end border-2 border-dark " + (menu1 === "video" ? "active" : null)}>Videos</div>
                    <div onClick={() => setMenu1('audio')} className={"col pointer " + (menu1 === "audio" ? "active" : null)}>Audios</div>
                </div>
                <div className="row menu menu2">
                    <span className="col">Filter 2  = </span>
                    <div onClick={() => setMenu2('all')} className={"col pointer border-end  border-start border-2 border-dark " + (menu2 === "all" ? "active" : null)}>Tout</div>
                    <div onClick={() => setMenu2('public')} className={"col pointer border-end border-2 border-dark " + (menu2 === "public" ? "active" : null)}>Publique</div>
                    <div onClick={() => setMenu2('private')} className={"col pointer border-end border-2 border-dark " + (menu2 === "private" ? "active" : null)}>Privé</div>
                    <div onClick={() => setMenu2('friends')} className={"col pointer " + (menu2 === "friends" ? "active" : null)}>Amies</div>
                </div>
            </div>
            <Publications data_publications={my_publications_filtered()} />
        </>
    )
}

export default Profil

