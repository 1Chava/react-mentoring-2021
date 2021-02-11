import './App.css';
import MyComponent from './components/MyComponent';
import MyPureComponent from './components/MyPureComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="element"></div>
        <MyComponent type='Component' />
        <MyPureComponent type='Pure Component' />
        <FunctionalComponent type='Functional Component' />
      </header>
    </div>
  );
}

export default App;
