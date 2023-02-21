import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './../../context/UserContext';

function LogoutButton({ css }) {

    let history = useHistory();

    const { updateUser } = useContext(UserContext);

    const handleLogout = () => {
        fetch('https://master-peace-grill-backend.herokuapp.com/logout', {
            method: 'delete',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.ok) {
                updateUser(null);
            } else {
                res.json().then((data) => {
                    console.log(data.errors);
                    history.push('/login');
                });
            }
        });
    }

    return (
        <button onClick={handleLogout} className={css}>Logout</button>
    )
}
export default LogoutButton;