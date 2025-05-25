import('./styles/result-summary-component.css')

const ResultSummaryComponent = (props) => {
  document.title = props.title

  return(
    <main className="result-summary-component">
      <div className="form">
        <div className="result">
          <h2>Your Result</h2>
          <div className="result__score">  
            <h1 className="result__title">76</h1>
            <p>of 100</p>
          </div>
          <span><h2 className="result__subtitle">Great</h2></span>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className="summary">
          <h1 className="summary__title"> Summary</h1>

          <div id="characteristic">
            <div className="smolbox washedred">
              <div className="corner-wrapper">
                <div className="corner red top-left"></div>
                <div className="corner red top-right"></div>
                <div className="corner red bottom-left"></div>
                <div className="corner red bottom-right"></div>
              </div>
              <p>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 20 20"><path stroke="#F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>
                <span className="summaryword red">Reaction</span>
              </p>
              <span>
                <span className="score">80 </span>
                <span className="score washed"> / 100</span>
              </span>
            </div>

            <div className="smolbox washedyellow">
              <div className="corner-wrapper">
                <div className="corner yellow top-left"></div>
                <div className="corner yellow top-right"></div>
                <div className="corner yellow bottom-left"></div>
                <div className="corner yellow bottom-right"></div>
              </div>
              <p>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>
                <span className="summaryword yellow"> Memory</span>
              </p> 
              <span>
                <span className="score">92 </span>
                <span className="score washed"> / 100</span>
              </span>
            </div>

            <div className="smolbox washedteal">
              <div className="corner-wrapper">
                <div className="corner teal top-left"></div>
                <div className="corner teal top-right"></div>
                <div className="corner teal bottom-left"></div>
                <div className="corner teal bottom-right"></div>
              </div>
              <p>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>
                  <span className="summaryword teal"> Verbal</span> 
              </p>
                <span>
                <span className="score">61 </span>
                <span className="score washed"> / 100</span>
              </span>
            </div>

            <div className="smolbox washedblue">
              <div className="corner-wrapper">
                <div className="corner blue top-left"></div>
                <div className="corner blue top-right"></div>
                <div className="corner blue bottom-left"></div>
                <div className="corner blue bottom-right"></div>
              </div>
              <p>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>
                <span className="summaryword blue"> Visual</span>
              </p> 
              <span>
                <span className="score">72 </span>
                <span className="score washed"> / 100</span>
              </span>
            </div>
          </div>
        
          <button className="button">Continue</button>
        </div>
      </div>
    </main>
  )
}
export default ResultSummaryComponent