import { useEffect, useState, useRef, Suspense, lazy, useCallback, useMemo } from 'react';

import('../styles/components/header.css')
import('../styles/components/hero.css')
import('../styles/components/about-me.css')
import('../styles/components/featured.css')
import('../styles/components/work.css')
import('../styles/components/contact.css')
import('../styles/components/footer.css')
import('../styles/components/mobile-nav.css')
import('../styles/components/explore-container.css')

const LoadProjects = lazy(() => import('../components/FetchProjects.jsx'))
import DisplayTools from '../components/DisplayTools.jsx';
import DisplayProject from '../components/DisplayProject.jsx';
import TechIcon from '../components/TechIcon.jsx';
import Button from '../components/Button.jsx';
import LazyImage from '../components/LazyImage.jsx';


export default function Homepage({setIsThemeToggle}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const mobileNavRef = useRef(null)
  const exploreBtnRef = useRef(null)
  const body = document.body;
  
  const handleHeaderBtnClick = useCallback((outside) => {
    if (isClicked == false) setIsClicked(true)
    if (outside) {setIsNavOpen(prevState => !prevState);}
  }, [isClicked]);

  const renderHeaderAndNav = useMemo(() => [
    <>
      <Header 
        handleClick={handleHeaderBtnClick}
        exploreBtnRef={exploreBtnRef}
        themeToggleRef={setIsThemeToggle}
        isClicked={isClicked} />
      <MobileNav 
        handleClick={handleHeaderBtnClick}
        exploreBtnRef={exploreBtnRef}
        themeToggleRef={setIsThemeToggle}
        mobileNavRef={mobileNavRef} body={body} />
    </>
  ], []) // I swear, I feel like I am over engineering my web portfolio just to make it run faster -_-

  useEffect(() => {
    if (isNavOpen) {
      mobileNavRef.current.style.display = 'flex';
      body.style.overflowY = 'hidden';
    } else {
      mobileNavRef.current.style.display = 'none';
      body.style.overflowY = 'auto';
    }
  }, [isNavOpen]);

  return (
    <>
      {renderHeaderAndNav}

      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <main className="container">
          <section className="hero container">
            <img className="hero__img" src="/images/home/author_picture.jpg" alt="Profile Picture" />
            <h2 className="hero__subtitle">Hello, I am Chriscent <span className='hero__subtitle-wave'>👋</span></h2>
            <h1 className="hero__title">FRONT-END <br /> WEB DEVELOPER</h1>
            <p className="hero__description">
              I’m a <strong>Front-End Web Developer</strong> based in Iligan City,
              Philippines, currently pursuing a degree in <strong>Computer Science</strong>.
              I also explore <strong>3D Art</strong> in my free time, occasionally creating
              visual designs using <strong><a href="https://www.blender.org/" target="_blank">Blender</a></strong>.
            </p>
            <div className='hero__actions'>
              <Button className={"hero__btn"} weight={700} text={"My Socials"} link={"#contact"} />
              <Button className={"hero__btn"} weight={700} text={"Resume"} link="/documents/chriscent_resume.pdf" target="_blank" />
              <Button className={"hero__btn"} weight={700} text={"Download"} link="/documents/chriscent_resume.pdf" download />
            </div>
          </section>

          <section id="about" className="about container section">
            <div className="about__content">
              <h2 className="about__title">About</h2>
              <p className="about__description">I'm <strong>Chriscent</strong>, a
                computer science student at
                Mindanao State University Iligan - Institute of Technology,
                focused on front-end development and building real-world web applications.
              </p>
              <p className="about__description">
                Outside of tech, I'm into fishing, bowling, and music — hobbies that keep me grounded and refreshed.
              </p>
              <p className="about__description">
                I value <b>curiosity</b>, <b>good energy</b>, and <strong>teamwork</strong>, and I'm always up for learning something new or solving interesting problems.
              </p>

              <hr className="about__hr" />
              <h3 className="about__subtitle">Technologies</h3>

              <div className="about__ul">
                <DisplayTools className="about__list" image="/images/components/icons8-html-logo.svg" text="HTML" />
                <DisplayTools className="about__list" image="/images/components/icons8-css-logo.svg" text="CSS" />
                <DisplayTools className="about__list" image="/images/components/icons8-javascript.svg" text="JavaScript" />
                <DisplayTools className="about__list" image="/images/components/icons8-mongodb.svg" text="MongoDB" />
                <DisplayTools className="about__list" image="/images/components/icons8-express-js.svg" text="Express.js" />
                <DisplayTools className="about__list" image="/images/components/react.svg" text="React.js" />
                <DisplayTools className="about__list" image="/images/components/icons8-nodejs.svg" text="Node.js" />
                <DisplayTools className="about__list" image="/images/components/icons8-sass.svg" text="SASS" />
              </div>
            </div>

            <div className="about__img-wrapper">
              <LazyImage 
                className='about__img'
                src="https://fakeimg.pl/2160/?retina=1&text=ニャー&font=noto"
                data-src="/images/home/Cyberpunk_Final_Render_woBack.png"
                alt="Cyberpunk Image made with Blender 3D" />
            </div>
          </section>

          <Work />
          <Featured />
        </main>
      </Suspense>

      <section className="contact container section" id="contact">
        <h2 className="contact__title">Get In Contact</h2>
        <p className="contact__description">
          Whether you are starting a project, have business
          inquiries or just
          want to say hi, my inbox is always open so feel free
          to reach out and
          I will get back to you as soon as possible.
        </p>
        <div className='contact__socials'>
          <a href="https://www.facebook.com/Perseque"><img className='contact__socials-item' src="/images/components/icons8-facebook.svg" alt="" /></a>
          <a href="https://www.frontendmentor.io/profile/KishonShrill"><img className='contact__socials-item' style={{padding: "3px"}} src="/images/components/frontendmentor.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/chriscent-louis-june-pingol"><img className='contact__socials-item' src="/images/components/icons8-linkedin.svg" alt="" /></a>
          <a href="https://github.com/KishonShrill"><img className='contact__socials-item' src="/images/components/icons8-github.svg" alt="" /></a>
        </div>
        <Button className={"contact__btn"} weight={700} link={"mailto:chriscentlouisjune.pingol@g.msuiit.edu.ph"} text={"Reach out!"} />
      </section>

      <footer className="footer container section">
        <h3 className="footer__title"><strong>~ Chriscent Production ~</strong></h3>

        <ul className='footer__list'>
          <li>
            <a target="_blank" href="https://icons8.com/">Icons</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
        </ul>
      </footer>
    </>
  );
}


