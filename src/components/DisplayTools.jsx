function DisplayTools({ image, text, className, link }) {
    return (
        <a className={className} href={link}>
            <img 
                className='lazy loading'
                src="https://fakeimg.pl/300x300"
                data-src={image}
                alt={text} />
            <p>{text}</p>
        </a>
    )
}

export default DisplayTools