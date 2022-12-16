import { useEffect, useState } from "react";
import messages from "../data/messages.js"
import profil from "../data/profil.js";
import compts from "../data/compts_utilisateur.js";
import online_friends from "../data/online_friends.js";
import { useParams, Link } from "react-router-dom"
import "../styles/boxMessages.css"
import threeDots from "../assets/icons/threeDots.png";
import threeDots_n from "../assets/icons/threeDots_n.png";
import seen from "../assets/icons/seen.png";
import noseen from "../assets/icons/noseen.png";
import { useRef } from "react";
import { emojis } from "../data/emojis.js";
import { useSelector } from "react-redux";

function BoxMessage() {
    const { id } = useParams()
    const [currentMessages, setCurrentMessages] = useState([]);
    const [i, setI] = useState(0);
    const [emojiLIST, setEmojiLIST] = useState(false)
    const dark = useSelector(state => state.mode.darkMode)
    const compte = compts.find(c => c.id === id)

    useEffect(() => {
        setCurrentMessages(messages.filter(m => {
            return (
                (m.id_sender === profil.id && m.id_receiver === compte.id) ||
                (m.id_receiver === profil.id && m.id_sender === compte.id)
            )
        }))
        window.scroll(0, 0)
    }, [compte.id])
    useEffect(() => {
        frameMSG.current.scrollTo(0, frameMSG.current.scrollHeight)
        inputMsg.current.value = ""
        inputMsg.current.focus()
    },
        [currentMessages])
    const Status = id => {
        if (online_friends.indexOf(id.id) !== -1) {
            return (<span className="text-success">online</span>)
        } else {
            return (<span className="text-danger">offline</span>)
        }
    }
    const inputMsg = useRef()
    const frameMSG = useRef()
    const sendMSG = () => {
        if (inputMsg.current.value.trim().length === 0) return
        const date = new Date()
        const copy = [...currentMessages]
        copy.push(
            {
                id: i,
                id_sender: profil.id,
                id_receiver: compte.id,
                content: inputMsg.current.value,
                date: (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
                noseen: 1
            })
        setCurrentMessages(copy)
        setI(i + 1)
    }
    const EmojiLIST = () => {
        let rr = 0;
        return (
            <div className="emojiLIST">
                <div>
                    {
                        emojis.map(e => {
                            return (
                                <span key={rr++} onClick={() => addEMOGI(e)}>{e}</span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    const addEMOGI = e => {
        inputMsg.current.value = inputMsg.current.value.slice(0, inputMsg.current.selectionStart)
            + e + inputMsg.current.value.slice(inputMsg.current.selectionStart)
        inputMsg.current.focus()
    }
    return (
        <div className="boxMessage mt-3 ">
            <div className="headMsg p-2">
                <img className="prfffl" src={compte.profil} alt="profile" />
                <div className="boxMsinfo">
                    <Link to={"/utilisateurs/friends/" + compte.id}>{compte.fname + ' ' + compte.lname}</Link><br />
                    <Status id={compte.id} />
                </div>
                <img src={dark ? threeDots_n : threeDots} className="threeDotsA pointer" alt="icon"/>
            </div>
            <div className="bodyMSG">
                <div className="frameMSG" ref={frameMSG}>
                    {
                        currentMessages.map(m => {
                            return (
                                <div className={m.id_sender === profil.id ? "me" : "he"} key={m.id}>
                                    <div className="mmmsg">{m.content}
                                        <div className="info_Msgg">
                                            <span>{m.date}</span>
                                            <img src={m.noseen ? noseen : seen} className="seen" alt="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {emojiLIST && <EmojiLIST />}
                <div className="inputMSG">
                    <div className="inputMSGcnt">
                        <input onKeyDown={e => e.keyCode === 13 ? sendMSG() : null} placeholder="Ecrire un message ..." ref={inputMsg} className="inputtt" type="text" />
                        <svg className={emojiLIST ? "emoji-INPUT pointer actti" : "emoji-INPUT pointer"} onClick={() => setEmojiLIST(!emojiLIST)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg>
                        <svg onClick={sendMSG} className="send-INPUT pointer" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BoxMessage