function Header({ handleClick, isClicked, exploreBtnRef, themeToggleRef }) {
  return (
    <>
      <header className="header container">
        <a href="https://www.facebook.com/ChriscentProduction/">
          <img
            className="header__logo"
            src="/images/home/myLogo.png"
            alt="Cyberpunk Image made with Blender 3D"
          />
        </a>
        <nav>
          <ul className="header__menu">
            <li><a className="header__link" href='#'>Home</a></li>
            <li><a className="header__link" href='#work'>Work</a></li>
            <li><a className="header__link" href="#contact">Contact</a></li>
            <li className="header__line"></li>
            <li>
              <button id="theme-toggle" className="header__sun" onClick={() => themeToggleRef(prev => !prev)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li className='relative'>
              <a className="header__explore btn" ref={exploreBtnRef} onClick={() => handleClick(false)}>Explore</a>
              {!isClicked && <img className='absolute' style={{left: "-2rem", top: "1.5rem", transform: "rotateZ(65deg)"}} src="/images/components/icons8-double-tap-gesture.gif" alt="Click Here" />}
            </li>
          </ul>
          <button className="header__bars relative" onClick={() => handleClick(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
            </svg>
            {!isClicked && <img className='absolute' style={{left: "-0.75rem", top: "0.75rem", transform: "rotateZ(65deg)"}} src="/images/components/icons8-double-tap-gesture.gif" alt="Click Here" />} 
          </button>
        </nav>
      </header>
    </>
  )
}

function MobileNav({ handleClick, mobileNavRef, exploreBtnRef, body, themeToggleRef }) {
  const [projectDiv, setProjectDiv] = useState(false);
  const [isClicked, setIsClicked] = useState(false)

  const mobileNavBtnRef = useRef(null)
  const closeBtnRef = useRef(null)
  const exploreContainerRef = useRef(null)

  useEffect(() => {
    const handleButtonClick = () => {
      if (isClicked == false) setIsClicked(true)
      setProjectDiv(prevProjectDiv => !prevProjectDiv);
    };

    mobileNavBtnRef.current.addEventListener('click', handleButtonClick);
    exploreBtnRef.current.addEventListener('click', handleButtonClick);
    closeBtnRef.current.addEventListener('click', handleButtonClick);

    return () => {
      mobileNavBtnRef.current.removeEventListener('click', handleButtonClick);
      exploreBtnRef.current.removeEventListener('click', handleButtonClick);
      closeBtnRef.current.removeEventListener('click', handleButtonClick);
    };
  }, []);

  useEffect(() => {
    if (projectDiv) {
      exploreContainerRef.current.style.right = '0%';
      body.style.overflowY = 'hidden';
    } else {
      exploreContainerRef.current.style.right = '100%';
      body.style.overflowY = 'auto';
    }
  }, [projectDiv]);

  return (
    <>
      <div className="mobile-nav" ref={mobileNavRef}>
        <nav>
          <ul className="mobile-nav__menu">
            <li><a className="mobile-nav__link" onClick={handleClick} href='#'>Home</a></li>
            <li><a className="mobile-nav__link" onClick={handleClick} href='#work'>Work</a></li>
            <li><a className="mobile-nav__link" onClick={handleClick} href="#contact">Contact</a></li>
            <li className="mobile-nav__link-line"></li>
            <li>
              <button id="theme-toggle" className="mobile-nav__sun" onClick={() => themeToggleRef(prev => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li className='relative'>
              <a className="mobile-nav__btn btn" ref={mobileNavBtnRef}>Explore</a>
              {!isClicked && <img className='absolute' style={{left: "-1.5rem", top: "1.5rem", transform: "rotateZ(65deg)"}} src="/images/components/icons8-double-tap-gesture.gif" alt="Click Here" />} 
            </li>
          </ul>
        </nav>
      </div>
      <div className="explore-container" ref={exploreContainerRef}>
        <div className="explore-container__header explore__container full-bleed" >
          <a className="explore-container__closeBtn btn" ref={closeBtnRef}>Close</a>
        </div>
        <div className="explore-container__album explore__container" id="explore__container">
          <LoadProjects />
        </div>
        <p id="error-message" style={{ color: "red" }}></p>
      </div>
    </>
  )
}

function Featured() {
  return (
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

      <br />
      <br />
      <br />
      <h2 className="featured__title" style={{ textAlign: "center" }}>3D Art Projects</h2>
      <div className="featured__img-container">
        <DisplayProject image={"/images/featured/love.png"} text={"Chriscent Production"} link={"#"} />
        <DisplayProject image={"/images/featured/DadDay.png"} text={"Chriscent Production"} link={"#"} />
        <DisplayProject image={"/images/featured/easyanimate0001.png"} text={"Chriscent Production"} link={"#"} />
        <DisplayProject image={"/images/featured/car.png"} text={"Chriscent Production"} link={"#"} />
        <DisplayProject image={"/images/featured/CouchFinalDesktop.png"} text={"Chriscent Production"} link={"#"} />
        <DisplayProject image={"/images/featured/leche_flan.png"} text={"Chriscent Production"} link={"#"} />
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="work container section" id='work'>
      <h2 className="work__title">Personal Web Projects</h2>
      <p className="work__description">
        Here are some of the rendered artworks I've created during
        moments when I needed a break or found myself looking for
        creative inspiration outside of web development. Explore my
        artistic side below:</p>

      <div className="work__container">
        <div className='work__row'>
          <div>
            <LazyImage 
              src="https://fakeimg.pl/1080x1080/?retina=1&text=ニャー&font=noto"
              data-src="/images/featured/budgetbuddy-preview.png"
              alt="Budget Buddy: A budgeting web app for students"/>
          </div>
          <div className="work__project work__project-content1">
            <h3 className="work__project-subtitle">Budget Buddy</h3>
            <p className="work__project-description1">
              <strong>Budget Buddy</strong> is a simple and intuitive web app designed to help users manage their expenses, track their income, and stay on top of their budgets!
            </p>
            <p className="work__project-description2">
              <b>~~~ Technologies Used ~~~</b>
              <div className="work__project-techs">
                <TechIcon icon={"react"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"html"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"css"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"javascript"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"sass"} width={"3rem"} height={"3rem"} />
              </div>
            </p>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Button 
                className={"work__project-btn"} 
                weight={700} 
                link={"https://productprice-iligan.vercel.app/"} 
                text={"Visit"} 
              />
            </div>
          </div>
        </div>

        <div className="work__row">
          <div>
            <LazyImage 
              src="https://fakeimg.pl/1080x1080/?retina=1&text=ニャー&font=noto"
              data-src="/images/featured/qrcode-preview.png"
              alt="QR Maker, QR Reader"/>
          </div>
          <div className="work__project work__project-content2">
            <h3 className="work__project-subtitle">QR Code Maker/Reader</h3>
            <p className="work__project-description1">
              In this low-poly 3D-rendered student bedroom, simplicity meets
              functionality. The minimalist design features clean lines, muted
              colors, and basic geometric shapes, creating a tranquil space
              conducive to focused study.
            </p>
            <p className="work__project-description2">
              <b>~~~ Technologies Used ~~~</b>
              <div className="work__project-techs">
                <TechIcon icon={"react"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"html"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"css"} width={"3rem"} height={"3rem"} />
                <TechIcon icon={"javascript"} width={"3rem"} height={"3rem"} />
              </div>
            </p>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Button 
                className={"work__project-btn"} 
                weight={700} 
                link={"https://chriscent-qr-code.vercel.app/"} 
                text={"Visit"} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}