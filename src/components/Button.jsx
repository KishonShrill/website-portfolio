import React from 'react';
import('../styles/components/button.css')

function Button({ text, link, className, weight }) {
    return (
        <a className="pushable" href={link}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className={`front ${className || ''}`} style={{fontWeight: weight}}>
                {text}
            </span>
        </a>
    )
}

export default React.memo(Button)