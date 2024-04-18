import $ from 'jquery';

export default function Loader() {
  setTimeout(function() {
    $(".loader-wrapper").fadeOut("slow");
  }, 1000);

  return(
    <div className="loader-wrapper">
      <img className="imageSpin" src="/website-portfolio/images/home/preloadLogo.jpg" alt="" />
    </div>
  )
}