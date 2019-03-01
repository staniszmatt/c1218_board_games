import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js//materialize.min';
import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Test from './test';
import LandingPage from './landing-page';
import AvailableEvents from './events';
import EventSelected from './event-id';
import PlayerList from './player-list';
import Profile from './profile';
import CreateNewEvent from './new-event';
import MyEvents from './myevents';
import EventsHost from './events-host';
import EventHostPage from './event-hostpage';
import EditEvent from './edit-event';
import JoinedEventDetails from './joined-event'
import Nav from './nav/nav'

const App = () => (
    <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/events" component={AvailableEvents} />
        <Route exact path="/events/id" component={EventSelected} />
        <Route path="/events/id/player-list" component={PlayerList} />
        <Route path="/profile" component={Profile} />
        <Route path="/events/new-event" component={CreateNewEvent} />
        <Route path="/events/host" component={EventsHost} />
        <Route path="/events/id/host" component={EventHostPage}/>
        <Route path="/events/id/edit" component={EditEvent}/>
        <Route exact path="/events/myevents" component={MyEvents}/>
        <Route path="/events/myevents/id" component={JoinedEventDetails}/>
         <Nav/>
    </div>
);

export default App;
