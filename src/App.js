import React, { useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'

import { getTrips, addTraveler } from './actions/flykids'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SignUp from './components/signUp'
import SignUpAdmin from './components/signupAdmin'
import SignIn from './components/signin'
import Navbar from './components/navBar'
import TripsList from './components/TripsList'
import LogInForm from './components/LogInForm'
import UserList from './components/UserData'

function App(props) {
  useEffect(() => {
    props.getTrips()
  }, [])

  return (
    <div className='App'>
      <Navigation />
      <h1>FLY KIDS</h1>
      <h2>We make flying with kids easy</h2>
      <Route exact path='/' component={Navbar} />
      <Route
        exact
        path='/traveler-signup'
        render={() => (
          <SignUp user={props.user} addTraveler={props.addTraveler} />
        )}
      />
      <Route
        exact
        path='/admin-signup'
        render={() => (
          <SignUpAdmin user={props.user} addTraveler={props.addTraveler} />
        )}
      />
      <Route exact path='/trips' component={TripsList} />
      <Route exact path='/signin' component={SignIn} />
      <Route path="/login" component={LogInForm}/>
      <Route path="/users" component={UserList}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    trips: state.trips,
    user: state.user
  }
}

const mapDispatchToProps = {
  getTrips,
  addTraveler
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// <SignUp user={props.user} addTraveler={props.addTraveler} />
