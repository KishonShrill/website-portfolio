import { useEffect, useRef } from "react";

function CredlyBadge({badgeId}) {
  const badgeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    badgeRef.current.appendChild(script);
  }, []);

  return (
    <div ref={badgeRef}>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
      ></div>
    </div>
  );
}

export default CredlyBadge;