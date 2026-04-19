import React, { useEffect } from "react";
// Import provided assets
import faviconIcon from "figma:asset/085b77912e73ee189edb681c8ccda5c8a9e601e3.png";

export function FaviconHandler() {
  useEffect(() => {
    // Helper to set or create link tag
    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel*='${rel}']`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Reference favicon.ico as the primary favicon
    // Since we cannot write to disk, we override the link tag to point to the PNG asset
    // which effectively acts as the favicon.
    setLink("icon", faviconIcon);
    
    // Apple Touch Icon
    setLink("apple-touch-icon", faviconIcon);

  }, []);

  return null;
}
