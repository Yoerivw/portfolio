import Nav from "./components/Nav";
import About from './components/About';
import Work from './components/Work'
import Contact from './components/Contact'
import NumberSideBar from './layout/NumberSideBar'


function App() {



  return (
    <div className="bg-main-background">
      <Nav />
      <div className='snap-y snap-mandatory font-display h-screen overflow-scroll'>


        <About />

        <Work />

        <Contact />
      </div>
    </div>

  );
}

export default App;
