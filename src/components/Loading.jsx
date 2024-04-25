import $ from 'jquery';
import '../styles/components/preload.css'

export default function Loader() {
  setTimeout(async function() {
    $(".loader-wrapper").fadeOut("slow");
  }, 1000);

  return(
    <div className="loader-wrapper">
      <img className="imageSpin" src="/website-portfolio/images/home/preloadLogo.jpg" alt="" />
    </div>
  )
}