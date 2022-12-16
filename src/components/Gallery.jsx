import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { gallery } from "../data/gallery";
import "../styles/gallery.css"

function Gallery() {
    const [showStyle, setShowStyle] = useState("box");
    const [gallery_CP, setGallery_CP] = useState(gallery);
    let I = 1;
    const styleBTN = "btn  w-50 "
    const showGallery = showStyle => {
        if (showStyle === "box") {
            return (
                <div className="row mt-3">
                    {
                        gallery_CP.map(g => {
                            return (
                                <div className="col-4 " key={g.id}>
                                    <div className="card carddImg" >
                                        <img className="card-img-top w-100" src={g.content} alt="Card" />
                                        <div className="card-body">
                                            <h4 className="card-title">{g.title}</h4>
                                            <p className="card-text">Date : {g.date}</p>
                                            <Link className="btn btn-success w-100 btn-lg" to="/utilisateurs/addPub" >Publier</Link>
                                            <br /><br />
                                            <button onClick={() => setGallery_CP(gallery_CP.filter(o => o.id !== g.id))} className="btn btn-danger w-100  btn-lg">Supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            )
        } else if ((showStyle === "tbl")) {
            return (
                <table className="table tblDATA table-hover mt-4 text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Content</th>
                            <th>Adresse</th>
                            <th>Date</th>
                            <th>Publier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gallery_CP.map(g => {
                                return (
                                    <tr key={g.id}>
                                        <td> {I++}</td>
                                        <td><img src={g.content} alt="content"/></td>
                                        <td> {g.title}</td>
                                        <td> {g.date}</td>
                                        <td><Link className="btn btn-success w-100" to="/utilisateurs/addPub" >Publier</Link></td>
                                        <td><button className="btn btn-danger w-100" onClick={() => setGallery_CP(gallery_CP.filter(o => o.id !== g.id))} >Supprimer</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table >
            )
        }
    }
    const inputFile = useRef()
    return (
        <div className="gallery bg-white mt-3">
            <h1 className="text-center">Galerie</h1>
            <hr />
            <div>
                <button className="btn btn-primary btn-lg mb-2 w-100 " onClick={() => inputFile.current.click()}>Ajouter un média</button>
                <input type="file" style={{ display: 'none' }} ref={inputFile} />
            </div>
            <div className="showStyle">
                <div className="bttns" >
                    <button onClick={() => setShowStyle('box')} id="btnnS1" className={showStyle === "box" ? styleBTN + "active" : styleBTN}>Boxes</button>
                    <button onClick={() => setShowStyle('tbl')} id="btnnS2" className={showStyle === "tbl" ? styleBTN + "active" : styleBTN}>Table</button>
                </div>
            </div>
            {
                showGallery(showStyle)
            }
        </div>
    )
}
export default Gallery