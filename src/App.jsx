import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import ServicesPage from './pages/services-page/services-page';
import WorkPage from './pages/work-page/work-page';
import './App.css';
import Layout from './components/layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/services"
          element={
            <Layout>
              <ServicesPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/work"
          element={
            <Layout>
              <WorkPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
