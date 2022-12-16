import React from "react";
import { useRef } from "react";
import "../styles/msggroup.css"
function MsgGroup() {
    const msg = useRef()
    const acc = useRef()
    return (
        <div className="msgGroup bg-white mt-3">
            <h1 className="text-center">Message de groupe</h1>
            <hr />
            <div className="cc row">
                <div className="col-2">
                    <span >Envoyer à : </span>
                </div>
                <div className="col-10">
                    <input type="text" ref={acc} placeholder="Laissez vide pour sélectionner tous les amis ou tapez amis pour personnaliser le message" />
                </div>
            </div>
            <hr />
            <textarea className="w-100 msgTextArea" ref={msg} placeholder="Écrivez un message de groupe ici" rows="10"></textarea>
            <button onClick={() => {
                msg.current.value = ""
                acc.current.value = ""
            }} className="btn btn-success w-100 btn-lg mb-3 mt-2" style={{ fontSize: "25px", fontWeight: "700" }}>Envoyer</button>
        </div>
    )
}
export default MsgGroup