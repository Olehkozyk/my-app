import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className="app-wrapper__content">
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/profile' render={() => <Profile />} />
                        <Route path='/users' render={() => <Users />} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
