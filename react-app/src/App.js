/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css'

const GIT_USERS = ['']
const GIT_USER_URL = 'https://api.github.com/users/'
const GIT_EVENT_POSTFIX = '/events'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App_score">
          n/a
        </div>
        <button
          type="button"
          className="App_button"
          children="Get Score"
        />
      </div>
    );
  }
}
