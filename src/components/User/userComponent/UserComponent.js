import React, { useState, useEffect } from 'react';
import './UserComponent.css';
import { BrowserRouter, Route } from "react-router-dom";
import {UserPostComponent} from '../userPostComponent/UserPostComponent';


export const UserComponent = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        sessionStorage.getItem('user') ? setUser(JSON.parse(sessionStorage.getItem('user'))) : null;
    }, [])


    return (
        <div>
            <BrowserRouter>
                <Route path='/profile' exact>
                    {user &&
                        <div className='container'>
                            <div className='row' style={{ marginTop: '50px' }}>
                                <div className='col-md-4' style={{marginTop: '10px'}}>
                                    <img style={{ marginLeft: '50px', borderRadius: '50px' }} src='https://www.mycommunitymonitor.com/download_allegato.php?tabella=5&campo=foto&email=I3QunplJQ9oYVssYF3HGT867PaU%2Bu8eQnKXPvJRA3dQ%3D' height='130' width='130' />
                                    {/* <img src={user[0].avatar}></img> */}

                                </div>
                                <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <h2>{user[0].username}</h2>
                                        </div>
                                        <div className='col-md-3'>
                                            <button className='btn btn-info'>Modifica profilo</button>
                                        </div>
                                        </div>
                                        <div className='row' style={{marginTop: '23px'}}>
                                            <div className='col-md-6'>
                                                <span>N Post</span>   <span style={{marginLeft:'35px'}}>N Follower</span>  <span style={{marginLeft:'35px'}}>N Seguiti</span>
                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop: '15px'}}>
                                            <div className='col-md-12'>
                                                <h4>{user[0].name} {user[0].surname}</h4>

                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop: '10px'}}>
                                            <div className='col-md-12'>
                                                descrizione profilo

                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <UserPostComponent/>
                        </div>
                        
                    }

                </Route>
            </BrowserRouter >
        </div >
    )
}