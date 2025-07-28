import './App.css';
import Sidebar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
import Hatbot from './components/chatbot';




function App() {
  function remove(){
    let list = document.querySelector(".listul");
    list.classList.remove("listToggle")
  }
  return (
    <>
      <Sidebar fn = {remove}/>
      <Home fn = {remove}/>
      <About fn = {remove}/>
      <Resume fn = {remove}/>
      <Contact fn = {remove}/>
      <Footer fn = {remove}/>
      
      {/* <Hatbot/> */}
    </>
  );
}

export default App;
