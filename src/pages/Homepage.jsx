import { useEffect, useState, Suspense, lazy } from 'react';

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
import CredlyBadge from '../components/CredlyBadge.jsx';


export default function Homepage({ themeToggle }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);

    const handleHeaderBtnClick = (outside) => {
        if (!isClicked) setIsClicked(true);
        if (outside) setIsNavOpen(prev => !prev);
    };

    const toggleExplore = () => {
        console.log("naigo ko?")
        if (!isClicked) setIsClicked(true);
        setIsExploreOpen(prev => !prev);
    };

    useEffect(() => {
        document.body.style.overflowY = (isNavOpen || isExploreOpen) ? 'hidden' : 'auto';
        return () => { document.body.style.overflowY = 'auto'; };
    }, [isNavOpen, isExploreOpen]);

    return (
        <>
            <Header
                handleClick={handleHeaderBtnClick}
                themeToggle={themeToggle}
                isClicked={isClicked}
                toggleExplore={toggleExplore}
            />
            <MobileNav
                handleClick={handleHeaderBtnClick}
                themeToggle={themeToggle}
                isNavOpen={isNavOpen}
                isClicked={isClicked}
                isExploreOpen={isExploreOpen}
                toggleExplore={toggleExplore}
            />

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
                    <a href="https://www.frontendmentor.io/profile/KishonShrill"><img className='contact__socials-item' style={{ padding: "3px" }} src="/images/components/frontendmentor.png" alt="" /></a>
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


function Header({ handleClick, isClicked, themeToggle, toggleExplore }) {
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
                            <button id="theme-toggle" className="header__sun" onClick={() => themeToggle()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            </button>
                        </li>
                        <li className='relative'>
                            <a className="header__explore btn" onClick={toggleExplore}>Explore</a>
                            {!isClicked && <img className='absolute' style={{ left: "-2rem", top: "1.5rem", transform: "rotateZ(65deg)" }} src="/images/components/icons8-double-tap-gesture.gif" alt="Click Here" />}
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
                        {!isClicked && <img className='absolute' style={{ left: "-0.75rem", top: "0.75rem", transform: "rotateZ(65deg)" }} src="/images/components/icons8-double-tap-gesture.gif" alt="Click Here" />}
                    </button>
                </nav>
            </header >
        </>
    )
}

function MobileNav({ handleClick, themeToggle, isNavOpen, isExploreOpen, toggleExplore, isClicked }) {
    return (
        <>
            <div className={`mobile-nav ${isNavOpen ? 'mobile-nav--open' : 'mobile-nav--closed'}`}>
                <nav>
                    <ul className="mobile-nav__menu">
                        <li><a className="mobile-nav__link" onClick={() => handleClick(true)} href='#'>Home</a></li>
                        <li><a className="mobile-nav__link" onClick={() => handleClick(true)} href='#work'>Work</a></li>
                        <li><a className="mobile-nav__link" onClick={() => handleClick(true)} href="#contact">Contact</a></li>
                        <li className="mobile-nav__link-line"></li>
                        <li>
                            <button id="theme-toggle" className="mobile-nav__sun" onClick={themeToggle}>
                                {/* SVG Icon */}
                            </button>
                        </li>
                        <li className='relative'>
                            {/* Added onClick directly here */}
                            <a className="mobile-nav__btn btn" onClick={toggleExplore}>Explore</a>
                            {!isClicked && <img className='absolute' style={{ left: "-1.5rem", top: "1.5rem", transform: "rotateZ(65deg)" }} src="/images/components/icons8-double-tap-gesture.gif" alt="Click Here" />}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Conditional classes for explore container slide-in */}
            <div className={`explore-container ${isExploreOpen ? 'explore-container--open' : 'explore-container--closed'}`}>
                <div className="explore-container__header explore__container full-bleed">
                    <a className="explore-container__closeBtn btn" onClick={toggleExplore}>Close</a>
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
            <h2 className="featured__title" style={{ textAlign: "center" }}>Badges</h2>
            <br />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", overflowX: "auto", width: "100%" }}>
                <CredlyBadge badgeId={"7eb10efd-f455-4ef3-bba0-601cbb9495bd"} />
                <CredlyBadge badgeId={"96ac92ca-895e-43ff-bdb6-cb7d0e41cc81"} />
                <CredlyBadge badgeId={"acd5706a-930f-4624-bd43-d18818ba62e1"} />
            </div>
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

export function Work() {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Budget Buddy",
            description: <><strong>Budget Buddy</strong> is a simple and intuitive web app designed to help users manage their expenses, track their income, and stay on top of their budgets!</>,
            imgSrc: "https://res.cloudinary.com/dlmabgte3/image/upload/v1774840647/budgetbuddy_preview.png",
            imgAlt: "Budget Buddy: A budgeting web app for students",
            techs: ["react", "html", "css", "javascript", "sass"],
            link: "https://productprice-iligan.vercel.app/",
            contentClass: "work__project-content1"
        },
        {
            id: 2,
            title: "Online Inventory System",
            description: <>An <strong>online inventory</strong> for your gadgets with QR code scanning to ease the trouble of typing the item codes.</>,
            imgSrc: "/images/featured/onlineinventorysystem.png",
            imgAlt: "Online inventory system for CDIIS",
            techs: ["react", "html", "css", "javascript", "sass"],
            link: "https://cdiis-ois.vercel.app/",
            contentClass: "work__project-content1"
        },
        {
            id: 3,
            title: "Lasa Lokal Pinas",
            description: <><strong>Popup-Iligan</strong> is a landing page for a popup restaurant based in Iligan City.</>,
            imgSrc: "/images/featured/popupiligan.png",
            imgAlt: "Popup Dining Iligan",
            techs: ["react", "html", "css", "javascript", "sass"],
            link: "http://popup-iligan.zaide.online/",
            contentClass: "work__project-content1",
            btnAppear: true
        }
    ];

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
        return () => { document.body.style.overflowY = ''; };
    }, [selectedImage]);

    return (
        <section className="work container section" id='work'>
            <h2 className="work__title">Website Projects</h2>
            <p className="work__description">
                Here are some of the rendered artworks and personal/collaborated
                projects created during moments when I needed a break or found
                myself looking for creative inspiration outside of web development.
                Explore my artistic side below:
            </p>

            <div className="work__container">
                {projects.map((project) => (
                    <div className='work__row' key={project.id}>
                        {/* 3. Added an onClick handler and a specific class to make it clickable */}
                        <div
                            className="work__image-wrapper"
                            onClick={() => setSelectedImage(project.imgSrc)}
                            style={{ cursor: "pointer" }}
                            title="Click to expand image"
                        >
                            <LazyImage
                                src="https://fakeimg.pl/1080x1080/?retina=1&text=ニャー&font=noto"
                                data-src={project.imgSrc}
                                alt={project.imgAlt}
                            />
                        </div>
                        <div className={`work__project ${project.contentClass}`}>
                            <h3 className="work__project-subtitle">{project.title}</h3>
                            <p className="work__project-description1">
                                {project.description}
                            </p>

                            <div className="work__project-description2">
                                <b>~~~ Technologies Used ~~~</b>
                                <div className="work__project-techs">
                                    {project.techs.map((tech, index) => (
                                        <TechIcon key={index} icon={tech} width={"3rem"} height={"3rem"} />
                                    ))}
                                </div>
                            </div>

                            {project.link && !project?.btnAppear && (
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Button
                                        className={"work__project-btn"}
                                        weight={700}
                                        link={project.link}
                                        text={"Visit"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <span className="image-modal__close">&times;</span>
                    <img
                        src={selectedImage}
                        alt="Expanded project view"
                        className="image-modal__content"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
