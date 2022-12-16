import React from "react";
import profil from "../assets/profiles/drissRaiss.png"
import ajouter_storie from "../assets/icons/ajouter_storie.png"
import ajouter_storie_n from "../assets/icons/ajouter_storie_n.png"
import stories from "../data/stories";
import compts from "../data/compts_utilisateur";
import "../styles/stories.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Stories() {
    const dark = useSelector(state => state.mode.darkMode)
    function get_owner(id_owner) {
        const compte = compts.find(compt => compt.id === id_owner)
        return (
            <div className="statu_owner" >
                <img src={compte.profil} />
                <Link to={`/utilisateurs/friends/${id_owner}`}>{`${compte.fname} ${compte.lname}`}</Link>
            </div>
        )
    }
    return (
        <div id="stories" className="rounded-4 mt-4 mb-4 p-2 bg-white">
            <h1 className="text-center">Stories:</h1>
            <div className="row m-1">
                <div className="col-3 statu_card border border-2 p-0 h-100" id="my_storie">
                    <div className="w-100 p-0 m-0">
                        <img className="w-100 h-75" src={profil} />
                        <img id='ajouter_storie' className="h-25" src={dark ? ajouter_storie_n : ajouter_storie} />
                    </div>
                </div>
                {
                    stories.map(s => {
                        return (
                            <div className="col-3 statu_card p-0" key={s.id}>
                                <div className="h-100">
                                    <img className="w-100 h-100" src={s.storie} />
                                    {get_owner(s.id_owner)}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stories