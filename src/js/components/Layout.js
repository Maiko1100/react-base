import React from "react"
import { connect } from "react-redux"

import { fetchUsers } from "../actions/userActions"
import { fetchUser } from "../actions/userActions"

@connect((store) => {
  return {
    users: store.users.users,
    user: store.users.user,
    fetchedUsers: store.users.fetchedUsers
  };
})
export default class Layout extends React.Component {

  componentWillMount() {
      this.props.dispatch(fetchUser())
  }

    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }

  render() {
    const { users , fetchedUsers} = this.props;
      console.log(fetchedUsers)

      const mappedUsers = users.map(user => <li key={user.id}>{user.name}</li>)

    return <div>

        testje: {fetchedUsers}
        <h1>Hier komt een naam: {this.props.user.name}</h1>
        <button onClick={this.fetchUsers.bind(this)}>load users</button>

        <ul>{mappedUsers}</ul>
    </div>
  }
}
