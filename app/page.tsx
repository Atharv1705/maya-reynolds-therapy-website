import Image from 'next/image';
import ScrollAnimation from './components/ScrollAnimation';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-page-bg)] text-[var(--color-page-text)] font-sans">
      <Navbar />
      {/* Page container */}
      <div className="mx-auto max-w-6xl px-5 lg:px-12">

        {/* Hero section */}
        <section className="grid gap-10 border-b border-[var(--color-border-soft)] pt-12 pb-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center md:gap-16 md:pt-16 md:pb-24">
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-xl bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-2xl">
            <div className="image-zoom image-overlay relative aspect-[16/10]">
              <Image
                src="/images/office1.jpg"
                alt="Dr. Maya Reynolds Therapy Office in Santa Monica"
                fill
                className="object-cover object-center rounded-xl"
                sizes="(max-width: 768px) 100vw, 640px"
                priority
              />
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left animate-fade-in-up md:space-y-6">
            <h1 className="text-4xl font-display font-semibold leading-snug transition-all duration-300 hover:text-[var(--color-primary)] md:text-5xl lg:text-6xl">
              Find Your Path to
              <br />
              <span className="text-[var(--color-accent)]">Healing</span> and Growth
            </h1>
            <p className="text-base leading-normal text-[var(--color-muted-text)] transition-opacity duration-300 hover:opacity-80 md:text-lg">
              Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA. Providing compassionate, evidence-based therapy for anxiety, depression, trauma, and relationship issues.
            </p>
            <button className="inline-flex items-center justify-center border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white px-8 py-3 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)]">
              SCHEDULE A CONSULTATION →
            </button>
          </div>
        </section>

        {/* Understanding your journey section */}
        <section className="grid gap-10 py-16 md:grid-cols-2 md:items-stretch md:gap-16 md:py-24">
          <ScrollAnimation direction="right" delay={0}>
            <div className="card-hover flex flex-col justify-between border border-[var(--color-border-card)] bg-[var(--color-card-bg)] px-8 py-10 transition-all duration-300 md:px-12 md:py-14">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-semibold leading-snug transition-colors duration-300 hover:text-[var(--color-primary)] md:text-4xl">
                  Understanding Your Journey
                </h2>
                <p className="text-sm leading-relaxed text-[var(--color-muted-text)] transition-opacity duration-300 hover:opacity-80 md:text-base">
                  Navigating life&apos;s challenges can feel overwhelming, but you don&apos;t have to walk this path alone. Whether you are struggling with anxiety, depression, or the lingering effects of trauma, professional support can make a difference.
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted-text)] transition-opacity duration-300 hover:opacity-80 md:text-base">
                  In my Santa Monica practice, I offer a safe, confidential, and non-judgmental space where we can explore your experiences, identify patterns, and develop effective strategies for lasting change.
                </p>
              </div>
              <div className="mt-10 border-t border-[var(--color-border-card)] pt-6">
                <a href="#about" className="link-underline text-xs font-medium tracking-[0.22em] uppercase text-[var(--color-primary)] hover:text-[var(--color-primary-light)]">
                  LEARN MORE ABOUT MY APPROACH →
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={100}>
            <div className="image-overlay relative w-full overflow-hidden rounded-xl bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-xl">
              <Image
                src="/images/office3.png"
                alt="Calming therapy environment in Santa Monica"
                width={1600}
                height={1066}
                className="image-zoom rounded-xl"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </ScrollAnimation>
        </section>

        {/* Specialties section */}
        <section id="services" className="scroll-mt-24 py-16 md:py-24">
          <ScrollAnimation direction="up" delay={0}>
            <div className="mb-12 text-center md:mb-16">
              <h2 className="text-3xl font-display font-semibold md:text-4xl text-[var(--color-primary)]">My Specialties</h2>
              <p className="mt-4 text-[var(--color-muted-text)] max-w-2xl mx-auto">
                Evidence-based therapeutic approaches tailored to your unique needs as a Clinical Psychologist.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Anxiety & Stress Management",
                body:
                  "Comprehensive treatment for generalized anxiety, panic disorders, and chronic stress. Utilizing Cognitive Behavioral Therapy (CBT) and mindfulness techniques to help you find calm and regain control.",
                img: "/images/office2.jpg"
              },
              {
                title: "Depression & Mood Disorders",
                body:
                  "Compassionate support for navigating depression and emotional regulation. We work together to uncover underlying causes, build resilience, and restore a sense of hope and well-being.",
                img: "/images/office1.jpg"
              },
              {
                title: "Trauma & PTSD Recovery",
                body:
                  "Trauma-informed care designed to help you process past experiences safely. I use evidence-based modalities to support healing from PTSD and complex trauma, fostering post-traumatic growth.",
                img: "/images/office2.jpg"
              }
            ].map((card, idx) => (
              <ScrollAnimation key={card.title} direction="up" delay={idx * 100}>
                <article className="card-hover flex flex-col justify-between border border-[var(--color-border-card)] bg-[var(--color-card-bg)] px-8 py-10 transition-all duration-300 h-full">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-[var(--color-primary)] text-[var(--color-primary-dark)]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-muted-text)] transition-opacity duration-300 hover:opacity-80">
                      {card.body}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <div className="group relative h-40 w-40 overflow-hidden rounded-full bg-[var(--color-card-alt)] transition-all duration-500 ring-2 ring-[var(--color-border-card)] hover:ring-[var(--color-accent)]/40">
                      <Image
                        src={card.img}
                        alt={`${card.title} - Dr. Maya Reynolds`}
                        fill
                        className="object-cover object-center image-zoom transition-transform duration-700 group-hover:scale-110"
                        sizes="160px"
                      />
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* You don't have to do this alone section */}
        <section className="grid gap-10 border-y border-[var(--color-border-soft)] py-16 md:grid-cols-2 md:items-stretch md:gap-16 md:py-24">
          <ScrollAnimation direction="right" delay={0}>
            <div className="image-overlay relative w-full overflow-hidden rounded-xl bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-xl">
              <Image
                src="/images/office1.jpg"
                alt="Supportive therapy environment at Dr. Reynolds' office"
                width={1600}
                height={1066}
                className="image-zoom rounded-xl"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={100}>
            <div className="flex flex-col justify-center bg-[var(--color-primary)] px-8 py-10 transition-all duration-300 md:px-12 md:py-14 h-full">
              <h2 className="mb-6 text-3xl font-display font-semibold leading-snug transition-colors duration-300 text-white md:text-4xl">
                You Don&apos;t Have to
                <br />
                Navigate This <span className="italic text-[var(--color-accent-light)]">Alone</span>
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-white/90 transition-opacity duration-300 hover:opacity-80 md:text-base">
                If you are experiencing any of these challenges, therapy can provide the tools you need:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/90 md:text-base">
                {[
                  "Persistent worry, anxiety, or panic attacks",
                  "Feelings of sadness, hopelessness, or loss of interest",
                  "Difficulty managing stress or overwhelming emotions",
                  "Struggles in relationships or communication",
                  "Trauma, PTSD, or unresolved past experiences",
                  "Work-life balance challenges or burnout"
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="transition-all duration-300 hover:translate-x-2 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-white/90 transition-opacity duration-300 hover:opacity-80 md:text-base">
                Together, we&apos;ll create a personalized treatment plan that addresses your unique needs and goals, helping you move toward a more fulfilling and balanced life.
              </p>
            </div>
          </ScrollAnimation>
        </section>

        {/* About Dr. Maya Reynolds section */}
        <section id="about" className="scroll-mt-24 grid gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
          <ScrollAnimation direction="right" delay={0}>
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl font-display font-semibold transition-colors duration-300 hover:text-[var(--color-primary)] md:text-4xl">
                Hi, I&apos;m Dr. Maya Reynolds
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted-text)] transition-opacity duration-300 hover:opacity-80 md:text-base">
                As a Licensed Clinical Psychologist (PsyD), I am dedicated to providing compassionate, evidence-based therapy to individuals in Santa Monica and the greater Los Angeles area. My approach integrates Cognitive Behavioral Therapy (CBT), mindfulness-based interventions, and psychodynamic perspectives to foster deep healing.
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-muted-text)] transition-opacity duration-300 hover:opacity-80 md:text-base">
                I believe in creating a collaborative therapeutic relationship where you feel heard, understood, and empowered. Whether you are dealing with anxiety, depression, trauma, or relationship challenges, I am here to support you on your journey toward healing and personal growth.
              </p>
              <button className="inline-flex items-center justify-center border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white px-8 py-3 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)]">
                SCHEDULE A CONSULTATION →
              </button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={100}>
            <div className="group relative mx-auto w-full max-w-xl overflow-hidden rounded-xl bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-2xl">
              <div className="image-zoom image-overlay relative aspect-[16/10]">
                <Image
                  src="/images/office2.jpg"
                  alt="Dr. Maya Reynolds Therapy Office"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="absolute bottom-6 right-6 z-10 h-40 w-40 overflow-hidden rounded-full ring-2 ring-[var(--color-border-card)] bg-[var(--color-card-alt)] transition-all duration-500 group-hover:scale-110 group-hover:ring-[var(--color-accent)]/30 md:h-44 md:w-44 shadow-lg">
                <Image
                  src="/images/maya-headshot.png"
                  alt="Dr. Maya Reynolds Headshot"
                  fill
                  className="object-cover object-top image-zoom"
                  sizes="176px"
                />
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Our Office section */}
        <section id="office" className="scroll-mt-24 grid gap-10 border-t border-[var(--color-border-soft)] py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
          <ScrollAnimation direction="right" delay={0}>
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl font-display font-semibold md:text-4xl text-[var(--color-primary)]">
                A Calm Space for Healing
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted-text)] md:text-base">
                Our Santa Monica office is designed to feel warm, private, and welcoming. Soft lighting, natural tones, and comfortable seating create a quiet environment where you can slow down and feel at ease.
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-muted-text)] md:text-base">
                In-person sessions are available at our Santa Monica location, with secure telehealth options offered for hybrid care. Your comfort, safety, and confidentiality are prioritized throughout your visit.
              </p>
              <ul className="mt-4 grid gap-3 text-sm md:text-base">
                <li className="flex items-center gap-2 text-[var(--color-page-text)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  Santa Monica, CA office location
                </li>
                <li className="flex items-center gap-2 text-[var(--color-page-text)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  In-person appointments and secure telehealth for hybrid scheduling
                </li>
                <li className="flex items-center gap-2 text-[var(--color-page-text)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  Confidential, comfortable, privacy-focused environment
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="relative mx-auto h-40 w-40 aspect-square shrink-0 overflow-hidden rounded-full bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-xl ring-2 ring-[var(--color-border-card)] md:h-56 md:w-56">
                <Image
                  src="/images/office1.jpg"
                  alt="Therapy office space in Santa Monica"
                  fill
                  className="object-cover object-center image-zoom"
                  sizes="(max-width: 768px) 50vw, 224px"
                />
              </div>
              <div className="relative mx-auto h-40 w-40 aspect-square shrink-0 overflow-hidden rounded-full bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-xl ring-2 ring-[var(--color-border-card)] md:h-56 md:w-56">
                <Image
                  src="/images/office2.jpg"
                  alt="Counseling room designed for comfort and privacy"
                  fill
                  className="object-cover object-center image-zoom"
                  sizes="(max-width: 768px) 50vw, 224px"
                />
              </div>
              <div className="relative mx-auto h-40 w-40 aspect-square shrink-0 overflow-hidden rounded-full bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-xl ring-2 ring-[var(--color-border-card)] md:h-56 md:w-56">
                <Image
                  src="/images/office3.png"
                  alt="Waiting area with natural light and calming decor"
                  fill
                  className="object-cover object-center image-zoom scale-110"
                  sizes="(max-width: 768px) 50vw, 224px"
                />
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* FAQs section */}
        <section id="faq" className="scroll-mt-24 grid gap-10 border-t border-[var(--color-border-soft)] py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
          <ScrollAnimation direction="right" delay={0}>
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-xl bg-[var(--color-card-alt)] transition-all duration-500 hover:shadow-2xl">
              <div className="image-zoom image-overlay relative aspect-[16/10]">
                <Image
                  src="/images/office2.jpg"
                  alt="Peaceful therapy space"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={100}>
            <div>
              <h2 className="mb-8 text-3xl font-display font-semibold md:text-4xl text-[var(--color-primary)]">Frequently Asked Questions</h2>
              <div className="space-y-4 border-t border-[color-mix(in_srgb,var(--color-primary)_60%,transparent)] pt-4 text-sm md:text-base">
                {[
                  "Do you accept insurance?",
                  "What are your session rates?",
                  "Do you offer in-person sessions in Santa Monica?",
                  "How long are therapy sessions?",
                  "What is your cancellation policy?"
                ].map((q) => (
                  <div
                    key={q}
                    className="group flex cursor-pointer items-center justify-between border-b border-[color-mix(in_srgb,var(--color-primary)_40%,transparent)] py-4 transition-all duration-300 hover:border-[var(--color-accent)] hover:pl-2"
                  >
                    <span className="text-xl leading-none transition-all duration-300 group-hover:rotate-90 group-hover:text-[var(--color-accent)] text-[var(--color-primary)]">
                      +
                    </span>
                    <p className="flex-1 pl-6 text-[var(--color-page-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Call to action */}
        <section id="contact" className="scroll-mt-24 bg-[var(--color-primary)] py-16 text-center text-white md:py-24">
          <ScrollAnimation direction="up" delay={0}>
            <div className="mx-auto max-w-2xl px-4">
              <h2 className="mb-6 text-3xl font-display font-semibold md:text-4xl">
                Ready to Begin Your Journey?
              </h2>
              <p className="mb-10 text-sm leading-relaxed md:text-base text-white/90">
                Taking the first step toward therapy can be difficult, but it is an important investment in yourself. I invite you to reach out to schedule an initial consultation.
                <br /><br />
                <strong>Office Location:</strong><br />
                123 W 45th Street, Santa Monica, CA 90401
              </p>
              <button className="inline-flex items-center justify-center border-2 border-white bg-white px-10 py-3 text-xs font-medium tracking-[0.18em] uppercase text-[var(--color-primary)] transition-all duration-300 hover:bg-white/90">
                SCHEDULE YOUR CONSULTATION →
              </button>
            </div>
          </ScrollAnimation>
        </section>

        {/* Footer header CTA */}
        <section className="bg-[var(--color-footer-header)] py-12 text-center">
          <p className="text-white text-sm mb-4">© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
        </section>
      </div>
    </main>
  );
}
