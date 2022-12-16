import React, { useEffect, useRef, useState } from "react";
import adminProfil from "../data/adminProfil";
import icon_modifierMonProfil from "../assets/icons/icon_modifierMonProfil.png";
import "../styles/adminProfil.css"
function AdminProfile() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [profil_loclal, setProfil_loclal] = useState(adminProfil);
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
                                <button className="btn btn-success fs-3 fw-semibold mt-3" onClick={save_modifications}>Enregistrer les modifications</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <>
            <div className="bg-white div-profile mt-3">
                <div className="my_profile">
                    <img alt="profile" className="profile_img_admin" src={profil_loclal.profil} />
                    <div className="info">
                        <h2 className="fw-bolder">{`${profil_loclal.fname} ${profil_loclal.lname}`}</h2><br />
                        <span className="modifierMonProfil pointer" onClick={() => setForm_modify_info(!form_modify_info)}>
                            <img alt="icon" src={icon_modifierMonProfil} />
                            <span>{form_modify_info ? "Annuler les modifications" : "Modifier mon profil"}</span>
                        </span>
                    </div>
                </div>
                {form_modify_info && <FormInfo />}
            </div>
        </>
    )
}

export default AdminProfile

