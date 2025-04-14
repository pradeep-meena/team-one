
import {BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import './App.css';
import BusinessBanner from './Component/BusinessBanner';
import Fearture from './Component/Fearture';
import FeaturePage from './Component/FeaturePage';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Pricing from './Component/Pricing';
import DashboardSummary from './DashboardSummary';
import Home from './Component/Home';
import IntegrationPage from './Component/IntegrationPage';
import Contact from './Component/Contact';
import AuthForm from './Component/auth/AuthPage';
import ContactSupport from './Component/ContactSupport';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />   
    </>
  );
}

function App() {
  return (
    <>
   <Router>
   <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="features" element={<FeaturePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="integration" element={<IntegrationPage/>} />
          <Route path="dashboard" element={<DashboardSummary />} />
          <Route path="business-banner" element={<BusinessBanner />} />
          <Route path="fearture" element={<Fearture />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact-support" element={<ContactSupport />} />
        </Route>
      </Routes>
   </Router>
    </>
  );
}

export default App;
