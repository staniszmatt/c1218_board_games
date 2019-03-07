import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js//materialize.min';
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js//materialize.min';
import { Route, Switch } from 'react-router-dom';
import '../assets/css/app.css';
import LandingPage from './landing-page';
import Events from './events/events';
import EventSelected from './event-id/event-id';
import PlayerList from './event-details/player-list';
import Profile from './profile/profile';
import CreateNewEvent from './create_edit/new-event';
import MyEvents from './events/myevents';
import EventsHost from './events/events-host';
import EventHostPage from './event-id/event-hostpage';
import EditEvent from './create_edit/edit-event';
import JoinedEventDetails from './event-details/joined-event';
import Nav from './nav/nav';
import players from '../../dummy_data/profile.json';
import SignUp from './sign-in-out/sign-up';
import SignOut from './sign-in-out/sign-out';
import SignIn from './sign-in-out/sign-in';

const App = () => (
    <div className="main-div">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/profile" render={() => <Profile players={players}/>} />
            <Route path="/new-event" component={CreateNewEvent} />
            <Route path="/events/host" component={EventsHost} />
            <Route path="/events/myevents" component={MyEvents}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/events/:id/player-list" component={PlayerList} />
            <Route path="/events/:id/host" component={EventHostPage}/>
            <Route path="/events/:id/edit" component={EditEvent}/>
            <Route path="/events/:id/myevents" component={JoinedEventDetails}/>
            <Route exact path="/events/:id" component={EventSelected} />
            <Route exact path="/events" component={Events} />
            <Route path="/sign-out" component={SignOut}/>
            <Route path="/sign-in" component={SignIn}/>
        </Switch>
        
         <Nav/>
    </div>
);

export default App;
