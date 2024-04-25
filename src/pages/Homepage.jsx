import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LoadProjects from '../components/FetshProjects.jsx'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleHeaderBtnClick = () => {
    setIsNavOpen(prevState => !prevState);
  };

  useEffect(() => {
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (isNavOpen) {
      mobileNav.style.display = 'flex';
      body.style.overflowY = 'hidden';
    } else {
      mobileNav.style.display = 'none';
      body.style.overflowY = 'auto';
    }
  }, [isNavOpen]);
  return(
    <>
      <header className="header container">
        <a href="https://www.facebook.com/ChriscentProduction/">
          <img 
          className="header__logo"
          src="/website-portfolio/images/home/myLogo.png"
          alt="Cyberpunk Image made with Blender 3D"
          />
        </a>
        <nav>
          <ul className="header__menu">
            <li><Link className="header__link" to='/website-portfolio/'>Home</Link></li>
            <li><Link className="header__link" to='/website-portfolio/database'>Work</Link></li>
            <li><a className="header__link" href="/website-portfolio/#contact">Contact</a></li>
            <li className="header__line"></li>
            <li>
              <button id="theme-toggle" className="header__sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li><a className="header__explore btn">Explore</a></li>
          </ul>
          <button className="header__bars" onClick={handleHeaderBtnClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  )
}

function MobileNav() {
  const [projectDiv, setProjectDiv] = useState(false);

  useEffect(() => {
    const exploreBtnMobile = document.querySelector('.mobile-nav__btn');
    const exploreBtnWeb = document.querySelector('.header__explore');
    const closeBtn = document.querySelector('.explore-container__header');

    const handleButtonClick = () => {
      setProjectDiv(prevProjectDiv => !prevProjectDiv);
    };

    exploreBtnMobile.addEventListener('click', handleButtonClick);
    exploreBtnWeb.addEventListener('click', handleButtonClick);
    closeBtn.addEventListener('click', handleButtonClick);

    return () => {
      exploreBtnMobile.removeEventListener('click', handleButtonClick);
      exploreBtnWeb.removeEventListener('click', handleButtonClick);
      closeBtn.removeEventListener('click', handleButtonClick);
    };
  }, []);

  useEffect(() => {
    const exploreContainer = document.querySelector('.explore-container');
    const body = document.body;
    if (projectDiv) {
      exploreContainer.style.right = '0%';
      body.style.overflowY = 'hidden';
    } else {
      exploreContainer.style.right = '100%';
      body.style.overflowY = 'auto';
    }
  }, [projectDiv]);
<a  href="#featured">Work</a>
  return(
    <>
      <div className="mobile-nav">
        <nav>
          <ul className="mobile-nav__menu">
            <li><Link className="mobile-nav__link" to='/website-portfolio/'>Home</Link></li>
            <li><Link className="mobile-nav__link" to="/website-portfolio/database">Work</Link></li>
            <li><a className="mobile-nav__link" href="#contact">Contact </a></li>
            <li className="mobile-nav__link-line"></li>
            <li>
              <button id="theme-toggle" className="mobile-nav__sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li>
              <a className="mobile-nav__btn btn">Explore</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="explore-container">
        <div className="explore-container__header explore__container full-bleed" >
          <a className="explore-container__closeBtn btn">Close</a>
        </div>
        <div className="explore-container__album explore__container" id="explore__container">
          <LoadProjects />
        </div>
        <p id="error-message" style={{color: "red"}}></p>
      </div>
    </>
  )
}

function Hero() {
  return(
    <section className="hero container">
        <img className="hero__img" src="/website-portfolio/images/home/author_picture.jpg" alt="Profile Picture" />
        <h2 className="hero__subtitle">Hello, I am Chriscent 👋</h2>
        <h1 className="hero__title">COMPUTER SCIENCE <br /> WEB DEVELOPER</h1>
        <p className="hero__description">
          I am an aspiring <strong>Front-End Web Developer</strong> currently 
          pursuing a degree in <strong>Computer Science</strong>. I'm also deeply 
          passionate about 3D Art, and I regularly create captivating designs using 
          the software <strong><a href="https://www.blender.org/" target="_blank">Blender</a></strong>.
        </p>
        <a className="hero__btn btn" href="https://www.facebook.com/ChriscentProduction/">My Social</a>
    </section>
  );
}

