import LazyImage from "./LazyImage"

function DisplayProject({ image, text, link }) {
    return (
        <a className="featured__img-wrapper" href={link}>
            <LazyImage 
                src={"https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"}
                image={image}
                alt={text} />
        </a>
    )
}

export default DisplayProject