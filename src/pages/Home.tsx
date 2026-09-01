import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Section } from '../components/Section'
import { projects } from '../data/projects'

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#top"
      aria-label="Nach oben"
      onClick={(event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-surface transition-colors hover:bg-accent-hover"
    >
      ↑
    </a>
  )
}

export function Home() {
  return (
    <>
      <header id="top">
        <Navbar />

        <Section className="bg-background">
          <p className="text-sm font-medium tracking-wide text-text-muted">
            MEDIENINFORMATIK · WEB DEVELOPMENT
          </p>

          <h1 className="mt-4 max-w-3xl">
            Webentwicklung mit Blick für Struktur, Gestaltung und Nutzer.
          </h1>

          <p className="mt-6 max-w-2xl text-text-muted">
            Ich bin Alexandra Schetelich, Medieninformatikerin (M.Sc.) · Web
            Developerin · AI Mobile App Developer. Ich verbinde technische
            Umsetzung mit einem Gespür für klare, nutzerorientierte digitale
            Lösungen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent-hover"
            >
              Projekte ansehen
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Mehr über mich
            </a>
          </div>
        </Section>
      </header>

      <main>
        <Section id="about" className="bg-surface-muted">
          <p className="text-sm font-medium tracking-wide text-text-muted">
            ÜBER MICH
          </p>

          <h2 className="mt-4 max-w-3xl">
            Technik verstehen. Lösungen gestalten. Nutzer im Blick behalten.
          </h2>

          <div className="mt-6 max-w-2xl space-y-4 text-text-muted">
            <p>
              Ich bin Alexandra Schetelich, Medieninformatikerin (M.Sc.), Web
              Developerin und aktuell in der Weiterentwicklung zur AI Mobile
              App Developer. Mein fachlicher Schwerpunkt liegt in der
              Entwicklung und Gestaltung digitaler Anwendungen – von der
              strukturierten Umsetzung responsiver Weboberflächen bis zur
              Entwicklung moderner Apps.
            </p>

            <p>
              Durch mein Studium der Medieninformatik und meine praktische
              Erfahrung in der Webentwicklung verbinde ich technisches
              Verständnis mit einem Blick für Gestaltung, Struktur und
              Benutzerfreundlichkeit. Dabei arbeite ich mich gerne in neue
              Technologien ein und entwickle Lösungen Schritt für Schritt von
              der Idee bis zur funktionierenden Anwendung.
            </p>

            <p>
              Besonders spannend finde ich die Schnittstelle zwischen
              Entwicklung, Design und neuen Technologien. Aktuell erweitere
              ich meine Kenntnisse insbesondere im Bereich Dart und Flutter
              sowie bei der Entwicklung KI-gestützter Anwendungen.
            </p>

            <p>
              Mir ist wichtig, dass digitale Lösungen nicht nur technisch
              funktionieren, sondern verständlich aufgebaut, gut nutzbar und
              langfristig nachvollziehbar sind.
            </p>
          </div>
        </Section>

        <Section id="projects" className="bg-background">
          <p className="text-sm font-medium tracking-wide text-text-muted">
            PROJEKTE
          </p>

          <h2 className="mt-4 max-w-3xl">
            Aus Ideen werden funktionierende digitale Lösungen.
          </h2>

          <p className="mt-6 max-w-2xl text-text-muted">
            Eine Auswahl meiner Projekte aus Webentwicklung, Mobile
            Development und experimenteller Softwareentwicklung.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-md border border-border bg-surface p-6"
              >
                <p className="text-sm font-medium text-text-muted">
                  {project.category} · {project.status}
                </p>
                <h3 className="mt-2">{project.title}</h3>
                <p className="mt-3 text-text-muted">{project.shortDescription}</p>
                <p className="mt-4 text-sm font-medium text-text">
                  {project.technologies.join(' · ')}
                </p>
                <p className="mt-4 text-text-muted">{project.description}</p>

                {project.highlights.length > 0 && (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text-muted">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent-hover"
                  >
                    GitHub ansehen
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent-hover"
                  >
                    Live ansehen
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" className="bg-surface-muted">
          <p className="text-sm font-medium tracking-wide text-text-muted">
            SKILLS
          </p>

          <h2 className="mt-4 max-w-3xl">
            Technologien, mit denen ich digitale Lösungen entwickle.
          </h2>

          <p className="mt-6 max-w-2xl text-text-muted">
            Mein Schwerpunkt liegt auf moderner Web- und Mobile-Entwicklung.
            Dabei verbinde ich technische Umsetzung mit strukturiertem
            Arbeiten, Gestaltung und einem Blick für die Nutzerperspektive.
          </p>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            <article className="border-t border-border pt-6">
              <h3>Webentwicklung</h3>
              <p className="mt-3 text-text-muted">
                Entwicklung responsiver und strukturierter Weboberflächen
                mit modernen Frontend-Technologien.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-muted">
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Responsive Webdesign</li>
              </ul>
            </article>

            <article className="border-t border-border pt-6">
              <h3>Mobile Development</h3>
              <p className="mt-3 text-text-muted">
                Entwicklung mobiler Anwendungen mit Dart und Flutter im
                Rahmen meiner aktuellen fachlichen Vertiefung.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-muted">
                <li>Dart</li>
                <li>Flutter</li>
              </ul>
            </article>

            <article className="border-t border-border pt-6">
              <h3>Backend &amp; Daten</h3>
              <p className="mt-3 text-text-muted">
                Anbindung und Nutzung moderner Backend- und Cloud-Dienste
                für Daten, Authentifizierung und Anwendungslogik.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-muted">
                <li>Firebase</li>
                <li>Node.js</li>
                <li>REST / APIs</li>
              </ul>
            </article>

            <article className="border-t border-border pt-6">
              <h3>Tools &amp; Arbeitsweise</h3>
              <p className="mt-3 text-text-muted">
                Werkzeuge und Methoden für strukturierte Entwicklung,
                Prototyping und die Umsetzung digitaler Projekte.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-text-muted">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>KI-gestützte Entwicklung</li>
                <li>Rapid Prototyping</li>
              </ul>
            </article>
          </div>
        </Section>

        <Section id="contact" className="bg-background">
          <p className="text-sm font-medium tracking-wide text-text-muted">
            KONTAKT
          </p>

          <h2 className="mt-4 max-w-3xl">
            Lass uns über digitale Projekte sprechen.
          </h2>

          <p className="mt-6 max-w-2xl text-text-muted">
            Du möchtest mehr über meine Projekte, meine Arbeitsweise oder
            mögliche Zusammenarbeit erfahren? Ich freue mich über den
            Austausch.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-md border border-border border-t-4 border-t-accent bg-surface p-6">
              <p className="text-sm font-medium text-text-muted">E-Mail</p>
              <a
                href="mailto:a.schetelich@gmx.net"
                className="mt-2 block break-words text-accent underline-offset-4 hover:text-accent-hover hover:underline"
              >
                a.schetelich@gmx.net
              </a>
            </article>

            <article className="rounded-md border border-border border-t-4 border-t-accent bg-surface p-6">
              <p className="text-sm font-medium text-text-muted">GitHub</p>
              <a
                href="https://github.com/Alexandra-S-new"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-words text-accent underline-offset-4 hover:text-accent-hover hover:underline"
              >
                github.com/Alexandra-S-new
              </a>
            </article>

            <article className="rounded-md border border-border border-t-4 border-t-accent bg-surface p-6">
              <p className="text-sm font-medium text-text-muted">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/alexandra-schetelich-36b521397/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-words text-accent underline-offset-4 hover:text-accent-hover hover:underline"
              >
                LinkedIn-Profil
              </a>
            </article>
          </div>
        </Section>
      </main>

      <BackToTopButton />
    </>
  )
}
