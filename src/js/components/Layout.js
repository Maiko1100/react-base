import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchUsers } from "../actions/userActions"
import { fetchUser } from "../actions/userActions"
import { fetchUser2 } from "../actions/userActions"
import MDSpinner from "react-md-spinner";

@connect((store) => {
    return {
        users: store.users.users,
        user: store.users.user,
        fetchedUsers: store.users.fetchedUsers,
        fetchedUser: store.users.fetchedUser,
        fetchingUser: store.users.fetchingUser
    };
})
export default class Layout extends Component {

    componentWillMount() {

    }

    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }

    fetchUser() {
        this.props.dispatch(fetchUser(this.refs.id.value))
    }

    login() {
        this.props.dispatch(fetchUser2(this.refs.username.value, this.refs.password.value))
    }


    render() {
        const {users, fetchedUsers, fetchingUser} = this.props;


        const mappedUsers = users.map(user => <li key={user.id}>{user.name}</li>)
        var spinner, spinner2;


        if (!fetchedUsers) {
            spinner = <MDSpinner />
        }
        if (fetchingUser) {
            spinner2 = <MDSpinner />
        }

        return (<div>
            <input ref="id" onChange={(e) => {
                this.fetchUser();
            } } type="text" />
            <h1>Hier komt een naam:{spinner2} {this.props.user.name}</h1>
            <button onClick={this.fetchUsers.bind(this)}>load users</button>
            <br />
            {spinner}
            <ul>{mappedUsers}</ul>
            <input ref="username" type="text" placeholder="Gebruikersnaam" />
            <input ref="password" type="text" placeholder="Wachtwoord" />
            <button onClick={this.login.bind(this)}>login</button>

        </div>)
    }
}
