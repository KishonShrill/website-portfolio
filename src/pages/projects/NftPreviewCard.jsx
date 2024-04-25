import { useEffect } from "react"

const NFTPreviewCard = (props) => {
  useEffect(() => {
    document.title = props.title
    import('./styles/project-nft.css')
  }, [])

  return(
    <main className="body">
      <section className="card">
        <div className="preview-container">
          <img className="preview__image" src="/website-portfolio/images/project-assets/image-equilibrium.jpg" alt="NFT PREVIEW CARD" />
        </div>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div id="priceInfo">
          <div>
            <svg id="look" width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
            <p id="price">0.041 ETH</p>
          </div>
          <div>
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
            <p>3 days left</p>
          </div>
        </div>
        <hr />
        <div id="author">
          <img src="/website-portfolio/images/project-assets/image-avatar.png" alt="PROFILE AVATAR" />
          <p>Creation of <span>Jules Wyvern</span></p>
        </div>
      </section>

      <footer className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>
    
        <p className="web">Go back <a href="/website-portfolio/" > Home</a>.</p>
        <p className="phone">Go back <a href="/website-portfolio/" > Home</a>.</p>
      </footer>
    </main>
  )
}
export default NFTPreviewCard