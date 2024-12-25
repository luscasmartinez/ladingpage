import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AuthButton from './components/common/AuthButton';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}