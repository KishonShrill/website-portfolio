import LazyImage from "./LazyImage"
function DisplayTools({ image, text, className, link }) {
    return (
        <a className={className} href={link}>
            <LazyImage
                src="https://fakeimg.pl/300x300"
                data-src={image}
                alt={text} />
            <p>{text}</p>
        </a>
    )
}

export default DisplayTools