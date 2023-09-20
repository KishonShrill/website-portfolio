import '../../styles/modern-normalize.css';
import '../../styles/style.css';
import '../../styles/components/header.css';
import '../styles/mas_amicus.css';
import '../../styles/components/footer.css';
import '../../styles/components/mobile-nav.css';
import '../../styles/utils.css';

import mobileNav from '../../src/utils/mobile-nav';
import darkMode  from '../../src/utils/dark-mode';
import albumScreen from './utils/album';

mobileNav();
darkMode();
albumScreen();

// import '../styles/components/hero.css';
// import '../styles/components/about-me.css';
// import '../styles/components/featured.css';
// import '../styles/components/work.css';
// import '../styles/components/contact.css';
// import '../styles/components/comments.css';
// import lazyLoading from '../src/utils/lazy-loading';
// import navButton from '../src/utils/comments';
// lazyLoading();
// navButton(); 