import { useEffect } from "react"

const FourCardFeature = (props) => {
  useEffect(() => {
    document.title = props.title
    import('./styles/four-card-feature.css')
  }, [])

  return(
    <main className="body">
      <main className="feature">
        <section className="feature__title-container">
          <h1 className="feature__title">Reliable, efficient delivery</h1>
          <h2 className="feature__subtitle">Powered by Technology</h2>
          <p className="feature__description">Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful</p>
        </section>

        <section className="feature__card-container">
          <div className="card card1">
            <div>
              <span className="card__header card1-clr"></span>
              <h1>Team Builder</h1>
              <p>Scans out talent network to create the optimal team for your project</p>
            </div>
            <img className="card-icon" src="/website-portfolio/images/project-assets/icon-team-builder.svg" alt="Team Builder" />
          </div>
          <div className="card card2">
            <div>
              <span className="card__header card2-clr"></span>
              <h1>Supervisor</h1>
              <p>Monitors activity to identify project roadblocks</p>
          </div>
            <img className="card-icon" src="/website-portfolio/images/project-assets/icon-supervisor.svg" alt="Supervisor" />
          </div>
          <div className="card card3">
            <div>
              <span className="card__header card3-clr"></span>
              <h1>Calculator</h1>
              <p>Uses data from past projects to provide better delivery estimates</p>
          </div>
            <img className="card-icon" src="/website-portfolio/images/project-assets/icon-calculator.svg" alt="Calculator" />
          </div>
          <div className="card card4">
            <div>
              <span className="card__header card4-clr"></span>
              <h1>Karma</h1>
              <p>Regularly evaluates out talent to ensure quality</p>
          </div>
            <img className="card-icon" src="/website-portfolio/images/project-assets/icon-karma.svg" alt="Karma" />
          </div>
        </section>
      </main>
      
      <footer className="attribution web">
        <div>
          <p>Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub" target="_self"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p>Go back <a href="/website-portfolio/"> Home</a>.</p>
      </footer>
    </main>
  )
}
export default FourCardFeature