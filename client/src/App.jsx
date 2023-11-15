// import {Routes, Route} from 'react-router-dom';

import Header from "./components/features/header/Header";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";

function App() {
  return (
    <>
      <Header />
      <main id="site-content">
        {/* <Routes> */}

        <Home />
        {/* </Routes> */}
      </main>
      <Footer />
    </>
  )
}

export default App
