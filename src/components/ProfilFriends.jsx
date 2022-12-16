import { useParams, Link } from "react-router-dom"
import compts from "../data/compts_utilisateur"
import icon_partager from "../assets/icons/icon_partager.png";
import "../styles/profilFriends.css"
import Publications from "./Publications";
import publications from "../data/publications";
import { useEffect } from "react";

function ProfilFriends() {
    const { id } = useParams()
    const compte = compts.find(c => c.id === id)
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <div className="mt-3">
            <div className="profileFrPa bg-white">
                <div className="profileFr">
                    <img className="profile_img_fr" src={compte.profil} alt="profile" />
                    <div className="info">
                        <h2 className="fw-bolder">{`${compte.fname} ${compte.lname}`}</h2>
                        <h3>{compte.friends} amis</h3><br />
                        <Link to={"/utilisateurs/messages/" + id} className="btn btn-primary btn-lg me-3 fw-bold">Message</Link>
                        <button className="btn btn-danger disabled btn-lg fw-bold">Annuler l'amitié</button>
                    </div>
                    <div className="partager_f pointer">
                        <img src={icon_partager} alt="icon"/>
                        Partager
                    </div>
                </div>
            </div>
            <Publications data_publications={publications.filter(pub => pub.owner_id === compte.id)} />
        </div>
    )
}

export default ProfilFriends