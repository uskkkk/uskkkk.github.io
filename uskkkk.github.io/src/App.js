import './App.css';
import Card from './components/card/Card';
import Navigator from './components/navigator/Navigator';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Skill from './components/sections/Skill';

function App() {
  const menu = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '소개' },
  { id: 'skills', label: '스킬' },
  { id: 'contact', label: 'Contact' },
];

  return (
    <div className="App">
      <Navigator 
        // title="@KIMUSEONG | PORTFOLIO"
        title="#"
        menu={menu}
      />
      <main>
        <section id='home'><Home/></section>
        <section id='about'><About/></section>
        <section id='skills'><Skill/></section>
        <section id='contact'><Contact/></section>
      </main>
    </div>
  );
}

export default App;
