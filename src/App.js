import './App.css';
import Sidebar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';




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
      
      {/* Chatbot removed: If needed, add a compatible chatbot component here. */}
    </>
  );
}

export default App;
