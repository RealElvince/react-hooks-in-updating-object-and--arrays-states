import logo from './logo.svg';
import './App.css';
import HookCount from './components/HookCount';
import HookCount2 from './components/HookCount2';
import HookObject from './components/HookObject';
import HookArrays from './components/HookArrays';


function App() {
  return (
    <div className="App">
      <HookCount />
      <hr/>
      <HookCount2 />
      <hr/>
      <HookObject />
      <hr/>
      <HookArrays />
    </div>
  );
}

export default App;
