import { useEffect } from "react"
import ageCalculator from "./components/ageCalculator.cjs"

const AgeCalculatorApp = (props) => {
  useEffect(() => {document.title = props.title}, [])
  useEffect(() => {
    ageCalculator();
    import('./styles/age-calculator.css')
  }, [])

  return(
    <main className="age-calculator">
      <main className="age-processor">
        <section className="date__inputs-container">
          <div><h2 className="date__legend">D A Y</h2>
            <input className="date__input input__day" type="number" min="1" max="2" placeholder="DD" />
            <p className="date__input-error"><em className="error-day"> </em></p>
          </div>
          <div><h2 className="date__legend">M O N T H</h2>
            <input className="date__input input__month" type="number" min="1" max="2" placeholder="MM" />
            <p className="date__input-error"><em className="error-month"> </em></p>
          </div>
          <div><h2 className="date__legend">Y E A R</h2>
            <input className="date__input input__year" type="number" min="1" max="4" placeholder="YYYY" />
            <p className="date__input-error"><em className="error-year"> </em></p>
          </div>
        </section>
        <hr />
        <button className="checker__btn">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="46" 
            height="44" 
            viewBox="0 0 46 44"
          >
            <g 
              fill="none" 
              stroke="#FFF" 
              strokeWidth="2"
            >
              <path 
                d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 
                22.019C37.667 21.686 23 25.616 23 44"/>
            </g>
          </svg>
        </button>
        <section className="date__output-container">
          <h1 className="date__output"><i><span className="date__answer" id="years">- -</span> years</i></h1>
          <h1 className="date__output"><i><span className="date__answer" id="months">- -</span> months</i></h1>
          <h1 className="date__output"><i><span className="date__answer" id="days">- -</span> days</i></h1>
        </section>
      </main>
      
      <footer className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p className="phone">Go back <a href="../../"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default AgeCalculatorApp