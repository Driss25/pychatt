import React from "react";
import "../styles/adminAdmins.css"
function AdminAdmins() {
    return (
        <div className="adminAdmins bg-white p-5 mt-3">
            <div className="cntnAdm m-auto w-50">
                <form action="">
                    <label htmlFor="email">Email :</label><br />
                    <input type="email" className="w-100" id="email" placeholder="example@gmail.com"/><br />
                    <label htmlFor="password">Mot de passe :</label><br />
                    <input type="text" className="w-100" id="password" placeholder="Alk@dd_121 @d"/><br />
                    <hr />
                    <div>
                        <label htmlFor="op1">Gérer profil</label><select id="op1">
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="op2">Gérer compte utilisateur</label><select id="op2">
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="op3">Plaintes</label><select id="op3">
                            <option>Oui</option>
                            <option>Non</option>
                        </select>
                    </div>
                    <hr />
                    <button className="ajouterBTN w-100">Ajouter Admin</button>
                </form>
            </div>
        </div>
    )
}
export default AdminAdmins