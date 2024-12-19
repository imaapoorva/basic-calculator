
import './App.css';
import BasicCalculator from './BasicCalculator/BasicCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header" role="banner" aria-label="Application Header">
        <h1>Basic Calculator</h1>
          <main>
            <BasicCalculator />
          </main>
      </header>
    </div>
  );
}

export default App;
