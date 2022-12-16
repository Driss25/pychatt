import React, { useState } from "react";
import { complaints } from "../data/complaints.js";
import compts from "../data/compts_utilisateur";
import threeDTD from "../assets/icons/threeDots.png"
import "../styles/adminComplaints.css";
function AdminComplaints() {
    const [filterN, setFilterN] = useState("readable");
    return (
        <div className="adminComplaints mt-3 mb-3 bg-white">
            <div className="row cnbg">
                <div className="col prt">
                    <div onClick={() => setFilterN("readable")} className={filterN === "readable" ? "active" : ""}>Lisible</div>
                </div>
                <div className="col prt prt2">
                    <div onClick={() => setFilterN("recycle")} className={filterN === "recycle" ? "active" : ""}>Complété</div>
                </div>
                <div className="col prt">
                    <div onClick={() => setFilterN("completed")} className={filterN === "completed" ? "active" : ""}>Recycler</div>
                </div>
            </div>
            {
                complaints.filter(c1 => c1.statu === filterN)
                    .map(c => {
                        const compte = compts.find(acc => acc.id === c.id_owner)
                        return (
                            <div className="complaints_u" key={c.id}>
                                <img src={compte.profil} className="prfl" />
                                <div>
                                    <p><b>{`${compte.fname} ${compte.lname}`}</b> {c.content}</p>
                                    <p>{c.date}</p>
                                </div>
                                <img src={threeDTD} className="pointer threeDTD" />
                            </div>
                        )
                    })
            }
        </div>
    )
}
export default AdminComplaints


