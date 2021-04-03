import React, { Component } from 'react';
import Landing from './Landing/Landing';
import Contact from './Contact/Contact';
import MuscleSelector from './MuscleSelector/MuscleSelector';
import ExerciseForm from './ExerciseForm/ExerciseForm';
import { Route, Link } from 'react-router-dom';
import './App.css';
import AppContext from './AppContext'




class App extends Component {
  state = {
    email: null
  }

  setEmail = (email) => {
    this.setState({ email })
  }


render() {
  const contextValue = {
    email: this.state.email,
    setEmail: this.setEmail
  }

  return (
    <AppContext.Provider value={contextValue}>

      <div className="App">

        <header>
          <nav>
            <ul className='topList'>
              <li><button className='buttonz'><Link to='/'>Home</Link></button></li>
              <li><button className='buttonz'><Link to='/contact'>Contact</Link></button></li>
            </ul>
          </nav>
        </header>


        <main>
          <Route
            exact path="/"
            component={Landing}
          />

          <Route
            path="/muscle"
            component={MuscleSelector}
          />

          <Route
            path="/exercise/:muscle"
            component={ExerciseForm}
          />

          <Route
            path="/contact"
            component={Contact}
          />

        </main>

        <footer>

        </footer>

      </div>
    </ AppContext.Provider>
  );
}
}

export default App;
