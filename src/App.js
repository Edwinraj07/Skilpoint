
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import { Menu } from './components/Menu';
import { Categories } from './components/categories';
import About from './components/skillset';
import Photos from './components/card';
import Contact from './components/contact';


function App() {
  return (
    <>
    <Menu/>
   <Home/>
   <Categories/>
   <About/>
   <Photos/>
   <Contact/>
 
    </>
  );
}

export default App;
