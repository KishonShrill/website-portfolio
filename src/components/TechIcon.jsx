function TechIcon({ icon, height, width }) {
    function getIconComponent(icon) {
        const icons = {
            javascript: <img src="/images/components/icons8-javascript.svg" alt="JavaScript" />,
            html: <img src="/images/components/icons8-html-logo.svg" alt="HTML" />,
            css: <img src="/images/components/icons8-css-logo.svg" alt="CSS" />,
            mongodb: <img src="/images/components/icons8-mongodb.svg" alt="MongoDB" />,
            expressjs: <img src="/images/components/icons8-express-js.svg" alt="Express.js" />,
            react: <img src="/images/components/react.svg" alt="React" />,
            nodejs: <img src="/images/components/icons8-nodejs.svg" alt="Node.js" />,
            sass: <img src="/images/components/icons8-sass.svg" alt="SASS" />,
        };

        return icons[icon] || null; // return null if not found
    }

    return (
        <div style={{height: height, width: width, display: "flex", justifyContent: "center", alignItems: ""}}>
            {getIconComponent(icon)}
        </div>
    );
}

export default TechIcon