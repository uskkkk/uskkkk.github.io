import './App.css';
import Card from './components/card/Card';
import Navigator from './components/navigator/Navigator';

function App() {
  const menu = ['홈','소개','스킬','Contact']

  return (
    <div className="App">
      <Navigator 
        title="WOO SEONG PORTFOLIO"
        menu={menu}
      />
      {/* <Card/> */}
    </div>
  );
}

export default App;
