function DisplayProject({ image, text, link }) {
    return (
        <a className="featured__img-wrapper" href={link}>
            <img 
                className='lazy loading'
                src="https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"
                data-src={image}
                alt={text} />
        </a>
    )
}

export default DisplayProject