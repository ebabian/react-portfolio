import './App.css';
import Home from './Components/Home';
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Route path="/home" component={Home}/>
        <Route path="/" render={() => <Redirect to="/home"/> } />
      </main>
    </div>
  );
}

export default App;
