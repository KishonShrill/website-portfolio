export default function AgeCalculatorApp() {
  return (
    <>
      <main>
        <section class="date__inputs-container">
          <div><h2 class="date__legend">D A Y</h2>
            <input class="date__input input__day" type="number" min="1" max="2" placeholder="DD" />
            <p class="date__input-error"><em class="error-day"> </em></p>
          </div>
          <div><h2 class="date__legend">M O N T H</h2>
            <input class="date__input input__month" type="number" min="1" max="2" placeholder="MM" />
            <p class="date__input-error"><em class="error-month"> </em></p>
          </div>
          <div><h2 class="date__legend">Y E A R</h2>
            <input class="date__input input__year" type="number" min="1" max="4" placeholder="YYYY" />
            <p class="date__input-error"><em class="error-year"> </em></p>
          </div>
        </section>
        <hr />
        <button class="checker__btn">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="46" 
            height="44" 
            viewBox="0 0 46 44"
          >
            <g 
              fill="none" 
              stroke="#FFF" 
              stroke-width="2"
            >
              <path 
                d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 
                22.019C37.667 21.686 23 25.616 23 44"/>
            </g>
          </svg>
        </button>
        <section class="date__output-container">
          <h1 class="date__output"><i><span class="date__answer" id="years">- -</span> years</i></h1>
          <h1 class="date__output"><i><span class="date__answer" id="months">- -</span> months</i></h1>
          <h1 class="date__output"><i><span class="date__answer" id="days">- -</span> days</i></h1>
        </section>
      </main>
      
      <footer class="attribution">
        <div>
          <p class="web">Challenge by <a class="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p class="phone">Go back <a href="../../index.html"> Home</a>.</p>
      </footer>
    </>
  );
}