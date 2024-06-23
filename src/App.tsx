import './App.css'
import React from "react";
import Home from "./components/Home.tsx";
import {NavLink, Route, Routes} from "react-router-dom";
import ContactForm from "./components/ContactForm.tsx";
import {Avatar, Button} from "@mui/material";
import SettingsPNG from "./assets/img/Settings-PNG.png";

const App: React.FC = () => (
    <>
        <div>
            <div className="navbar" style={{borderBottom:'1px solid red'}}>
                <div className={'container'}>
                    <div className={'navbar-block'}>
                        <div className="navbar-logo">
                            MyLogo
                        </div>
                        <div className="navbar-links">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/contact-form">About</NavLink>
                            <a>Contact</a>
                        </div>
                        <div className="navbar-button">
                            <Button variant="contained" style={{backgroundColor: '#FF952B', color: 'black'}}><img
                                style={{marginRight: '15px'}} width={'20px'} src={SettingsPNG}
                                alt={'Settings'}/> Settings</Button>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact-form" element={<ContactForm/>}/>
        </Routes>
    </>
);

export default App
