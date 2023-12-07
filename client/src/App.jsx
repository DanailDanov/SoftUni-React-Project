import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/features/header/Header";
import Footer from "./components/features/footer/Footer";
import Home from "./components/features/home/Home";
import Login from "./components/features/users/login/Login";
import Register from './components/features/users/register/Register';
import CreateTeam from './components/features/teams/createTeam/CreateTeam';
import AllTeams from './components/features/teams/allTeams/AllTeams';
import DetailsTeam from './components/features/teams/detailsTeam/DetailsTeam';
import EditTeam from './components/features/teams/editTeam/EditTeam';
import CreateNews from './components/features/news/createNews/CreateNews';
import AllNews from './components/features/news/allNews/AllNews';
import DetailsNews from './components/features/news/detailsNews/DetailsNews';
import EditNews from './components/features/news/editNews/EditNews';
import NotFound from './components/features/notFound/NotFound';
import Profile from './components/features/users/profile/Profile';

function App() {
  return (
    <AuthProvider>
      
      <Header />
      <main id="site-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allTeams' element={<AllTeams />} />
          <Route path='/createTeam' element={<CreateTeam />} />
          <Route path='/detailsTeam/:teamId' element={<DetailsTeam />} />
          <Route path='/editTeam/:teamId' element={<EditTeam />} />

          <Route path='/allNews' element={<AllNews />} />
          <Route path='/createNews' element={<CreateNews />} />
          <Route path='/detailsNews/:newsId' element={<DetailsNews />} />
          <Route path='/editNews/:newsId' element={<EditNews />} />
          <Route path='/profile' element={<Profile />} />


          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>
      <Footer />

    </AuthProvider>
  )
}

export default App
