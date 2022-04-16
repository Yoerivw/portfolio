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
    isContactPage = true;
    isWorkPage = false;
  }

  return (
    <div className='bg-main-background font-display'>
      <Nav onWorkClick={onWorkClickHandler} />
      <About />
      {/* <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
