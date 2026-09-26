import { useEffect, useState } from 'react';

import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import abdelrhmanImage from '../assets/abdelrhman.png';
import AnimatedGrid from '../components/AnimatedGrid';

const NAV_LINKS = [
  'About',
  'Skills',
  'Services',
  'Experience',
  'Projects',
  'Contact',
];

export default function HeroSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'services',
      'experience',
      'projects',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let current = 'home';

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* =========================
          ANIMATED GRID BACKGROUND
      ========================= */}
      <AnimatedGrid />

      {/* =========================
          FIXED GLASSY NAVBAR
      ========================= */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 md:px-10 pt-4 sm:pt-5"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <div
            className="
              flex items-center justify-between gap-4
              rounded-full
              border border-white/15
              bg-white/[0.06]
              backdrop-blur-2xl
              shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              px-4 sm:px-6
              py-3
            "
          >
            {/* Name */}
            <a
              href="#home"
              className="
                text-[#D7E2EA]
                font-bold
                uppercase
                tracking-tight
                text-sm sm:text-base md:text-lg
                whitespace-nowrap
                hover:text-white
                transition-colors duration-200
              "
            >
              Abdelrhman Reda
            </a>

            {/* Navigation */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide">
              {NAV_LINKS.map((link) => {
                const sectionId = link.toLowerCase();
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link}
                    href={`#${sectionId}`}
                    className={`
                      relative
                      flex
                      items-center
                      justify-center
                      text-[#D7E2EA]
                      font-medium
                      uppercase
                      tracking-wider
                      text-[9px]
                      sm:text-[10px]
                      md:text-xs
                      lg:text-sm
                      whitespace-nowrap
                      px-3
                      sm:px-4
                      md:px-5
                      py-2
                      transition-all
                      duration-300
                      ${isActive ? 'active-nav' : ''}
                    `}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* =========================
          HERO HEADING
      ========================= */}
      <div className="relative z-10 overflow-hidden w-full mt-24 sm:mt-28 md:mt-24">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              w-full
              pl-6
              sm:pl-8
              md:pl-10
              lg:pl-14
            "
            style={{
              letterSpacing: '-0.04em',
            }}
          >
            {/* Hi, I'm */}
            <span
              className="block"
              style={{
                fontSize: 'clamp(4rem, 10vw, 140px)',
                letterSpacing: '-0.05em',
              }}
            >
              Hi, I&apos;m
            </span>

            {/* Abdelrhman */}
            <span
              className="block"
              style={{
                fontSize: 'clamp(3.2rem, 8vw, 112px)',
                letterSpacing: '0.02em',
              }}
            >
              Abdelrhman
            </span>

            {/* Reda Mohamed */}
            {/*
            <span
              className="block font-bold"
              style={{
                fontSize: 'clamp(2rem, 5vw, 70px)',
                letterSpacing: '0.08em',
                marginTop: '8px',
              }}
            >
              Reda Mohamed
            </span>
            */}
          </h1>
        </FadeIn>
      </div>

      {/* =========================
          HERO PORTRAIT
          MOBILE CENTERED
          DESKTOP ORIGINAL POSITION
      ========================= */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          top-1/2
          -translate-y-1/2

          sm:left-1/2
          sm:-translate-x-1/2
          sm:top-auto
          sm:translate-y-0
          sm:bottom-0

          md:left-[65%]
          md:-translate-x-1/2
          md:top-auto
          md:translate-y-0
          md:bottom-0

          lg:left-[70%]
          lg:-translate-x-1/2

          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
        "
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={abdelrhmanImage}
            alt="Abdelrhman Reda, software engineer and web developer"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}
      <div
        className="
          relative
          z-20
          flex
          justify-between
          items-end
          px-6
          md:px-10
          pb-7
          sm:pb-8
          md:pb-10
          mt-auto
        "
      >
        {/* Description */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              max-w-[280px]
              sm:max-w-[380px]
              md:max-w-[500px]
              lg:max-w-[600px]
            "
            style={{
              fontSize: 'clamp(0.7rem, 1.1vw, 1.1rem)',
            }}
          >
            A software engineer driven by building practical, reliable, and
            user-friendly web applications.
          </p>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}