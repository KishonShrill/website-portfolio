import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

import Homepage from "./pages/Homepage.jsx";
import Database_List from "./pages/Database_List.jsx";
import NoPage from './components/NoPage.jsx'
import SpecificStudent from './components/SpecificStudent.jsx';

import AgeCalculatorApp from './pages/projects/AgeCalculatorApp.jsx';
import QrCodeComponent from './pages/projects/QrCodeComponent.jsx';
import NewsHomepage from './pages/projects/NewsHomepage.jsx';
import ProductPreviewCard from './pages/projects/ProductPreviewCard.jsx';
import NFTPreviewCard from './pages/projects/NftPreviewCard.jsx';
import FourCardFeature from './pages/projects/FourCardFeature.jsx';
import ProfileCardComponent from './pages/projects/ProfileCardComponent.jsx';
import ResultSummaryComponent from './pages/projects/ResultsSummaryComponent.jsx';
import InteractiveCardDetailsForm from './pages/projects/InteractiveCardDetailsForm.jsx';
import InteractiveRatingComponent from './pages/projects/InteractiveRatingComponent.jsx';
import NewsletterSignUpProject from './pages/projects/NewsletterSignUpProject.jsx';
import NewsletterSignUpProjectSuccess from './pages/projects/NewsletterSignUpProjectSuccess.jsx';
import CalculatorApp from './pages/projects/CalculatorApp.jsx';
import BlogPreviewCard from './pages/projects/BlogPreviewCard.jsx';

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
        <Routes>
          <Route path="/" element={<Homepage title="Website-Portfolio" />} exact />
          <Route path="/projects/age_calculator_app" element={<AgeCalculatorApp title="Frontend Mentor | Age Calculator App" />} />
          <Route path="/projects/qr_code_component" element={<QrCodeComponent title="Frontend Mentor | QR Code Component" />} />
          <Route path="/projects/news_homepage" element={<NewsHomepage title="Frontend Mentor | News Homepage" />} />
          <Route path="/projects/product_preview_card_component" element={<ProductPreviewCard title="Frontend Mentor | Product Preview Card" />} />
          <Route path="/projects/nft_preview_card_component" element={<NFTPreviewCard title="Frontend Mentor | NFT Preview Card Component" />} />
          <Route path="/projects/four_card_feature_component" element={<FourCardFeature title="Frontend Mentor | Four Card Feature Component" />} />
          <Route path="/projects/profile_card_component" element={<ProfileCardComponent title="Frontend Mentor | Profile Card Component" />} />
          <Route path="/projects/results_summary_component" element={<ResultSummaryComponent title="Frontend Mentor | Results Summary Component" />} />
          <Route path="/projects/interactive_card_details_form" element={<InteractiveCardDetailsForm title="Frontend Mentor | Interactive Card Details Form Component" />} />
          <Route path="/projects/interactive_rating_component" element={<InteractiveRatingComponent title="Frontend Mentor | Interactive Rating Component" />} />
          <Route path="/projects/newsletter_sign_up_with_success_message" element={<NewsletterSignUpProject title="Frontend Mentor | Newsletter Sign Up" />} />
          <Route path="/projects/newsletter_sign_up_with_success_message/success" element={<NewsletterSignUpProjectSuccess title="Frontend Mentor | Newsletter Sign Up Success" />} />
          <Route path="/projects/calculator_app" element={<CalculatorApp title="Frontend Mentor | CalculatorApp" />} />
          <Route path="/projects/blog_preview_card" element={<BlogPreviewCard title="Frontend Mentor | Blog Preview Card" />} />


          <Route path="/database" element={<Database_List />} />
          <Route path="/database/:studentId" element={<SpecificStudent />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}