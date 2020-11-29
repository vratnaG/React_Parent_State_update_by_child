import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Parent state contorl by child</div>
        <Parent />
      </header>
    </div>
  );
}

export default App;
