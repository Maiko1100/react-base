import React, {Component}from "react"
import {connect} from "react-redux"

import {fetchUser} from "../actions/userActions"
import MDSpinner from "react-md-spinner";

@connect((store) => {
    return {
        user: store.user,
        // fetchedUser: store.data.fetchedUser,
        // fetchingUser: store.data.fetchingUser
    };
})
export default class Layout extends Component {

    componentWillMount() {

    }


    login() {
        this.props.dispatch(fetchUser(this.refs.username.value, this.refs.password.value))
    }


    render() {
        const {user, fetchedUser} = this.props;


        var spinner;


        // if (!fetchedUsers) {
        //     spinner = <MDSpinner/>
        // }

        return <div>

            <h1>Hier komt een naam:{this.props.user}</h1>

            {console.log(this.props.user)}
            <input ref="username" type="text" placeholder="Gebruikersnaam"/>
            <input ref="password" type="password" placeholder="Wachtwoord"/>

            <button onClick={this.login.bind(this)}>login</button>

        </div>
    }
}