function About() {
  const gotoBlender = () => {
    window.location.href = 'https://www.blender.org/';
  };  

  return(
    <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p className="about__description">I'm <strong>Chriscent</strong>, a
            computer science student studying at
            Mindanao State University Iligan Instutie of Technology
            with a passion for front-end development.
          </p>
          <p className="about__description">
            When I'm not coding, you'll often find me castling a line while
            fishing, knocking
            down pins at the bowling alley, or jamming out to music.
          </p>
          <p className="about__description">I embrace my unique quirks,
            comining a touch of weirdness with boundless enthusiasm. I may be a
            bit crazy at times,
            but I'm also a loyal fun-loving freind to have by your side.
          </p>
          <hr className="about__hr" />
          <h3 className="about__subtitle">Technologies</h3>
          <div className="about__ul">
            <div className="about__list"><img 
              className='lazy loading' 
              src="https://fakeimg.pl/300x300" 
              data-src="/website-portfolio/images/components/icons8-html-logo.svg"
              alt="HTML" /><p>HTML</p>
            </div>
            <div className="about__list"><img 
              className='lazy loading' 
              src="https://fakeimg.pl/300x300" 
              data-src="/website-portfolio/images/components/icons8-css-logo.svg"
              alt="CSS" /><p>CSS</p>
            </div>
            <div className="about__list"><img 
              className='lazy loading' 
              src="https://fakeimg.pl/300x300" 
              data-src="/website-portfolio/images/components/icons8-java-logo.svg"
              alt="Java" /><p>Java</p>
            </div>
            <div className="about__list"><img 
              className='lazy loading' 
              src="https://fakeimg.pl/300x300" 
              data-src="/website-portfolio/images/components/icons8-c-programming.svg"
              alt="C" /><p>C</p>
            </div>
            <div className="about__list"><img 
              className='lazy loading' 
              src="https://fakeimg.pl/300x300" 
              data-src="/website-portfolio/images/components/icons8-c++.svg"
              alt="C++" /><p>C++</p>
            </div>
            <div className="about__list" onClick={gotoBlender} style={{ cursor: 'pointer' }}><img 
              className='lazy loading' 
              src="https://fakeimg.pl/300x300" 
              data-src="/website-portfolio/images/components/blender_icon_256x256.png"
              alt="Blender 3D" /><p>Blender 3D</p>
            </div>
          </div>
        </div>
        <div className="about__img-wrapper">
          <img 
            className="about__img lazy loading"
            src="https://fakeimg.pl/2160/?retina=1&text=ニャー&font=noto"
            data-src="/website-portfolio/images/home/Cyberpunk_Final_Render_woBack.png"
            alt="Cyberpunk Image made with Blender 3D" />
        </div>
      </section>
  )
}

function Featured() {
  return(
    <section id="featured" className="featured container section">
      <h3 className="featured__subtitle">Featured Projects</h3>
      <div className="featured__wrapper">
        <h2 className="featured__title">Chriscent Productions</h2>
        <a className="featured__link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        </a>
      </div>
      <p className="featured__description">
        As an author, I take immense pride in showcasing my featured picture projects. 
        Each image is a window into the worlds I've created with words, a visual testament 
        to the stories I've woven. Through these captivating visuals, I invite visioners to 
        embark on journeys that transcend the captured photos, offering them a deeper connection 
        to the narratives I've crafted.</p>
      <div className="featured__info-container">
        <div>
          <h3 className="featured__label">Skill Stack</h3>
          <ul className="featured__skill-stack">
            <li className="featured__info">Web Development</li>
            <li className="featured__info">Blender 3D</li>
            <li className="featured__info">Social Media Analyst</li>
            <li className="featured__info">Camera Operator</li>
            <li className="featured__info">Video Editor</li>
            <li className="featured__info">Photographer</li>
          </ul>
        </div>
        <div>
          <h3 className="featured__label">Project Type</h3>
          <p className="featured__info">Web Design & 3D Art</p>
        </div>
        <div>
          <h3 className="featured__label">Timeline</h3>
          <p className="featured__info">September 2023 - present</p>
        </div>
      </div>
      <div className="featured__img-container">
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1050x600/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/MAS-AMiCUS.png" 
            alt="Chriscent Production" />
        </div>
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/love.png" 
            alt="Chriscent Production" />
        </div>  
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/DadDay.png" 
            alt="Chriscent Production" />
        </div>
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/easyanimate0001.png"
            alt="Chriscent Production" />
        </div>
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1001/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/news-home.png" 
            alt="Chriscent Production" />
        </div>
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/car.png" 
            alt="Chriscent Production" />
        </div>
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/CouchFinalDesktop.png"
            alt="Chriscent Production" />
        </div>
        <div className="featured__img-wrapper">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
            data-src="/website-portfolio/images/featured/leche_flan.png" 
            alt="Chriscent Production" />
        </div>
      </div>
    </section>
  )
}

