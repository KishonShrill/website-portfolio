import { scan } from 'react-scan'
import { useState, useEffect, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';

// --- React Query Setup ---
const queryClient = new QueryClient();
scan({enabled: import.meta.env.VITE_SCAN === "true",});

// --- Component Lazy Loading ---
// Use React.lazy to load page components only when needed
const Homepage = lazy(() => import('./pages/Homepage.jsx'));
const Database_List = lazy(() => import('./pages/Database_List.jsx'));
const NoPage = lazy(() => import('./pages/NoPage.jsx'));
const SpecificStudent = lazy(() => import('./components/SpecificStudent.jsx'));

// Project Pages (Lazy Loaded)
const AgeCalculatorApp = lazy(() => import('./pages/projects/AgeCalculatorApp.jsx'));
const QrCodeComponent = lazy(() => import('./pages/projects/QrCodeComponent.jsx'));
const NewsHomepage = lazy(() => import('./pages/projects/NewsHomepage.jsx'));
const ProductPreviewCard = lazy(() => import('./pages/projects/ProductPreviewCard.jsx'));
const NFTPreviewCard = lazy(() => import('./pages/projects/NftPreviewCard.jsx'));
const FourCardFeature = lazy(() => import('./pages/projects/FourCardFeature.jsx'));
const ProfileCardComponent = lazy(() => import('./pages/projects/ProfileCardComponent.jsx'));
const ResultSummaryComponent = lazy(() => import('./pages/projects/ResultsSummaryComponent.jsx'));
const InteractiveCardDetailsForm = lazy(() => import('./pages/projects/InteractiveCardDetailsForm.jsx'));
const InteractiveRatingComponent = lazy(() => import('./pages/projects/InteractiveRatingComponent.jsx'));
const NewsletterSignUpProject = lazy(() => import('./pages/projects/NewsletterSignUpProject.jsx'));
const NewsletterSignUpProjectSuccess = lazy(() => import('./pages/projects/NewsletterSignUpProjectSuccess.jsx'));
const CalculatorApp = lazy(() => import('./pages/projects/CalculatorApp.jsx'));
const BlogPreviewCard = lazy(() => import('./pages/projects/BlogPreviewCard.jsx'));
const RockPaperScissor = lazy(() => import('./pages/projects/RockPaperScissor.jsx'));


export default function App() {
  const body = document.body
  const theme = localStorage.getItem('theme');
  theme && body.classList.add(theme);


  // Theme getter for local user setting
  function themeToggle() {
    let currentTheme = localStorage.getItem('theme');
    console.log("Am I running")

    if (currentTheme === 'dark-mode') {
      localStorage.setItem('theme', 'light-mode');
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      localStorage.setItem('theme', 'dark-mode');
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  }
  
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
            <Route path="/" element={<Homepage themeToggle={themeToggle} />} exact />
            <Route path="*" element={<NoPage />} />


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
            <Route path="/projects/rock_paper_scissor" element={<RockPaperScissor title="Frontend Mentor | Rock Paper Scissor" />} />


            <Route path="/database" element={<Database_List />} />
            <Route path="/database/:studentId" element={<SpecificStudent />} />
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}