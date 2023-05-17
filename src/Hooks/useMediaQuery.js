import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const handler = () => {
      setMatches(media.matches);
    };

    media.addEventListener('click',handler);

    return () => media.removeEventListener('click',handler);
  }, [matches, query]);

  return matches;
}
