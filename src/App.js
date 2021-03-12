import React from 'react';
import Landing from './Landing/Landing';
import Contact from './Contact/Contact';
import MuscleSelector from './MuscleSelector/MuscleSelector';
import ExerciseForm from './ExerciseForm/ExerciseForm';
import { Route, Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
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
          path="/exercise"
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
  );
}

export default App;
