import React, { useState, useEffect } from 'react';
import './UserComponent.css';
import { HashRouter, Route } from "react-router-dom";

export const UserComponent = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        sessionStorage.getItem('user') ? setUser(JSON.parse(sessionStorage.getItem('user'))) : null;
    }, [])


    return (
        <div>
            <HashRouter>
                <Route path='/profile' exact>

                    {user && <div>
                        <img src={user[0].avatar}/>
                        Nome: {user[0].name}
                        Cognome: {user[0].surname}
                        Username: {user[0].username}
                    </div>}

                </Route>
            </HashRouter>
        </div>
    )
}