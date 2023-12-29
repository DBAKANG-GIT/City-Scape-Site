import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page-section/landing-page.jsx';
import AboutPage from './pages/about-page-section/about-page.jsx';
import ContactPage from './pages/contact-page-section/contact-page.jsx';
import ServicesPage from './pages/services-page-section/services-page.jsx';
import Layout from './components/layout-section/layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="CityScape | Home">
              <LandingPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <Layout title="CityScape | About">
              <AboutPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/services"
          element={
            <Layout title="CityScape | Services">
              <ServicesPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <Layout title="CityScape | Contact">
              <ContactPage />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
