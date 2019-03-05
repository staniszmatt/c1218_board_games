import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js//materialize.min';
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js//materialize.min';
import { Route } from 'react-router-dom';
import '../assets/css/app.css';
import LandingPage from './landing-page';
import Events from './events/events';
import EventSelected from './event-id/event-id';
import PlayerList from './player-list';
import Profile from './profile/profile';
import CreateNewEvent from './new-event';
import MyEvents from './events/myevents';
import EventsHost from './events/events-host';
import EventHostPage from './event-hostpage';
import EditEvent from './edit-event';
import JoinedEventDetails from './joined-event';
import Nav from './nav/nav';
import players from '../../dummy_data/profile.json';
import SignUp from './sign-up';
import SignOut from './sign-out';
import SignIn from './sign-in';

const App = () => (
    <div className="main-div">
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" render={() => <Profile players={players}/>} />
        <Route path="/new-event" component={CreateNewEvent} />
        <Route path="/events/host" component={EventsHost} />
        <Route path="/events/myevents" component={MyEvents}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route exact path="/events/myevents/:id" component={JoinedEventDetails}/>
        <Route path="/events/:id/player-list" component={PlayerList} />
        <Route path="/events/:id/host" component={EventHostPage}/>
        <Route path="/events/:id/edit" component={EditEvent}/>
        <Route exact path="/events/:id" component={EventSelected} />
        <Route exact path="/events" component={Events} />
        <Route path="/sign-out" component={SignOut}/>
        <Route path="/sign-in" component={SignIn}/>

         <Nav/>
    </div>
);

export default App;
