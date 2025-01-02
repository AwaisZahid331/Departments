import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ComputerScience from './MyComponents/ComputerScience';
import Physics from './MyComponents/Physics';
import Chemistry from './MyComponents/Chemistry';
import Psychology from './MyComponents/Psychology';
import Biology from './MyComponents/Biology';
import Maths from './MyComponents/Maths';
import Botnay from './MyComponents/Botnay';
import Bba from './MyComponents/Bba';
import Islam from './MyComponents/Islam';

import Footer from './MyComponents/Footer';
import Navbar from './MyComponents/Navbar';

function App() {
  return (
    <Router>

      <Layout>
        <Routes>
          <Route path="/ComputerScience" element={<ComputerScience />} />
          <Route path="/Physics" element={<Physics />} />
          <Route path="/Chemistry" element={<Chemistry />} />
          <Route path="/Psychology" element={<Psychology />} />
          <Route path="/Biology" element={<Biology />} />
          <Route path="/Maths" element={<Maths />} />
          <Route path="/Botnay" element={<Botnay />} />
          <Route path="/Bba" element={<Bba />} />
          <Route path="/Islam" element={<Islam />} />


        </Routes>
      </Layout>
    </Router>
  );
}

// Layout Component to Manage Navbar and Footer Rendering
const Layout = ({ children }) => {
  const location = useLocation();
  const departmentRoutes = [
    '/ComputerScience',
    '/Physics',
    '/Chemistry',
    '/Biology',
    '/Maths',
    '/Psychology',
    '/Botnay',
    '/Bba',
    '/Islam',
  ];
  const showHeaderFooter = !departmentRoutes.includes(location.pathname); // Hide for department routes

  return (
    <>
      {showHeaderFooter && <Navbar />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default App;
