import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Test from './test';
import LandingPage from './landing-page';
import AvailableEvents from './available-events';
import PlayerList from './player-list';
import EventsJoin from './events-join';
import EventsHost from './events-host';
import InputEventHost from './input-event-host';
import Profile from './profile';
import EventEdit from './events-edit';
import EventCompleteNew from './events-new';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <LandingPage/>
            <AvailableEvents/>
            <PlayerList/>
            <EventsJoin/>
            <EventsHost/>
            <InputEventHost/>
            <Profile/>
            <EventEdit/>
            <EventCompleteNew/>
        </div>

        <Test/>


    </div>
);

export default App;
