import { useEffect } from "react"

const NewsHomepage = (props) => {
  useEffect(() => {document.title = props.title}, [])
  useEffect(() => {
    import('./styles/news-homepage.css')
  })

  return(
    <main className="body">
      <div className="navigation-sidebar phone">
        <div className="navigation-content">
          <img className="navbar-btnClose" src="/website-portfolio/images/project-assets/icon-menu-close.svg" alt="Close Navigation" />
          <div className="navbar">
            <a href="/website-portfolio/">Home</a>
            <a href="#new">New</a>
            <a href="#popular">Popular</a>
            <a href="#trending">Trending</a>
            <a href="#categories">Categories</a>
          </div>
        </div>
      </div>

      <main className="content">
        <header>
          <img className="header__logo" src="/website-portfolio/images/project-assets/logo.svg" alt="News Logo" />
          <ul className="header__link-wrapper web">
            <li className="header__link"><a href="/website-portfolio/">Home</a></li>
            <li className="header__link"><a href="#New">New</a></li>
            <li className="header__link"><a href="#Popular">Popular</a></li>
            <li className="header__link"><a href="#Trending">Trending</a></li>
            <li className="header__link"><a href="#Categories">Categories</a></li>
          </ul>
          <img className="navbar-btnOpen phone" src="/website-portfolio/images/project-assets/icon-menu.svg" alt="Navigation Menu" />
        </header>

        <div className="featured-news">
          <section>
            <picture className="featured-news__graphic">
              <source media="(max-width:435px)" srcSet="./assets/images/image-web-3-mobile.jpg" />
              <img src="/website-portfolio/images/project-assets/image-web-3-desktop.jpg" alt="Featured Graphic" />
            </picture>
            <div className="featured-news__context">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="featured-news__context__subtext">
                <p>We dive into the next evolution of the web that calims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <a href="#READ-MORE">READ MORE</a>
              </div>
            </div>
          </section>

          <aside className="aside">
            <h1 className="aside__title">New</h1>
            <div className="aside__article-wrapper">
              <a className="aside__article" href="#Hydrogen-VS-Electric-Cars">
                <h2 className="aside__article-title">Hydrogen VS Electric Cars</h2>
                <p className="aside__article-subtitle">Will hydrogen-fueled cars ever catch up to EVs?</p>
              </a>
              <hr />
              <a className="aside__article" href="#The-Downsides-of-AI-Artistry">
                <h2 className="aside__article-title">The Downsides of AI Artistry</h2>
                <p className="aside__article-subtitle">What are the possible adverse effects of on-demand AI image generation?</p>
              </a>
              <hr />
              <a className="aside__article" href="#Is-VC-Funding-Drying-Up?">
                <h2 className="aside__article-title">Is VC Funding Drying Up?</h2>
                <p className="aside__article-subtitle">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </a>
            </div>
          </aside>
        </div>

        <article>
          <a className="article-wrapper" href="#">
            <img className="article__img" src="/website-portfolio/images/project-assets/image-retro-pcs.jpg" alt="Reviving Retro PCs" />
            <div className="article__contexts">
              <h1>01</h1>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </a>
          <a className="article-wrapper" href="#">
            <img className="article__img" src="/website-portfolio/images/project-assets/image-top-laptops.jpg" alt="Top 10 Laptops of 2022" />
            <div className="article__contexts">
              <h1>02</h1>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </a>
          <a className="article-wrapper" href="#">
            <img className="article__img" src="/website-portfolio/images/project-assets/image-gaming-growth.jpg" alt="The Growth of Gaming" />
            <div className="article__contexts">
              <h1>03</h1>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh oppurtunities.</p>
            </div>
          </a>
        </article>
      </main>
      
      <footer className="attribution web">
        <div>
          <p>Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>
      </footer>
    </main>
  )
}
export default NewsHomepage