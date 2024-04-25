import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

import Loader from './components/Loading.jsx';
import Homepage from "./pages/Homepage.jsx";
import Database_List from "./pages/Database_List.jsx";
import NoPage from './components/NoPage.jsx'
import SpecificStudent from './components/SpecificStudent.jsx';

import AgeCalculatorApp from './pages/projects/AgeCalculatorApp.jsx';
import QrCodeComponent from './pages/projects/QrCodeComponent.jsx';
import NewsHomepage from './pages/projects/NewsHomePage.jsx';
import ProductPreviewCard from './pages/projects/ProductPreviewCard.jsx';
import NFTPreviewCard from './pages/projects/NFTPreviewCard.jsx';
import FourCardFeature from './pages/projects/FourCardFeature.jsx';
import ProfileCardComponent from './pages/projects/ProfileCardComponent.jsx';
import ResultSummaryComponent from './pages/projects/ResultsSummaryComponent.jsx';

export default function App() {
  // Theme getter for local user setting
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

  // I don't know what this does...
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    theme && document.body.classList.add(theme);
  }, []);

  // Intersection Observers for Lazy Classes
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
        <Loader />
        <Routes>
          <Route path="/website-portfolio/" element={<Homepage title="Website-Portfolio" />} exact />
          <Route path="/website-portfolio/projects/age_calculator_app" element={<AgeCalculatorApp title="Age Calculator App" />} />
          <Route path="/website-portfolio/projects/qr_code_component" element={<QrCodeComponent title="QR Code Component" />} />
          <Route path="/website-portfolio/projects/news_homepage" element={<NewsHomepage title="News Homepage" />} />
          <Route path="/website-portfolio/projects/product_preview_card_component" element={<ProductPreviewCard title="Product Preview Card" />} />
          <Route path="/website-portfolio/projects/nft_preview_card_component" element={<NFTPreviewCard title="NFT Preview Card Component" />} />
          <Route path="/website-portfolio/projects/four_card_feature_component" element={<FourCardFeature title="Four Card Feature Component" />} />
          <Route path="/website-portfolio/projects/profile_card_component" element={<ProfileCardComponent title="Profile Card Component" />} />
          <Route path="/website-portfolio/projects/results_summary_component" element={<ResultSummaryComponent title="Results Summary Component" />} />

          <Route path="/website-portfolio/database" element={<Database_List />} />
          <Route path="/website-portfolio/database/:studentId" element={<SpecificStudent />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}