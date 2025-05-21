import { scan } from 'react-scan'
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';

// --- React Query Setup ---
const queryClient = new QueryClient();
scan({enabled: import.meta.env.VITE_SCAN === "true",});

// --- Component Lazy Loading ---
// Use React.lazy to load page components only when needed
const Homepage = lazy(() => import('./pages/Homepage.jsx'));
const Database_List = lazy(() => import('./pages/Database_List.jsx'));
const NoPage = lazy(() => import('./components/NoPage.jsx'));
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
  // Theme getter for local user setting
  useEffect(() => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    const theme = localStorage.getItem('theme');
    theme && document.body.classList.add(theme);
    
    function handleThemeToggle() {
      let currentTheme = localStorage.getItem('theme');

      if (currentTheme === 'dark-mode') {
        localStorage.setItem('theme', 'light-mode');
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
      } else {
        localStorage.setItem('theme', 'dark-mode');
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
      }
    };
    
    themeToggleBtns.forEach(btn => btn.addEventListener('click', handleThemeToggle));
    return () => {
      themeToggleBtns.forEach(btn => btn.removeEventListener('click', handleThemeToggle));
    };
  }, []);

  //! Removed the useEffect hooks for theme toggling via direct DOM manipulation.
  //! The theme button should now be a React component using `toggleTheme`.

  //? Removed the useEffect hook for IntersectionObserver for lazy images.
  //? You should create a <LazyImage src="..." placeholder="..." /> component
  //? that handles its own IntersectionObserver logic internally using useRef.

  //TODO - Example: Basic structure for a LazyImage component (implement fully separately)
  /*
  function LazyImage({ src, alt, placeholder, ...props }) {
    const imgRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(placeholder || ''); // Start with placeholder

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isLoaded) {
              setCurrentSrc(src); // Set the actual source
              setIsLoaded(true);
              observer.unobserve(entry.target); // Stop observing
            }
          });
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
        observer.disconnect();
      };
    }, [src, isLoaded, placeholder]); // Rerun if src changes

    return <img ref={imgRef} src={currentSrc} alt={alt} {...props} />;
  }
  */

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
        {/* <Suspense fallback={
          <div className="loader-wrapper">
            <img className="imageSpin" src="/images/home/preloadLogo.jpg" alt="" />
          </div>
        }> */}
          <Routes>
            <Route path="/" element={<Homepage />} exact />
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
            <Route path="*" element={<NoPage />} />
          </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/> */}
    </QueryClientProvider>
  );
}