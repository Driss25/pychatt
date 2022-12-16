import React from "react";
import threeDots from "../assets/icons/threeDots.png";
import threeDots_n from "../assets/icons/threeDots_n.png";
import compts from "../data/compts_utilisateur";
import profil from "../data/profil";
import like_black from "../assets/icons/like_black.png";
import like_red from "../assets/icons/like_red.png";
import like_n from "../assets/icons/like_n.png";
import comment from "../assets/icons/comment.png";
import comment_n from "../assets/icons/comment_n.png";
import share from "../assets/icons/share.png";
import share_n from "../assets/icons/share_n.png";
import icon_public from "../assets/icons/public.png";
import icon_friends from "../assets/icons/friends.png";
import icon_private from "../assets/icons/private.png";
import icon_public_n from "../assets/icons/public_n.png";
import icon_friends_n from "../assets/icons/friends_n.png";
import icon_private_n from "../assets/icons/private_n.png";
import no_result_found from "../assets/icons/no_result_found.png";
import { Link } from "react-router-dom";
import comments from "../data/comments"
import { useSelector } from "react-redux";
import '../styles/publications.css'
function Publications(props) {
    const dark = useSelector(state => state.mode.darkMode)
    function get_pub(pub) {
        if (pub.type === "picture") {
            return picture(pub.content)
        } else if (pub.type === "video") {
            return video(pub.content, pub.thumbnail)
        } else if (pub.type === "audio") {
            return audio(pub.content)
        } else if (pub.type === "link") {
            return link(pub.content)
        } else if (pub.type === "text") {
            return text(pub.content)
        }
    }
    function picture(pub) {
        return (
            <div className="picture">
                <img alt="icon" className="w-100" src={pub} />
            </div>
        )
    }
    function video(pub, thumbnail) {
        return (
            <div className="video">
                <video poster={thumbnail} className="w-100" controls src={pub}></video>
            </div>
        )
    } function audio(pub) {
        return (
            <div className="audio">
                <audio className="w-100" controls src={pub}></audio>
            </div>
        )
    } function text(pub) {
        return (
            <div className="text">
                <i>{pub}</i>
            </div>
        )
    } function link(pub) {
        return (
            <div className="link">
                <a target='_blanck' href={pub}>{pub}</a>
            </div>
        )
    }
    function get_nb_likes(id) {
        return props.data_publications.find(pub => pub.id === id).interactors.length
    }
    function get_nb_comments(id) {
        return props.data_publications.find(pub => pub.id === id).comments.length
    }
    function get_nb_shares(id) {
        return props.data_publications.find(pub => pub.id === id).share.length
    }
    function like(e) {
        let r = e
        if (r.classList.value.indexOf('eee') === -1) {
            r = e.parentElement
        }
        if (r.classList.value.indexOf('red') !== -1) {
            r.classList.remove('red')
            r.firstElementChild.src = dark ? like_n : like_black
            r.parentElement.parentElement.nextSibling.nextSibling.firstElementChild.firstElementChild.innerText =
                + r.parentElement.parentElement.nextSibling.nextSibling.firstElementChild.firstElementChild.innerText - 1
        } else {
            r.classList.add('red')
            r.firstElementChild.src = like_red
            r.parentElement.parentElement.nextSibling.nextSibling.firstElementChild.firstElementChild.innerText =
                + r.parentElement.parentElement.nextSibling.nextSibling.firstElementChild.firstElementChild.innerText + 1
        }
    }
    function get_owner(publication) {
        let account = compts.find(compt => compt.id === publication.owner_id)
        let spectateurs;
        if (publication.spectateurs === "public") {
            spectateurs = dark ? icon_public_n : icon_public
        } else if (publication.spectateurs === "friends") {
            spectateurs = dark ? icon_friends_n : icon_friends
        } else {
            spectateurs = dark ? icon_private_n : icon_private
        }
        let to = profil.id !== account.id ? `/utilisateurs/friends/${account.id}` : '/utilisateurs/profile'
        return (
            <>
                <div style={{ display: "flex" }}>
                    <img alt="icon" className="me-2 profile_owner" src={account.profil} />
                    <div>
                        <Link className="fw-bold text-black" to={to}>{`${account.fname} ${account.lname}`}</Link>
                        <p><img alt="icon" src={spectateurs} className="spectateurs" /> {convert_date_to_string(publication.date)}</p>
                    </div>
                </div>
                <img alt="icon" className="pointer threeDots" src={dark ? threeDots_n : threeDots} />
            </>
        )
    }
    function showCOmments(e) {
        let commentsD;
        if (e.target.className.indexOf("cnt") !== -1) {
            commentsD = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
        } else {
            commentsD = e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
        }
        if (commentsD.style.display === "none") {
            commentsD.style.display = "block"
        } else {
            commentsD.style.display = "none"
        }
    }
    if (props.data_publications.length) {
        const getAccLike = (lst) => {
            let result = ""
            for (let id of lst) {
                try {
                    let compte = compts.find(c => c.id === id)
                    result +=
                        `${compte.fname} ${compte.lname}\n`
                } catch { }
            }
            return (result)
        };
        const getAccComment = (lst) => {
            let result = ""
            for (let id of lst) {
                try {
                    let id_ = comments.find(com => com.id === id).id_owner
                    let compte = compts.find(c => c.id === id_)
                    result +=
                        `${compte.fname} ${compte.lname}\n`
                } catch { }
            }
            return (result)
        };
        const getAccPartager = (lst) => {
            let result = ""
            for (let id of lst) {
                try {
                    let compte = compts.find(c => c.id === id)
                    result +=
                        `${compte.fname} ${compte.lname}\n`
                } catch { }
            }
            return (result)
        };
        const addComment = elm => {
            if (elm.value.trim().length < 1) return
            const divC = elm.parentElement.previousElementSibling
            const div = document.createElement('div')
            const img = document.createElement('img')
            const a = document.createElement('a')
            const p = document.createElement('p')
            const hr = document.createElement('hr')
            p.innerHTML = elm.value
            a.href = "/utilisateurs/profile"
            a.innerHTML = profil.fname + " " + profil.lname
            img.src = profil.profil
            div.className = "commentsUTL text-start  ps-2"
            div.append(img, a, p, hr)
            divC.append(div)
            divC.scrollTo(0, divC.scrollHeight)
            elm.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerHTML =
                +elm.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerHTML + 1
            elm.value = ""
        }
        return (
            props.data_publications.map(publication => {
                return (
                    <div className="publications bg-white mt-4 rounded-4" key={publication.id}>
                        <div className="p-3">
                            <div className="owner">
                                {get_owner(publication)}
                            </div>
                            <p className="pub-description" >{publication.description}</p>
                            <div className="mt-3 mb-3">
                                {get_pub(publication)}
                            </div>
                            <div className="interaction_bar text-center">
                                <div className="row myDiv1 butttuns">
                                    <div className="col"><div className="cnt text-center p-2 rounded eee" onClick={(e) => like(e.target)} ><img alt="icon" className="me-2" src={dark ? like_n : like_black} />J’adore</div></div>
                                    <div className="col"><div onClick={(e) => showCOmments(e)} className="cnt text-center p-2 rounded" ><img alt="icon" className="me-2" src={dark ? comment_n : comment} />Commenter</div></div>
                                    <div className="col"><div className="cnt text-center p-2 rounded" ><img alt="icon" className="me-2" src={dark ? share_n : share} />Partager</div></div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col underTextHover" title={getAccLike(publication.interactors)}><span>{get_nb_likes(publication.id)}</span> personnes</div>
                                    <div className="col underTextHover" title={getAccComment(publication.comments)}><span>{get_nb_comments(publication.id)}</span> commentaires</div>
                                    <div className="col underTextHover" title={getAccPartager(publication.share)}><span>{get_nb_shares(publication.id)}</span> partages</div>
                                </div>
                                <div style={{ display: "none" }} className="border mt-4" >
                                    <div className="cmntsDIV" >
                                        <div className="cmntsDIV_ii pt-3">
                                            {
                                                publication.comments.map(id_c => {
                                                    const comment = comments.find(comnt => comnt.id === id_c)
                                                    const compt = compts.find(comp => comp.id === comment.id_owner);
                                                    return (
                                                        <div className="commentsUTL text-start ps-2 pe-2" key={comment.id}>
                                                            <img alt="icon" src={compt.profil} /><Link to={"/utilisateurs/friends/" + compt.id}>{compt.fname + " " + compt.lname}</Link>
                                                            <p>{comment.content}</p>
                                                            <hr />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="inputAddComments">
                                            <input type="text" autoFocus onKeyDown={e => e.keyCode === 13 ? addComment(e.target) : null} className="cntnttINPTC" placeholder="Écrire un commentaire..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    } else {
        return (
            <div className="no_result_found"><img alt="icon" src={no_result_found} />Il n'y a pas de contenu à afficher</div>
        )
    }
}
function convert_date_to_string(date) {
    let minutes = +date.split(' ')[1].split(':')[1]
    let hours = +date.split(' ')[1].split(':')[0]
    let days = +date.split(' ')[0].split('-')[2]
    let months = +date.split(' ')[0].split('-')[1]
    let years = +date.split(' ')[0].split('-')[0]
    let current_date = new Date()
    let current_minutes = current_date.getMinutes()
    let current_hours = current_date.getHours()
    let current_days = current_date.getDay()
    let current_months = current_date.getMonth()
    let current_years = current_date.getFullYear()
    if (current_years - years === 0) {
        if (current_months - months === 0) {
            if (current_days - days === 0) {
                if (current_hours - hours === 0) {
                    if (current_minutes - minutes === 0) {
                        return "À l'instant"
                    } else {
                        return current_minutes - minutes === 1 ? 'Avant une minute' : `Avant ${current_minutes - minutes} minutes`
                    }
                } else {
                    return current_hours - hours === 1 ? 'Avant une heure' : `Avant ${current_hours - hours} heures`
                }
            } else {
                return current_days - days === 1 ? 'Hier' : `Avant ${current_days - days} jours`
            }
        } else {
            return current_months - months === 1 ? "Avant un mois" : `Avant ${current_months - months} mois`
        }
    } else {
        return current_years - years === 1 ? "Avant un année" : `Avant ${current_years - years} ans`
    }
}
export default Publications