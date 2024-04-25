import { useEffect } from "react"
import 'https://kit.fontawesome.com/31dfec9376.js'

const ProductPreviewCard = (props) => {
  useEffect(() => {
    document.title = props.title
    import('./styles/project-product-preview-card.css')
  }, [])

  return(
    <>
      <main className="project-PPC">
        <section className="card">
          <img src="/website-portfolio/images/project-assets/image-product-desktop.jpg" alt="Preview" />
          <div className="cardinfo">
            <p id="itemtype">P E R F U M E</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p id="contentDes">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
            <div>
            <p>$149.99</p><del>$169.99</del>
            </div>

            <button><i className='fas fa-shopping-cart' style={{"font-size": "16px"}}></i><b> Add to Cart</b></button>
          </div>
        </section>
      </main>
      
      <footer className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p className="web">Go back <a href="/website-portfolio/"> Home</a>.</p>
        <p className="phone">Go back <a href="/website-portfolio/"> Home</a>.</p>
      </footer>
    </>
  )
}
export default ProductPreviewCard