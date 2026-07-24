import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Products.css';
import './styles/WhyUs.css';
import './styles/Gallery.css';
import './styles/Contact.css';
import './styles/Footer.css';
import './styles/Preloader.css';
import './styles/QuickActions.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
