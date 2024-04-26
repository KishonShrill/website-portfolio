import { useEffect } from "react"
import emailGetter from "./components/emailGetter.cjs"

const NewsletterSignUpProjectSuccess = (props) => {
  useEffect(() => {
    document.title = props.title
    emailGetter();
    import('./styles/newsletter-sign-up-project.css')
  }, [])

  const handleClick = () => {
    window.location.href = '../'; // Redirect to the parent directory
  };

  return(
    <main className="newsletter-sign-up-project">

      <main className="success-form-wrapper">
        <span className="svg-check"></span>
        <h1 className="success-form__title">Thanks for subscribing!</h1>
        <p className="success-form__subtitle">
          A confirmation email has been sent to <br />
          <span className="bold getEmail">###</span>. Please open it and click on the button inside to confirm your subscription. 
        </p>
        <input 
            className="sign-up__btn success__btn"
            type="submit"
            value="Dismiss message"
            onClick={handleClick}
        ></input>
      </main>
      
      <footer className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p className="web">Go back <a href="/"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default NewsletterSignUpProjectSuccess