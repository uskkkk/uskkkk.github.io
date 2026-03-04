import Navigator from './components/layout/Navigator';
import Footer from './components/layout/Footer';
import { Home, About, Skills, Experience } from './components/sections';
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
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
