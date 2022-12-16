import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "../styles/addPub.css"

function AddPub() {
    const [range, setRange] = useState('public')
    const [type, setType] = useState('img')
    const descr = useRef()
    const getType = () => {
        if (type === "img") return <><th>Image : </th><td><input  className="w-100" type="file" /></td></>
        if (type === "vd") return <><th>Vidéo : </th><td><input  className="w-100" type="file" /></td></>
        if (type === "ms") return <><th>Musique : </th><td><input  className="w-100" type="file" /></td></>
        if (type === "link") return <><th>Lien : </th><td><input placeholder="www.pychatt.com"  className="w-100" type="text" /></td></>
        if (type === "txt") return <><th>Texte : </th><td><textarea  className="w-100" cols="30" rows="10" placeholder="Écrivez votre texte ici..."></textarea></td></>
    }
    return (
        <div className="addPub mt-3">
            <h1 className="text-center">Ajouter Publication</h1>
            <hr />
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                setRange("public")
                setType("img")
                descr.current.value = ""
            }}>
                <table className="table ">
                    <tbody>
                        <tr>
                            <th><label htmlFor="desc">Description : </label></th><td><textarea rows="4" className="w-100" id="desc" placeholder="Rédigez une description de la publication (facultatif)" ref={descr}></textarea></td>
                        </tr>
                        <tr>
                            <th>Spectateurs : </th>
                            <td className="btns-range">
                                <span onClick={() => setRange("public")} className={range === "public" ? "btn active" : "btn"} >Publique</span>
                                <span onClick={() => setRange("friends")} className={range === "friends" ? "btn active" : "btn"}>Amies</span>
                                <span onClick={() => setRange("private")} className={range === "private" ? "btn active" : "btn"}>Privé</span>
                            </td>
                        </tr>
                        <tr>
                            <th>Type : </th>
                            <td className="btns-type">
                                <span onClick={() => setType("img")} className={type === "img" ? "btn active" : "btn"} >Image</span>
                                <span onClick={() => setType("vd")} className={type === "vd" ? "btn active" : "btn"} >Vidéo</span>
                                <span onClick={() => setType("ms")} className={type === "ms" ? "btn active" : "btn"} >Musique</span>
                                <span onClick={() => setType("link")} className={type === "link" ? "btn active" : "btn"} >Lien</span>
                                <span onClick={() => setType("txt")} className={type === "txt" ? "btn active" : "btn"} >Texte</span>
                            </td>
                        </tr>
                        <tr>
                            {getType()}
                        </tr>
                        <tr>
                            <td colSpan={2} style={{borderBottom:"none"}} >
                                <button className="btn btn-success w-100 btn-lg" style={{fontSize:"25px", fontWeight:"700"}}>Publier</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default AddPub