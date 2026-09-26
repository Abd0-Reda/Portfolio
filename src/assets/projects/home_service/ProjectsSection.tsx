import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';

import FadeIn from '../components/FadeIn';
import { PROJECTS, type Project } from '../data/content';

const TOTAL_CARDS = PROJECTS.length;

/* =========================================================
   PROJECT DETAILS
========================================================= */

function ProjectDetails({
  project,
  onClose,
  onNext,
  onPrevious,
}: {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const currentIndex = PROJECTS.findIndex(
    (item) => item.number === project.number
  );

  const previousProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;

  const nextProject =
    currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : null;

  const scrollToProjects = () => {
    onClose();

    setTimeout(() => {
      const element = document.getElementById('projects');

      if (!element) return;

      const navbarOffset = 90;

      const elementTop =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - navbarOffset,
        behavior: 'smooth',
      });
    }, 50);
  };

  /*
    If detailsImages exists:
    - first image = main image
    - remaining images = gallery

    If it doesn't exist:
    fallback to the old 3-image structure.
  */
  const detailImages =
    project.detailsImages && project.detailsImages.length > 0
      ? project.detailsImages
      : [
          project.col2Image,
          project.col1Image1,
          project.col1Image2,
        ];

  const mainImage = detailImages[0];

  const galleryImages = detailImages.slice(1);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] overflow-y-auto bg-[#0C0C0C]"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="sticky top-0 z-30 border-b border-white/10 bg-[#0C0C0C]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 md:px-10">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition-opacity hover:opacity-60"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Projects
          </button>

          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            {project.number} /{' '}
            {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40"
            >
              {project.category}
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#D7E2EA] sm:text-7xl md:text-8xl lg:text-[110px]"
            >
              {project.name}
            </motion.h1>
          </div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.25,
            }}
            className="text-[80px] font-black leading-none text-white/[0.06] sm:text-[120px]"
          >
            {project.number}
          </motion.span>
        </div>

        {/* =====================================================
            MAIN IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="
            mt-12
            w-full
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-[#0C0C0C]
            sm:mt-16
            sm:rounded-[32px]
            md:rounded-[40px]
          "
        >
          <img
            src={mainImage}
            alt={`${project.name} main preview`}
            className="
              block
              h-auto
              max-h-[80vh]
              w-full
              object-contain
            "
          />
        </motion.div>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              About the project
            </p>
          </div>

          <div>
            <p className="text-xl leading-relaxed text-[#D7E2EA]/80 sm:text-2xl md:text-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <div className="mt-20 border-t border-white/10 pt-10 md:mt-28 md:pt-14">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#D7E2EA]/20 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-wider text-[#D7E2EA] transition-colors hover:bg-white/[0.08]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FEATURES + ROLE
        ===================================================== */}

        <div className="mt-20 grid gap-16 border-t border-white/10 pt-10 md:mt-28 md:grid-cols-2 md:pt-14">

          {/* Features */}

          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/30">
              Key Features
            </p>

            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="text-xs text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="text-base text-[#D7E2EA]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Role */}

          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/30">
              My Role
            </p>

            <p className="text-lg leading-relaxed text-[#D7E2EA]/70 sm:text-xl">
              {project.role}
            </p>
          </div>
        </div>

        {/* =====================================================
            PROJECT GALLERY
        ===================================================== */}

        {galleryImages.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-10 md:mt-28 md:pt-14">

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Project Screens
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={`${project.name}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-[#111111]
                    sm:rounded-[32px]
                    md:rounded-[40px]
                  "
                >
                  <img
                    src={image}
                    alt={`${project.name} screenshot ${index + 2}`}
                    loading="lazy"
                    className="
                      block
                      h-auto
                      w-full
                      object-contain
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />
                </motion.div>
              ))}
            </div>

          </div>
        )}

        {/* =====================================================
            LINKS
        ===================================================== */}

        {(project.github || project.live) && (
          <div className="mt-20 flex flex-wrap gap-4 border-t border-white/10 pt-10 md:mt-28 md:pt-14">

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D7E2EA] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0C0C0C] transition-transform hover:scale-[1.03]"
              >
                Live Demo ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#D7E2EA]/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition-colors hover:bg-white/[0.06]"
              >
                GitHub ↗
              </a>
            )}

          </div>
        )}

        {/* =====================================================
            PREVIOUS / NEXT
        ===================================================== */}

        <div className="mt-28 grid gap-4 border-t border-white/10 pt-10 md:grid-cols-2">

          {previousProject ? (
            <button
              onClick={onPrevious}
              className="group text-left"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                Previous Project
              </span>

              <div className="mt-3 text-2xl font-medium uppercase text-[#D7E2EA] transition-transform duration-300 group-hover:-translate-x-2 sm:text-3xl">
                ← {previousProject.name}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <button
              onClick={onNext}
              className="group text-left md:text-right"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                Next Project
              </span>

              <div className="mt-3 text-2xl font-medium uppercase text-[#D7E2EA] transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                {nextProject.name} →
              </div>
            </button>
          ) : null}

        </div>

      </div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale =
    1 - (TOTAL_CARDS - 1 - index) * 0.03;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  return (
    <div
      ref={ref}
      className="h-[85vh] flex items-start sticky top-24 md:top-32"
      style={{
        top: `${index * 28}px`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        onClick={() => onOpen(project)}
        className="w-full cursor-pointer rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 origin-top transition-colors duration-300 hover:bg-[#111111] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >

        {/* =====================================================
            TOP ROW
        ===================================================== */}

        <div className="mb-6 flex flex-wrap items-center gap-4 sm:mb-8 sm:gap-6">

          <span
            className="font-black leading-none text-[#D7E2EA]"
            style={{
              fontSize: 'clamp(3rem, 10vw, 140px)',
            }}
          >
            {project.number}
          </span>

          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
              {project.category}
            </span>

            <h3 className="text-xl font-medium uppercase text-[#D7E2EA] sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>

          {/* Details button */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
            className="ml-auto inline-flex shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/40 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#D7E2EA] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
          >
            Details ↗
          </button>

        </div>

        {/* =====================================================
            PROJECT CARD IMAGES
            Keep the original 3-image card layout.
        ===================================================== */}

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-[0.4fr_0.6fr]">

          {/* Left images */}

          <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-1">

            <div className="self-start overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
              <img
                src={project.col1Image1}
                alt={`${project.name} detail 1`}
                loading="lazy"
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="self-start overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
              <img
                src={project.col1Image2}
                alt={`${project.name} detail 2`}
                loading="lazy"
                className="block h-auto w-full object-contain"
              />
            </div>

          </div>

          {/* Main image */}

          <div className="self-start overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
            <img
              src={project.col2Image}
              alt={`${project.name} full view`}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      >
        <FadeIn>
          <h2
            className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
            style={{
              fontSize: 'clamp(3rem, 12vw, 160px)',
            }}
          >
            Project
          </h2>
        </FadeIn>

        <div className="mx-auto flex max-w-5xl flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          DETAILS OVERLAY
      ===================================================== */}

      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectDetails
            key={selectedProject.number}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNext={() => {
              const currentIndex = PROJECTS.findIndex(
                (item) => item.number === selectedProject.number
              );

              if (currentIndex < PROJECTS.length - 1) {
                setSelectedProject(PROJECTS[currentIndex + 1]);
              }
            }}
            onPrevious={() => {
              const currentIndex = PROJECTS.findIndex(
                (item) => item.number === selectedProject.number
              );

              if (currentIndex > 0) {
                setSelectedProject(PROJECTS[currentIndex - 1]);
              }
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}