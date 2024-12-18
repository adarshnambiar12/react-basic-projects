import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import "./Components/style/app.css";

// import { Navbar, About, Footer } from "./Components";
// import "./Components/style/app.css";

const App = () => {
    return (
      <>
        <Navbar/>
        <About/>
        <Footer/>
      </>
    );
  }

export default App;