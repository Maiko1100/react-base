import React, { Component } from "react"
import { connect } from "react-redux"


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

        return <div>


            <input ref="username" type="text" placeholder="Gebruikersnaam" />
            <input ref="password" type="text" placeholder="Wachtwoord" />
            <button onClick={this.login.bind(this)}>login</button>

        </div>
    }
}
