import './App.css';
import Card from './components/card/Card';
import Navigator from './components/navigator/Navigator';

function App() {
  return (
    <div className="App">
      <Navigator 
        title="WOO SEONG PORTFOLIO"
        home="Home"
        skill="Skill"
        contact="Contact"
      />
      {/* <Card/> */}
    </div>
  );
}

export default App;
