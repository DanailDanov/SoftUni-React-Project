

import Header from "./components/features/header/Header";
import SiteBanner from "./components/features/home/SiteBanner";
import Footer from "./components/features/footer/Footer";
import LatestNews from "./components/features/home/latestNews/LatestNews";

function App() {
  return (
    <>
    <Header />
    <main className="site-content">
    <SiteBanner />
    <LatestNews />
    </main>
    <Footer />
    </>
  )
}

export default App
