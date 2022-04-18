import Nav from "./components/Nav";
import About from './components/About';
import Work from './components/Work'
import Contact from './components/Contact'
import NumberSideBar from "./layout/NumberSideBar";


function App() {

  let isAboutPage = true;
  let isWorkPage = false;
  let isContactPage = false;

  const onWorkClickHandler = () => {
    isAboutPage = false;
    isContactPage = true;
    isWorkPage = false;
  }

  return (
    <div className="bg-main-background">
      <Nav onWorkClick={onWorkClickHandler} />
      <div className=' font-display flex min-h-screen'>
        <NumberSideBar />
        <About />
        {/* <Work />
      <Contact /> */}
      </div>
    </div>

  );
}

export default App;
