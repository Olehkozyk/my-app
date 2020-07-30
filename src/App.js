import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className="app-wrapper__content">
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() =>
                            <Dialogs store={props.store}
                            state={props.state.dialogsPage} />} />
                        <Route path='/profile'
                               render={() => <Profile
                                   dispatch={props.dispatch}
                                   profilePage={props.state.profilePage}/>} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
