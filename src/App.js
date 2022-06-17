import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter/>
      <Timer/>
    </div>
  );
}

export default App;
