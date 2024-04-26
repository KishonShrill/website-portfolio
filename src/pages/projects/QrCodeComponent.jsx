import { useEffect } from "react"

const QrCodeComponent = (props) => {
  useEffect(() => {document.title = props.title}, [])
  useEffect(() => {
    import('./styles/qr-code.css')
  })

  return(
    <main className="qr-code-component">
      <div className="card">
        <img src="/images/project-assets/image-qr-code.png" alt="" />
        <h2><b>Improve your front-end <br /> skills by building projects</b></h2>
        <p>Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br /> the next level</p>
      </div>

      <div className="attribution">
        <div>
          <p className="web">Challenge by <a className="mentor" href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa" target="_blank"> Frontend Mentor</a>. 
          Coded by <a href="https://github.com/KishonShrill"> Chriscent Pingol</a>.</p>
        </div>

        <p className="web">Go back <a href="/" target="_self"> Home</a>.</p>
        <p className="phone">Go back <a href="/" target="_self"> Home</a>.</p>
      </div>
    </main>
  )
}
export default QrCodeComponent