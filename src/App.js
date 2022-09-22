import Nav from './components/Nav/Nav';
import './App.css';
import BioData from './components/BioData/BioData';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <>
    <Nav />
    <div className="container">
    <BioData />
    <Gallery />
    </div>
    </>
  );
}

export default App;
