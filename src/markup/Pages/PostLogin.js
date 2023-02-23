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
        console.log('EditMenu clg on postLogin', editMenu);
    }

    if (editMenu) return <MenuEditForm setEditMenu={setEditMenu} />

    return (
        <div className="post-login-page" style={{ backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover" }} >
            <div className="post-login-header">
                <p>Welcome, {user.email}</p>
            </div>
            <div className="buttons-parent">
                <button className="margin-right" onClick={handleEditMenu}>Edit Menu</button>
                <button className="margin-right" disabled={true}>Edit Modal</button>
                <button className="margin-right" onClick={() => history.push('/menu')}>See Menu</button>
                <LogoutButton />
            </div>
        </div>
    )
}

export default PostLogin;