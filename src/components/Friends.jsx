import profil from "../data/profil"
import compts from "../data/compts_utilisateur"
import "../styles/friends.css"
import threeDots from "../assets/icons/threeDots.png";
import threeDots_n from "../assets/icons/threeDots_n.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Friends() {
    let getCompte = id => compts.find(c => c.id == id)
    const dark = useSelector(state => state.mode.darkMode)
    const [filter, setFilter] = useState('')
    return (
        <div className="m-4">
            <input placeholder="Chercher un ami ..." onChange={(e) => setFilter(e.target.value.trim().toLowerCase())} className="w-100 bar-filter-friends" />
            <hr />
            <div className="row">
                {
                    profil.friends_ids.map(id => {
                        let compte = getCompte(id)
                        if (`${compte.fname} ${compte.lname}`.toLowerCase().indexOf(filter) != -1) {
                            return (
                                <div className="friends_div col-6 " key={compte.id}>
                                    <div className="m-2 cntncD bg-white p-2">
                                        <img className="profile_friends me-3 m-auto" src={compte.profil} />
                                        <Link to={compte.id}>{`${compte.fname} ${compte.lname}`}</Link>
                                        <img src={dark ? threeDots_n : threeDots} className="threeDots_ pointer" />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )


}
export default Friends