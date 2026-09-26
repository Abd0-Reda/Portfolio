import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

import FadeIn from '../components/FadeIn';

const SOCIALS = [
  {
    label: 'Email',
    value: 'abdelrhmanreda818@gmail.com',
    href: 'mailto:abdelrhmanreda818@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdelrhmanreda0',
    href: 'https://www.linkedin.com/in/abdelrhmanreda0/',
    text: 'in',
  },
  {
    label: 'GitHub',
    value: 'github.com/Abd0-Reda',
    href: 'https://github.com/Abd0-Reda',
    text: 'GH',
  },
  {
    label: 'Phone',
    value: '+20 102 405 8019',
    href: 'tel:+201024058019',
    icon: Phone,
  },
];

export default function FooterSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setSent(false);
    setError(false);

    try {
      await emailjs.sendForm(
        'service_1vzdpkw',
        'template_l5f8m8q',
        formRef.current,
        {
          publicKey: 'syU-TYQbjqb2BJwIL',
        }
      );

      setSent(true);
      formRef.current.reset();

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <footer
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0C0C0C]
        text-[#D7E2EA]
        px-5
        sm:px-8
        md:px-12
        lg:px-16
        py-24
        sm:py-28
        md:py-32
        flex
        items-center
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#B600A8]/10
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#7621B0]/10
          blur-[140px]
          pointer-events-none
        "
      />

      {/* ================= SUBTLE GRID ================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(215,226,234,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(215,226,234,1) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      <FadeIn className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto">

          {/* ================= TOP ================= */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-6
              border-t
              border-[#D7E2EA]/15
              pt-5
              mb-20
              sm:mb-24
            "
          >
            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.3em]
                text-[#D7E2EA]/40
              "
            >
              Get in touch
            </span>

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-[#D7E2EA]/30
              "
            >
              04 / 04
            </span>
          </div>

          {/* ================= HEADING ================= */}

          <div className="mb-16 sm:mb-20">

            <p
              className="
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.3em]
                text-[#D7E2EA]/40
                mb-5
              "
            >
              Have a project in mind?
            </p>

            <h2
              className="
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.045em]
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[100px]
              "
            >
              Let&apos;s
              <br />

              <span className="text-[#D7E2EA]/35">
                work together.
              </span>
            </h2>

          </div>

          {/* ================= MAIN GRID ================= */}

<div
  className="
    grid
    grid-cols-1
    lg:grid-cols-[0.9fr_1.1fr]
    gap-12
    lg:gap-20
    items-stretch
  "
>

            {/* ================= LEFT SIDE ================= */}

            <div>

              <p
                className="
                  max-w-md
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-[#D7E2EA]/55
                  font-light
                  leading-relaxed
                  mb-12
                "
              >
                I&apos;m always open to discussing new projects,
                creative ideas, or opportunities to be part of
                something meaningful.
              </p>

              {/* Contact Links */}

              <div className="flex flex-col">

                {SOCIALS.map(
                  ({ label, value, href, text, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={
                        href.startsWith('mailto:') ||
                        href.startsWith('tel:')
                          ? undefined
                          : '_blank'
                      }
                      rel={
                        href.startsWith('mailto:') ||
                        href.startsWith('tel:')
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        gap-5
                        py-5
                        border-b
                        border-[#D7E2EA]/10
                        transition-all
                        duration-300
                        hover:pl-2
                      "
                    >

                      {/* Icon + Label */}

                      <div className="flex items-center gap-4">

                        {Icon ? (
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            className="
                              text-[#D7E2EA]/60
                              group-hover:text-[#D7E2EA]
                              transition-colors
                            "
                          />
                        ) : (
                          <span
                            className="
                              w-[18px]
                              text-center
                              text-xs
                              font-black
                              text-[#D7E2EA]/60
                              group-hover:text-[#D7E2EA]
                              transition-colors
                            "
                          >
                            {text}
                          </span>
                        )}

                        <span
                          className="
                            text-xs
                            sm:text-sm
                            uppercase
                            tracking-[0.15em]
                            font-medium
                          "
                        >
                          {label}
                        </span>

                      </div>

                      {/* Value */}

                      <div className="flex items-center gap-3 min-w-0">

                        <span
                          className="
                            text-xs
                            sm:text-sm
                            text-[#D7E2EA]/35
                            font-light
                            truncate
                          "
                        >
                          {value}
                        </span>

                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                          className="
                            shrink-0
                            text-[#D7E2EA]/25
                            group-hover:text-[#D7E2EA]
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            transition-all
                          "
                        />

                      </div>

                    </a>
                  )
                )}

              </div>

            </div>

            {/* ================= GLASS FORM ================= */}

            <div
              className="
                relative
                overflow-hidden
                w-full
                max-w-[560px]
                lg:ml-auto
                rounded-3xl
                border
                border-[#D7E2EA]/20
                bg-white/[0.07]
                backdrop-blur-[30px]
                shadow-[0_25px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]
                p-5
                sm:p-7
                md:p-8
              "
            >

              {/* Glass Highlight */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#D7E2EA]/40
                  to-transparent
                  pointer-events-none
                "
              />

              <div className="relative z-10">

                {/* ================= FORM HEADER ================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-8
                  "
                >

                  <div>

                    <span
                      className="
                        block
                        text-xs
                        uppercase
                        tracking-[0.22em]
                        text-[#D7E2EA]/45
                        mb-2
                      "
                    >
                      Transmission
                    </span>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-[#D7E2EA]
                      "
                    >
                      Send me a message
                    </h3>

                  </div>

                  <div
                    className="
                      w-9
                      h-9
                      rounded-full
                      border
                      border-[#D7E2EA]/15
                      bg-white/[0.04]
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Send
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#D7E2EA]/60"
                    />
                  </div>

                </div>

                {/* ================= FORM ================= */}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >

                  {/* ================= NAME ================= */}

                  <div>

                    <label
                      htmlFor="contact-name"
                      className="
                        block
                        text-xs
                        sm:text-sm
                        uppercase
                        tracking-[0.18em]
                        text-[#D7E2EA]/55
                        font-medium
                        mb-3
                      "
                    >
                      Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={sending}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#D7E2EA]/10
                        bg-white/[0.035]
                        backdrop-blur-md
                        px-4
                        py-3.5
                        text-sm
                        sm:text-base
                        text-[#D7E2EA]
                        placeholder:text-[#D7E2EA]/20
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#D7E2EA]/35
                        focus:bg-white/[0.06]
                        focus:shadow-[0_0_20px_rgba(215,226,234,0.08)]
                        disabled:opacity-50
                      "
                    />

                  </div>

                  {/* ================= EMAIL ================= */}

                  <div>

                    <label
                      htmlFor="contact-email"
                      className="
                        block
                        text-xs
                        sm:text-sm
                        uppercase
                        tracking-[0.18em]
                        text-[#D7E2EA]/55
                        font-medium
                        mb-3
                      "
                    >
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      disabled={sending}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#D7E2EA]/10
                        bg-white/[0.035]
                        backdrop-blur-md
                        px-4
                        py-3.5
                        text-sm
                        sm:text-base
                        text-[#D7E2EA]
                        placeholder:text-[#D7E2EA]/20
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#D7E2EA]/35
                        focus:bg-white/[0.06]
                        focus:shadow-[0_0_20px_rgba(215,226,234,0.08)]
                        disabled:opacity-50
                      "
                    />

                  </div>

                  {/* ================= MESSAGE ================= */}

                  <div>

                    <label
                      htmlFor="contact-message"
                      className="
                        block
                        text-xs
                        sm:text-sm
                        uppercase
                        tracking-[0.18em]
                        text-[#D7E2EA]/55
                        font-medium
                        mb-3
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={4}
                      disabled={sending}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#D7E2EA]/10
                        bg-white/[0.035]
                        backdrop-blur-md
                        px-4
                        py-3.5
                        text-sm
                        sm:text-base
                        text-[#D7E2EA]
                        placeholder:text-[#D7E2EA]/20
                        outline-none
                        resize-none
                        transition-all
                        duration-300
                        focus:border-[#D7E2EA]/35
                        focus:bg-white/[0.06]
                        focus:shadow-[0_0_20px_rgba(215,226,234,0.08)]
                        disabled:opacity-50
                      "
                    />

                  </div>

                  {/* ================= STATUS ================= */}

                  {sent && (
                    <p
                      className="
                        text-sm
                        text-[#D7E2EA]/70
                      "
                    >
                      Message sent successfully ✓
                    </p>
                  )}

                  {error && (
                    <p
                      className="
                        text-sm
                        text-red-400
                      "
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* ================= BUTTON ================= */}

                  <button
                    type="submit"
                    disabled={sending}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-[#D7E2EA]
                      text-[#0C0C0C]
                      px-8
                      py-3.5
                      text-xs
                      sm:text-sm
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:scale-[1.01]
                      hover:shadow-[0_10px_35px_rgba(215,226,234,0.12)]
                      active:scale-[0.98]
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                  >
                    {sending ? 'Sending...' : 'Send message'}

                    {!sending && (
                      <ArrowUpRight
                        size={17}
                        className="
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-transform
                        "
                      />
                    )}

                  </button>

                </form>

              </div>

            </div>

          </div>

          {/* ================= BOTTOM ================= */}

          <div
            className="
              mt-24
              sm:mt-32
              pt-6
              border-t
              border-[#D7E2EA]/10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
            "
          >

            <span
              className="
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#D7E2EA]/25
              "
            >
              © {new Date().getFullYear()} Abdelrhman Reda
            </span>

            <span
              className="
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#D7E2EA]/25
              "
            >
              Software Engineer · Web Developer
            </span>

          </div>

        </div>
      </FadeIn>
    </footer>
  );
}