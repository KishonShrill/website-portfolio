import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/preload.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about-me.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/comments.css';
import '../styles/components/mobile-nav.css';
import '../styles/components/explore-container.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode  from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';
import navButton from './utils/comments';
import exploreButton from './utils/projects';
import websiteFunctions from './utils/website-functions';

mobileNav();
darkMode();
lazyLoading();
navButton(); 
websiteFunctions();
exploreButton();