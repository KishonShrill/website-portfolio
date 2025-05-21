import('../styles/components/button.css')

function Button({ text, link, className, weight }) {
    return (
        <a className="pushable" href={link}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className={className} style={{fontWeight: weight}}>
                {text}
            </span>
        </a>
    )
}

export default Button