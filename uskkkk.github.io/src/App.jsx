import Navigator from './components/layout/Navigator';
import { Home, About, Skills, Contact } from './components/sections';
import { navigationMenu, siteTitle } from './data';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navigator title={siteTitle} menu={navigationMenu} />
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
