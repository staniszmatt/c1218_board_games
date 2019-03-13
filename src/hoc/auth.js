import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent, to = '/sign-in', requireAuth = true){
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { auth, history } = this.props;

            console.log('AUTH:', auth);

            if(auth !== requireAuth){
                history.push(to);
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps({user}){
        return { auth: user.auth }
    }

    return connect(mapStateToProps)(Auth);
}
