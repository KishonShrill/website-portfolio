import { useEffect } from "react"
import calculator from "./components/calculatorApp.cjs"
import themeSwitch from "./components/theme-switch"

const CalculatorApp = (props) => {
  useEffect(() => {
    document.title = props.title
    calculator();
    themeSwitch();
    import('./styles/calculator-app.css')
  }, [])

  return(
    <main className="calculator-app">

      <main className="calculator">
        <header className="calulator__header">

          <p className="header__logo">calc</p>
          <div className="header__theme-container">
            <p className="header__theme">THEME</p>
            <div className="theme-toggle">
              <label className="custom-radio-button">
                <input id="first" name="toggle-state" type="radio" value="first" />
                <span className="checkmark"></span>
              </label>
              <label className="custom-radio-button">
                <input id="second" name="toggle-state" type="radio" value="second" />
                <span className="checkmark"></span>
              </label>
              <label className="custom-radio-button">
                <input id="third" name="toggle-state" type="radio" value="third" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>        
        </header>

        <input type="text" className="screen" name="display"></input>

        <section className="numpad">
          <div><button 
            id="keys"
            className="keys" 
            value="7">
            <p className="number p">7</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="8">
            <p className="number p">8</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="9">
            <p className="number p">9</p></button></div>
          <div className="delete-background"><button 
            id="keys" 
            className="numpad__text delete" 
            value="DEL">
            <p className="p">DEL</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="4">
            <p className="number p">4</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="5">
            <p className="number p">5</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="6">
            <p className="number p">6</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="+">
            <p className="symbol p">+</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="1">
            <p className="number p">1</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="2">
            <p className="number p">2</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="3">
            <p className="number p">3</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="-">
            <p className="symbol p">-</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value=".">
            <p className="symbol p">.</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="0">
            <p className="number p">0</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="/">
            <p className="symbol p">/</p></button></div>
          <div><button 
            id="keys" 
            className="keys" 
            value="*">
            <p className="symbol p">x</p></button></div>
          <div className="numpad__reset numpad__text delete-background"><button 
            id="keys" 
            className="delete" 
            value="AC">
            <p className="p">RESET</p></button></div>
          <div className="numpad__equals numpad__text"><button 
            id="keys" 
            className="equals" 
            value="=">
            <p className="p">=</p></button></div>
        </section>
      </main>
      
      <footer className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p className="phone">Go back <a href="/website-portfolio/"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default CalculatorApp