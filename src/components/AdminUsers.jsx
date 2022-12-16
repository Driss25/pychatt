import React, { useState } from "react";
import "../styles/adminUsers.css";
import icon_search from "../assets/icons/search.png"
import compts from "../data/compts_utilisateur"
import anonymous from "../assets/profiles/anonymous.png";

function AdminUsers() {
    const [resultAccounts, setResultAccounts] = useState(false);
    const [selectAccount, setSelectAccount] = useState({
        id: "----",
        fname: "----",
        lname: "----",
        email: "----",
        gender: "----",
        DOB: "----",
        profil: anonymous,
        friends: 0
    });
    const refrechResult = val => {
        val = val.trim()
        if (val === "") {
            return setResultAccounts(false)
        }
        setResultAccounts(compts.filter(c => `${c.fname} ${c.lname}`.toLowerCase().indexOf(val) !== -1))
    }
    const showResult = () => {
        if (resultAccounts === false) return <p>Tapez le nom du compte ci-dessus que vous souhaitez rechercher</p>
        if ((resultAccounts instanceof Array) && (resultAccounts.length === 0)) return <p>Il n'y a pas d'utilisateur avec ce nom</p>
        return (
            resultAccounts.map(compte => {
                return (
                    <div
                        className="friends_div_2 col-4 pointer"
                        key={compte.id}
                        onClick={() => { setSelectAccount(compts.find(acc => compte.id === acc.id)) }}
                    >
                        <div
                            className={selectAccount.id === compte.id ?"m-2 cntncD p-2 thisSelected" : "m-2 cntncD p-2"}
                        >
                            <img className="profile_friends_2 me-3 m-auto" src={compte.profil} alt="profile"/>
                            <span>{`${compte.fname} ${compte.lname}`}</span>
                        </div>
                    </div>
                )
            })
        )
    }
    const showSelectAccount = () => {
        return (
            <div className="cntnt_inf m-auto " style={{ width: "80%" }}>
                <div className="row">
                    <div className="col-3">
                        <img src={selectAccount.profil} alt="profil" />
                    </div>
                    <div className="col-9">
                        <table className="table" style={selectAccount.id === "----" ? {color:'#838383'}: null}>
                            <tbody>
                                <tr>
                                    <th className="w-50">Id : </th>
                                    <td className="w-50">{selectAccount.id}</td>
                                </tr>
                                <tr>
                                    <th>Prénom : </th>
                                    <td>{selectAccount.fname}</td>
                                </tr>
                                <tr>
                                    <th>Nom : </th>
                                    <td>{selectAccount.lname}</td>
                                </tr>
                                <tr>
                                    <th>Email : </th>
                                    <td>{selectAccount.email}</td>
                                </tr>
                                <tr>
                                    <th>Date de naissance : </th>
                                    <td>{selectAccount.DOB}</td>
                                </tr>
                                <tr>
                                    <th>Genre : </th>
                                    <td>{selectAccount.gender}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="adminUsers bg-white mt-3 mb-3">
            <div className="cntn_input_search_icon">
                <img className="icon_search" src={icon_search} alt="search" />
                <input className="input_search" onChange={(e) => refrechResult(e.target.value)} type="search" />
            </div>
            <br />
            <div className="resultBAR row">
                {showResult()}
            </div>
            <hr />
            <div className="compteInfoD">
                {showSelectAccount()}
            </div>
            <hr />
            <div className="permissions"  style={selectAccount.id === "----" ? {color:'#838383'}: null}>
                <div className="cntnsn m-5">
                    <div>
                        <label htmlFor="s1">Statut du compte</label>
                        <select disabled={selectAccount.id === "----"} id="s1" >
                            <option>Naturel</option>
                            <option>Suspendu</option>
                            <option>A l'étude</option>
                            <option>Arrêté</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="s2">Publier des publications</label>
                        <select id="s2" disabled={selectAccount.id === "----"}>
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div><div>
                        <label htmlFor="s3">Publier des statuts</label>
                        <select id="s3" disabled={selectAccount.id === "----"}>
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div><div>
                        <label htmlFor="s4">Commenter les publications</label>
                        <select id="s4" disabled={selectAccount.id === "----"}>
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div><div>
                        <label htmlFor="s5">Envoyer et recevoir des messages d'amis</label>
                        <select id="s5" disabled={selectAccount.id === "----"} >
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div>
                </div>
            </div>
            <form action="">
                <button className={selectAccount.id !== "----" ? "btn btn-success w-100 btn-lg" : "btn btn-success w-100 btn-lg disabled"}>Enregistrer les modifications</button>
            </form>
        </div>
    )
}
export default AdminUsers