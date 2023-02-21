import React, { useContext, useState } from 'react'
import '../../css/login.css'
import { useHistory } from "react-router-dom";
import { UserContext } from './../../context/UserContext';
import MenuEditForm from './MenuComponentsFolder/MenuEditForm';
import LogoutButton from '../Element/LogoutButton';

function PostLogin() {
    let history = useHistory();
    const { user } = useContext(UserContext);
    !user ? history.push('/login') : console.log("welcome");

    const [editMenu, setEditMenu] = useState(false);

    const handleEditMenu = () => {
        setEditMenu(true);
        console.log(editMenu);
    }

    if (editMenu) return <MenuEditForm />

    return (
        <div className="post-login-page" style={{ backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover" }} >
            <div className="post-login-header">
                <h3>Welcome, {user.email}</h3>
            </div>
            <div className="buttons-parent">
                <button className="margin-right" onClick={handleEditMenu}>Edit Menu</button>
                <button className="margin-right" disabled='true'>Edit Modal</button>
                <LogoutButton />
            </div>
        </div>
    )
}

export default PostLogin;