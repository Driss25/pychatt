import React, { useState } from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Aside from './Aside';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const divDark = styled.div`
section {
    background-color: #181818 !important;
}

nav li:hover {
    background-color: #888888 !important;
}

#stories {
    background-color: #333333 !important;
    color: white;
}

.profileFr {
    background-color: #333;
    color: white;
}

.profile_img_fr {
    border-color: #949494;
}

.profileFrPa {
    background-color: #333 !important;

}

#my_storie {
    background-color: #656565 !important;
    border-color: #656565 !important;
}

.interaction_bar .cnt {
    color: white
}

.statu_card>div {
    border: 1px solid;
    border-color: #656565 !important;
}

.parnts-statu_card {
    padding: 10px;
}

.publications {
    background-color: #333333 !important;
    color: #fff;
}

.publications .butttuns {
    color: #000 !important;
}

.publications .butttuns>div>div {
    background-color: #494949 !important;
}

.publications .owner a {
    color: white !important;
}

nav,
aside {
    background-color: #333333 !important;
}

#plus {
    background-color: #777777 !important;
}

.profile_owner {
    border-color: #fff;
}

.raccourcis,
.online_friends,
.invitations {
    background-color: #656565 !important;
    border-color: #a1a1a1;
}

.body_raccourcis div.racc {
    background-color: #cdcdcd !important;
}

.body_raccourcis div.racc:hover {
    background-color: #b1b1b1 !important;
}

.body_raccourcis div.racc:hover {
    border-color: #fff;
}

.compte_online_friends {
    background-color: #00000080 !important;
}

.compte_online_friends:hover {
    background-color: #96969680 !important;
}

.compte_invitations {
    background-color: #4e4e4e !important;
}

.compte_invitations:hover {
    background-color: #4e4e4e90 !important;
}

.head_raccourcis,
.head_online_friends,
.head_invitations {
    border-color: #a1a1a1;
}

.setting_raccourcis,
.setting_online_friends,
.setting_invitations {
    background-color: transparent !important;

}

.div-profile {
    background-color: #333333 !important;
    color: #fff !important;
}

.div-profile .profile_img {
    border-color: #fff !important;
}

.div-profile .modifierMonProfil {
    background-color: #7e7e7e;
}

.div-profile .partager_ {
    background-color: #7e7e7e;
}

.menu div {
    border-color: #fff !important;
}

.div-profile .Form_info input[type='text'],
.div-profile .Form_info input[type='number'] {
    background-color: #5a5a5a;
    color: #fff;
}

.no_result_found {
    background-color: #bfbfbf;
}

.commentsUTL a {
    color: white !important;
}

.divFCon {
    background-color: #333333 !important;
    color: #c1c1c1
}

.divFCon span.spn {
    color: white !important
}

.divFCon p {
    color: #a1a1a1;
}
.divFCon p.text-primary {
    color: #977aff !important;
}

.friends_div .cntncD {
    background-color: #333333 !important;
}

.friends_div .cntncD .profile_friends {
    border-color: #fff;
}

.friends_div .cntncD a {
    color: #fff !important;
}

.notifications {
    background-color: #333333 !important;
}

.notifications .ntf {
    background-color: #5e5e5e !important;
}

.notifications .ntf img {
    border-color: #fff;
}

.notifications p,
.notifications p a {
    color: white !important;
}

.notifications .unread {
    background-color: #919191 !important;
}

.notifications .headRR,
.notifications .rr_ {
    border-color: white;
}

.notifications .active {
    color: white !important;
}

.notifications .voirT {
    color: #000 !important;
}

.bar-filter-friends {
    color: white;
    background-color: #626262;
}

.bar-filter-friends::placeholder {
    color: white;
}

.my_profile h3 a {
    color: #fff !important;
}

.gallery .carddImg {
    border-color: #333 !important;
}

.gallery .carddImg .card-body {
    background-color: #4e4e4e;
}

.gallery {
    background-color: #333333 !important;
    color: white !important;
}

.showStyle .bttns button {
    background-color: #9a9fa980 !important;
    color: #fff !important;
}

.showStyle .bttns button.active {
    background-color: #fff !important;
    color: #000 !important;
    border-color: #fff !important;
}

.gallery .tblDATA {
    background-color: #333 !important;
    color: #fff !important;
}

.gallery .tblDATA tr:hover {
    background-color: #555555 !important;
    color: white !important;
}

.gallery .tblDATA tr td {
    color: #fff !important;
}

.addPub {
    background-color: #333;
    color: #fff
}

.addPub td,
.addPub th {
    color: #fff
}

.btns-range span,
.btns-type span {
    background-color: #67696d !important;
    border-color: #67696d !important;
    color: #fff !important;
}

.btns-range span:hover,
.btns-type span:hover {
    background-color: #c0c0c0 !important;
    border-color: #c0c0c0 !important;
}

.btns-range span.active,
.btns-type span.active {
    background-color: #fff !important;
    border-color: #fff !important;
    color: #000 !important;
}

.addPub textarea,
.addPub input[type='text'],
.msgGroup textarea,
.msgGroup input[type='text'] {
    background-color: #505050;
    color: white;
}

.msgGroup {
    background-color: #333 !important;
    color: white
}

.boxMessage {
    background-color: #333;
    color: white
}

.boxMessage .boxMsinfo a {
    color: white !important;
}

.boxMessage .frameMSG .he>div {
    background-color: #ffffff66 !important;
}

.boxMessage .frameMSG .me>div {
    background-color: #464646 !important;
}

.boxMessage input[type='text'] {
    background-color: #464646;
    color: white
}

nav ul li.active {
    color: #333 !important;
}

.compte_online_friends a:hover {
    color: #333;
}

.emoji-INPUT {
    color: white !important;
}

.emoji-INPUT.actti {
    color: #787878 !important;
}

.send-INPUT {
    color: white !important;
}

.cmntsDIV .commentsUTL img {
    border-color: #fff !important;
}

.inputAddComments input {
    background-color: #5a5a5a !important;
    color: #fff !important;
}
`;
const divNormal = styled.div``;
function InterfaceUtilisateurs() {
    const dark = useSelector(state => state.mode.darkMode)
    const [location, setLocation] = useState("");
    const Div = dark ? divDark : divNormal ;
    return (
        <>
            <Div className='row'>
                <Navbar location={location} />
                <Section setLocation={new_path => setLocation(new_path)} />
                <Aside />
            </Div>
        </>
    )
}

export default InterfaceUtilisateurs