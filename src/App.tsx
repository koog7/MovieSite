import './App.css'
import React from "react";
import Home from "./components/Home.tsx";
import {NavLink, Route, Routes} from "react-router-dom";
import ContactForm from "./components/ContactForm.tsx";
import {Avatar, Button} from "@mui/material";
import SettingsPNG from "./assets/img/Settings-PNG.png";
import AboutUs from "./components/AboutUs.tsx";
import Portfolio from "./components/Portfolio.tsx";
import RandomNumber from "./portfolioComponents/RandomNumber.tsx";
import ChuckNorris from "./portfolioComponents/ChuckNorris.tsx";

const App: React.FC = () => (
    <>
        <div>
            <div className="navbar" style={{borderBottom: '1px solid red'}}>
                <div className={'container'}>
                    <div className={'navbar-block'}>
                        <div className="navbar-logo">
                            <NavLink className={'logo'} to="/">Movie<span style={{fontSize: '16px'}}>Time</span></NavLink>
                    </div>
                    <div className="navbar-links">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to='/contact-form'>Contact</NavLink>
                            <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>

                        </div>
                        <div className="navbar-button">
                            <Button variant="contained" style={{backgroundColor: '#F20D0D', color: 'white'}}><img
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
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact-form" element={<ContactForm/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/randomnumber" element={<RandomNumber/>}/>
            <Route path="/jokegenerator" element={<ChuckNorris/>}/>
        </Routes>
        <div className="footers">
            <div className='fourcolumns'>
                <div className='row'>
                    <div className='cloumnone'>
                        <h1>The Agency for Movies</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='columntwo'>
                        <p>BISHKEK</p>
                        <div>
                            <p className='underline'>bishkek@example.com</p>
                            <p>+996 (312) 123-456</p>
                            <p>123 Primernaya str., Bishkek, Fictional Country 720001</p>
                        </div>
                        <p className='underline'>SEE ON MAP</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='columnthree'>
                        <p>ALMATY</p>
                        <div>
                            <p className='underline'>kazakhstan@example.com</p>
                            <p>+7 (701) 234-5678</p>
                            <p>123 Primernaya str., Almaty, Fictional Country 050000</p>
                        </div>
                        <p className='underline'>SEE ON MAP</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='columnfour'>
                        <p>WANT TO BE THE SMARTEST IN YOUR OFFICE?</p>
                        <p className='underline'>SIGN UP FOR OUR NEWSLETTER</p>
                        <p>FOLLOW US</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default App
