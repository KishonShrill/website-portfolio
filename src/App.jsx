import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './styles/App.css';
import './styles/modern-normalize.css';
import './styles/utils.css';

import Homepage from "./pages/Homepage.jsx";
import Database_List from "./pages/Database_List.jsx";
import Header from './components/Header.jsx'
import NoPage from './components/NoPage.jsx'
import SpecificStudent from './components/SpecificStudent.jsx';

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
        document.body.removeAttribute('className');
      }
    };

    themeToggleBtns.forEach(btn => btn.addEventListener('click', handleThemeToggle));

    return () => {
      themeToggleBtns.forEach(btn => btn.removeEventListener('click', handleThemeToggle));
    };
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    theme && document.body.classList.add(theme);
  }, []);

  useEffect(() => {
    const lazyImgs = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('loading');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    lazyImgs.forEach(img => {observer.observe(img);});
    return () => {
      observer.disconnect(); // Cleanup when component unmounts
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/website-portfolio/" element={<Homepage />} exact />
          <Route path="/website-portfolio/database" element={<Database_List />} />
          <Route path="/website-portfolio/database/:studentId" element={<SpecificStudent />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}