function Work() {
  return(
    <section className="work container section">
      <h2 className="work__title">Projects</h2>
      <p className="work__description">
        Here are some of the rendered artworks I've created during 
        moments when I needed a break or found myself looking for 
        creative inspiration outside of web development. Explore my 
        artistic side below:</p>
      <div className="work__container">
        <h3 className="work__project-title">Planet Earth</h3>
        <div className="work__img-wrapper work__project-image1">
          <img 
            className="lazy loading"  
            src="https://fakeimg.pl/1080x1080/?retina=1&text=ニャー&font=noto"
            data-src="/website-portfolio/images/work/Earth.png"
            alt="A 3D Model picture of planet Earth" />
        </div>
        <div className="work__project work__project-content1">
          <h3 className="work__project-subtitle">Planet Earth</h3>
          <p className="work__project-description1">
            Picture Earth as a masterpiece of vibrant colors and intricate 
            details. From space, it's a breathtaking canvas painted with various 
            shades of blue, with the deep oceans resembling rich indigo and the 
            continents adorned in lush greens and earthy browns.
          </p>
          <p className="work__project-description2">
            It's a picture of harmony, where the delicate balance of ecosystems and 
            the interconnectedness of all life forms create an awe-inspiring visual symphony.
          </p>
          <a className="btn work__project-btn" href="https://www.instagram.com/arts.tic_musician/">See More</a>
        </div>
        
        <h3 className="work__project-title">Low Poly Room</h3>
        <div className="work__img-wrapper work__project-image2">
          <img 
            className="lazy loading" 
            src="https://fakeimg.pl/1080x1080/?retina=1&text=ニャー&font=noto" 
            data-src="/website-portfolio/images/work/somewhat low poly.png"
            alt="A low-poly 3D modeled bedroom" />
        </div>
        <div className="work__project work__project-content2">
          <h3 className="work__project-subtitle">Low Poly Room</h3>
          <p className="work__project-description1">
            In this low-poly 3D-rendered student bedroom, simplicity meets 
            functionality. The minimalist design features clean lines, muted 
            colors, and basic geometric shapes, creating a tranquil space 
            conducive to focused study.
          </p>
          <p className="work__project-description2">
            Compact and efficient, this room maximizes every inch, offering a 
            cozy haven where students can find both comfort and inspiration in 
            their academic pursuits.
          </p>
          <a className="btn work__project-btn" href="https://www.instagram.com/arts.tic_musician/">See More</a>
        </div>
        
        <h3 className="work__project-title">Weird Object</h3>
        <div className="work__img-wrapper work__project-image3">
          <img 
            className="lazy loading"  
            src="https://fakeimg.pl/2160x2160/?retina=1&text=ニャー&font=noto"
            data-src="/website-portfolio/images/work/Weird Object.png"
            alt="A 3D model of a weird shaped object" />
        </div>
        <div className="work__project work__project-content3">
          <h3 className="work__project-subtitle">Weird Object</h3>
          <p className="work__project-description1">
            This enigmatic object defies conventional comprehension, a 
            perplexing creation that even, I, the creator cannot unravel. Its 
            form is a whimsical blend of disparate elements, an abstract 
            collage of shapes and materials that defy categorization.
          </p>
          <p className="work__project-description2">
            It exists as an intriguing enigma, inviting viewers to ponder 
            its existence and draw their own interpretations from its inscrutable 
            presence, reminding us that art can be a boundless realm of the 
            inexplicable and mysterious.
          </p>
          <a className="btn work__project-btn" href="https://www.instagram.com/arts.tic_musician/">See More</a>
        </div>
      </div>
    </section>
  )
}

export default function Homepage(props) {
  useEffect(() => {document.title = props.title}, [])
  useEffect(() => {
    import('../styles/App.css')
    import('../styles/modern-normalize.css')
    import('../styles/utils.css')

    import('../styles/components/preload.css')
    import('../styles/components/header.css')
    import('../styles/components/hero.css')
    import('../styles/components/about-me.css')
    import('../styles/components/featured.css')
    import('../styles/components/work.css')
    import('../styles/components/contact.css')
    import('../styles/components/footer.css')
    import('../styles/components/comments.css')
    import('../styles/components/mobile-nav.css')
    import('../styles/components/explore-container.css')
  }, [])

  return(
    <>
      <Header />
      <MobileNav />

      <main className="container">
        <Hero />
        <About />
        <Featured />
        <Work />
      </main>

      <section className="contact container section" id="contact">
        <h2 className="contact__title">Get In Contact</h2>
        <p className="contact__description">
          Whether you are starting a project, have business
          inquiries or just
          want to say hi, my inbox is always open so feel free
          to reach out and
          I will get back to you as soon as possible.
        </p>
        <a className="contact__btn btn"
          href="mailto:chriscentlouisjune.pingol@g.msuiit.edu.ph"
          target="_blank">Reach out!</a>
      </section>

      <footer className="footer container section">
        <h3 className="footer__title"><strong>~ Chriscent Production ~</strong></h3>
      </footer>
    </>
  );
}