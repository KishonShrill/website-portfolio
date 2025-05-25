import { useEffect } from "react"
import cardDetails from "./components/cardDetailProject.cjs"
import('./styles/interactive-card-details-form.scss')

const InteractiveCardDetailsForm = (props) => {
  document.title = props.title
  useEffect(() => {
    cardDetails();
  }, [])

  return(
    <main className="interactive-card-details-form">
      <main className="interactive-wrapper">
        <section className="card-wrapper">
          <div className="card card1">
            <img className="card__logo" src="/images/project-assets/card-logo.svg" alt="" />
            <div>
              <p className="card__number">0000 0000 0000 0000</p>
              <div id="flex-space-between">
                <p className="card__owner">JANE APPLESEED</p>
                <p className="card__expiry">00/00</p>
              </div>
            </div>
          </div>
          <div className="card card2">
            <p className="card__cvv">000</p>
          </div>
        </section>

        <section className="form-wrapper">
          <div className="form">
            <div className="form__input-row1"><label className="form__input-legend" htmlFor="card-name">CARDHOLDER NAME</label>
              <input className="form__input" id="card-name" type="text" placeholder="e.g. Jane Appleseed" />
              <p className="form__input-error error-name"> </p>
            </div>
            <div className="form__input-row2"><label className="form__input-legend" htmlFor="card-nmbr">CARD NUMBER</label>
              <input className="form__input" id="card-nmbr" type="number" min="16" max="16" placeholder="e.g. 1234 5678 9123 0000" />
              <p className="form__input-error error-number">  </p>
            </div>
            <div className="form__input-row3-col1"><label className="form__input-legend" htmlFor="card-month">EXP. DATE (MM/YY)</label>
              <div className="form__3rd-row-1st-col">
                <input className="form__input month" id="card-month" type="number" min="1" max="2" placeholder="MM" />
                <input className="form__input year" id="card-year" type="number" min="1" max="2" placeholder="YY" />
              </div>
              <p className="form__input-error error-date">  </p>
            </div>  
            <div className="form__input-row3-col2"><label className="form__input-legend" htmlFor="card-cvc">CVC</label>
              <input className="form__input" id="card-cvc" type="number" min="1" max="2" placeholder="e.g. 123" />
              <p className="form__input-error error-cvc">  </p>
            </div>
            <button className="form__submit form__input-row4" type="button">Confirm</button>
          </div>

          <div className="form-complete">
            <img src="/images/project-assets/icon-complete.svg" alt="" />
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <a id="btn-complete">Continue</a>
          </div>
        </section>
      </main>
      
      <footer className="attribution web">
        <div>
          <p>Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>
      
        <p>Go back <a href="/"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default InteractiveCardDetailsForm