import { useEffect } from "react"
import emailChecker from "./components/emailChekcer.cjs"

const NewsletterSignUpProject = (props) => {
  useEffect(() => {
    document.title = props.title
    emailChecker();
    import('./styles/newsletter-sign-up-project.css')
  }, [])

  return(
    <main className="newsletter-sign-up-project">

      <main className="sign-up-wrapper">
        <section className="sign-up__container description">
          <h1 className="description__title">Stay updated!</h1>
          <p className="description__subtitle">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="description__list">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <div className="sign-up__info">
            <p className="sign-up__input-legend">Email address</p>
            <p className="sign-up__input-legend sign-up__warning"></p>
          </div>
          <input 
            className="sign-up__input"
            type="email" 
            id="email" 
            name="mail" 
            placeholder="email@company.com"
          ></input>
          <input 
            className="sign-up__btn"
            type="submit"
            value="Subscribe to monthly newsletter"
          ></input>
        </section>
        <section className="sign-up__container"></section>
      </main>
      
      <footer className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io?ref=challenge" target="_self"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p className="web">Go back <a href="/"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default NewsletterSignUpProject