import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
