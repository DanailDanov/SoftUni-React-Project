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
import GuestGuard from './components/guards/GuestGuard';
import AuthGuard from './components/guards/AuthGuard';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
function App() {
  return (

    <ErrorBoundary>
      <AuthProvider>
        <Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allTeams' element={<AllTeams />} />
            <Route path='/detailsTeam/:teamId' element={<DetailsTeam />} />

            <Route path='/allNews' element={<AllNews />} />
            <Route path='/detailsNews/:newsId' element={<DetailsNews />} />

            <Route element={< AuthGuard />}>
              <Route path='/createTeam' element={<CreateTeam />} />
              <Route path='/editTeam/:teamId' element={<EditTeam />} />

              <Route path='/createNews' element={<CreateNews />} />
              <Route path='/editNews/:newsId' element={<EditNews />} />

              <Route path='/profile' element={<Profile />} />
            </Route>

            <Route element={< GuestGuard />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
