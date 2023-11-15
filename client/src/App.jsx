import {Routes, Route} from 'react-router-dom';

import Header from "./components/features/header/Header";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";
import Login from "./components/features/users/login/Login";
import Register from './components/features/users/register/Register';

function App() {
  return (
    <>
      <Header />
      <main id="site-content">
        <Routes>
        <Route  path='/' element={ <Home /> }/>
        <Route  path='/login' element={ <Login /> }/>
        <Route  path='/register' element={ <Register /> }/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
