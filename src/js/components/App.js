import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import styles from '../../css/app.css';

connect((store) => {
  user: store.user.user
})
class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.companyName}>KCPSoftware</div>
          <ul>
            <li><Link to="/layout">Layout</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
