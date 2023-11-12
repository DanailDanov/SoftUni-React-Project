

import Header from "./components/features/header/Header";
import SiteBanner from "./components/features/home/SiteBanner";
import Footer from "./components/features/footer/Footer";

function App() {
  return (
    <>
    <Header />
    <main className="site-content">
    <SiteBanner />
    </main>
    <Footer />
    </>
  )
}

export default App
