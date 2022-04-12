import Nav from "./components/Nav";
import About from './components/About';
import Work from './components/Work'
import Contact from './components/Contact'


function App() {

  let isAboutPage = true;
  let isWorkPage = false;
  let isContactPage = false;

  const onWorkClickHandler = () => {
    isAboutPage = false;
    isContactPage = false;
    isWorkPage = true;
  }

  return (
    <div className="bg-main-black w-screen h-screen p-3">
      <Nav onWorkClick={onWorkClickHandler} />
      {isAboutPage && !isWorkPage && !isContactPage && <About />}
      {isWorkPage && <Work />}
      {isContactPage && <Contact />}
    </div>
  );
}

export default App;
