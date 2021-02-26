import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { Route, Redirect } from 'react-router-dom';
import Projects from './Components/Projects.js';

function App() {
  return (
    <div className="App">
      <main>
        <Route path="/home" component={Home}/>
        <Route path="/" render={() => <Redirect to="/home"/> } />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/contact" component={Contact} /> */}
      </main>
    </div>
  );
}

export default App;
