import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      const href = link.getAttribute('href');

      // Only handle internal section links
      if (!href || !href.startsWith('#')) return;

      const section = document.querySelector(href);

      if (!section) return;

      e.preventDefault();

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Update URL without jumping
      window.history.pushState(null, '', href);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}