import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'kindertraum-organisation',
    title: 'Kindertraum Organisation',
    category: 'Web Development',
    status: 'Zwischenprüfung & Abschlussprojekt',
    featured: true,
    shortDescription:
      'Aus einer im Rahmen der Flutter-Zwischenprüfung entwickelten Shop-App entstand mithilfe KI-gestützter Entwicklung die React-Webanwendung „Kindertraum Organisation“.',

    description:
      'Die heutige Webanwendung erweitert den ursprünglichen Shop um eine umfangreiche Organisations-Website mit Produktübersicht, Suche, Kategorien, Warenkorb und simuliertem Checkout sowie Blog/News-, Kontakt-, Login- und Administrationsbereichen. Die responsive Anwendung nutzt React und TypeScript sowie Supabase als Backend.', technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Cloudflare Pages'],
    features: [
      'Produktübersicht mit Demo-Daten',
      'Suche und Kategorie-Filter',
      'Warenkorb mit Mengenanpassung',
      'Checkout-Simulation',
      'Responsive Webanwendung',
      'Blog-/News-Bereich',
      'Kontakt- und Login-Bereich',
      'Administrative Funktionen'
    ],
    focus: ['Komponentenbasierte Webentwicklung',
      'Responsive UI',
      'State Management',
      'KI-gestützte Entwicklung',
      'Übertragung und Weiterentwicklung bestehender Funktionalität'],
    role: 'Eigenständige Konzeption und Umsetzung der Flutter-App im Rahmen der Zwischenprüfung. Anschließend eigenständige Weiterentwicklung des Projekts als React-Webanwendung mit KI-gestützter Unterstützung bei der technischen Übertragung und Anpassung.',
    highlights: [
      'Flutter-Shop-App als Ausgangspunkt der Projektentwicklung',
      'Übertragung der Shop-Funktionalität in eine React-Webanwendung',
      'Weiterentwicklung zu einer umfangreicheren Organisations-Website',
      'Einsatz von KI als Entwicklungswerkzeug bei der technischen Umsetzung'
    ],
    keyLearnings: [
      'Entwicklung einer strukturierten Flutter-App mit Provider',
      'Übertragung bestehender Funktionalität in eine neue technische Umgebung',
      'Komponentenbasierte Entwicklung mit React und TypeScript',
      'Weiterentwicklung einer bestehenden Flutter-App zu einer umfangreicheren Webanwendung',
      'Sinnvoller Einsatz von KI-gestützter Entwicklung im Entwicklungsprozess',
    ],
    liveUrl: 'https://plan-prototyp-produktion.pages.dev/',
  },
  {
    id: 'flutter-todo-app',
    title: 'Flutter ToDo App',
    category: 'Mobile Development',
    status: 'Abgeschlossenes Lernprojekt',
    shortDescription:
      'Eine moderne ToDo-App mit Flutter und Dart zur Verwaltung persönlicher Aufgaben mit persistenter lokaler Datenspeicherung sowie Filter- und Sortierfunktionen. Das Projekt entstand im Rahmen meiner Weiterbildung in der modernen Anwendungsentwicklung.',
    description:
      'Eine mobile Aufgabenverwaltung mit Flutter und Dart, die zentrale Funktionen einer modernen ToDo-App umsetzt. Aufgaben lassen sich mit Titel, Beschreibung, Priorität und Fälligkeitsdatum verwalten und dauerhaft lokal speichern. Filter- und Sortierfunktionen unterstützen die Übersicht bei vielen Aufgaben. Eine Wischgeste ermöglicht das schnelle Löschen mit zusätzlicher Löschbestätigung. Die Benutzeroberfläche unterstützt Light- und Dark-Mode und ist responsiv umgesetzt.',
    technologies: ['Flutter', 'Dart', 'SharedPreferences', 'Material 3'],
    features: [
      'Aufgaben erstellen, bearbeiten und löschen',
      'Aufgaben als erledigt markieren',
      'Titel, Beschreibung, Priorität und Fälligkeitsdatum',
      'Filterung nach Status und Priorität',
      'Sortierung nach verschiedenen Kriterien',
      'Swipe-to-delete mit Löschbestätigung',
      'Persistente lokale Datenspeicherung mit SharedPreferences',
      'Light- und Dark-Mode',
      'Responsive Benutzeroberfläche',
      'Material 3 Design',
    ],
    focus: ['Mobile UI', 'Lokale Datenpersistenz', 'Defensive Fehlerbehandlung'],
    role:
      'Eigenständige praktische Umsetzung im Rahmen der Weiterbildung im Bereich Mobile Development.',
    highlights: [
      'Persistente lokale Datenspeicherung',
      'Filter- und Sortierfunktionen',
      'Light- und Dark-Mode',
      'Responsive Benutzeroberfläche',
      'Material 3 ',
    ],
    keyLearnings: [
      'Grundlagen der Sprache Dart',
      'Aufbau von Benutzeroberflächen mit Flutter-Widgets (Material 3)',
      'Zustandsverwaltung mit Bordmitteln (ValueNotifier, StatefulWidget)',
      'Defensive Datenvalidierung beim Laden persistenter Daten',
    ],
    githubUrl: 'https://github.com/Alexandra-S-new/To-Do-App',
  },
  {
    id: 'firebase-chat-app',
    title: 'Firebase Chat App',
    category: 'Mobile Development & Backend',
    status: 'Abgeschlossenes Lernprojekt',
    shortDescription:
      'Eine mobile Chat-Anwendung mit E-Mail-Registrierung und -Login sowie Echtzeit-Nachrichten über Firebase. Das Projekt verbindet eine Flutter-Oberfläche mit einem cloudbasierten Backend.',
    description:
      'Ein Auth Gate steuert abhängig vom Firebase-Authentifizierungsstatus die Anzeige von Login-/Registrierungsbereich und Chat-Bereich. Nachrichten werden über einen eigenen Message-Service in Cloud Firestore gespeichert und enthalten Text, Absender-UID, Absender-E-Mail und Zeitstempel. Ein Firestore-Stream synchronisiert neue Nachrichten in Echtzeit und stellt sie chronologisch dar. Die Firebase-Anbindung wird über eine generierte FlutterFire-Konfigurationsdatei eingerichtet. Die serverseitigen Firestore Security Rules sind nicht Bestandteil des Repositories.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
    ],
    features: [
      'E-Mail-Registrierung und -Login',
      'automatische Anzeige des passenden Bereichs je nach Anmeldestatus (Auth Gate)',
      'Echtzeit-Chat über Firestore-Streams',
      'chronologische Nachrichtenliste mit Absender-E-Mail und Zeitstempel',
    ],
    focus: [
      'Firebase Authentication',
      'Cloud Firestore & Echtzeitdaten',
      'Stream-basierte UI-Aktualisierung',
    ],
    role:
      'Eigenständige praktische Umsetzung im Rahmen eines Lern-/Praxisprojekts zur Vertiefung von Mobile Development mit Backend-Anbindung.',
    highlights: [
      'Echtzeit-Synchronisation von Nachrichten über Firestore-Streams',
      'Automatische Steuerung von Login und Chat über ein Auth Gate',
    ],
    keyLearnings: [
      'Umsetzung von Benutzerregistrierung und -anmeldung mit Firebase Authentication',
      'Datenmodellierung und Echtzeit-Synchronisation mit Cloud Firestore',
      'Stream-basierte, reaktive UI in Flutter',
      'Trennung von Datenmodell, Service und UI',
    ],
    githubUrl: 'https://github.com/Alexandra-S-new/firebase-chat-app',
  },
  {
    id: 'living-world-simulation-engine',
    title: 'Living World Simulation Engine',
    category: 'Rapid Extendable Prototyping',
    status: 'Proof of Concept (PoC), aktiv getestet',
    shortDescription:
      'Ein KI-first entwickelter, deterministischer, agentenbasierter Simulations-Prototyp einer kleinen Welt mit Personen, Tieren, Bedürfnissen und wirtschaftlichen Interaktionen, umgesetzt in TypeScript mit CLI und Web-Oberfläche.',
    description:
      'Die Simulation entstand in einem KI-first Entwicklungsprozess und verbindet eine klar strukturierte, erweiterbare Architektur mit deterministischen Simulationsläufen und einer einfachen Utility-KI, die den simulierten Personen unterschiedliche Handlungen wie Essen, Schlafen, Arbeiten, Handeln und Sozialisieren ermöglicht. Die Engine kann über eine CLI oder eine eigenständige Web-Oberfläche mit interaktiver SVG-Karte genutzt werden. Gespeicherte Simulationsstände lassen sich reproduzierbar laden und weiterführen. Die technische Umsetzung wurde durch automatisierte Tests abgesichert. ',
    technologies: [
      'TypeScript',
      'Node.js',
      'Vite',
      'Vitest',
      'Zod',
    ],
    features: [
      'CLI zum Ausführen, Speichern/Laden und Inspizieren von Simulationsläufen',
      'Web-Oberfläche mit SVG-Weltkarte und klickbaren Orten/Figuren',
      'deterministisches Speichern und Laden von Simulationsständen',
      'Event-Feed mit Filtermöglichkeit nach Ereignistyp',
      '„Beobachten“-Funktion für einzelne Personen mit Live-Verlauf',
    ],
    focus: [
      'KI-first Development',
      'Agentenbasierte Simulation',
      'Deterministische Systeme',
      'Event-getriebene Architektur',
      'Softwarearchitektur & Schichtentrennung',
      'Testbarkeit',
    ],
    role:
      'Eigenständige Konzeption und technische Umsetzung der gesamten Simulationsarchitektur, der CLI sowie der Web-Oberfläche in einem KI-first Entwicklungsprozess. KI-gestützte Werkzeuge wurden für Ideenfindung, Konzeption und Implementierung eingesetzt; Architekturentscheidungen, Validierung und Qualitätssicherung wurden eigenständig verantwortet.',
    highlights: [
      'Determinismus praktisch verifiziert: Gespeicherte Simulationszustände lassen sich reproduzierbar fortsetzen',
      'CLI und Web-Oberfläche greifen auf dieselbe Simulations-Engine zu',
      'Zwei gleichberechtigte Präsentationswege (CLI und Web) auf derselben Engine',
      'Beobachtete Emergenz: Aus einfachen Regeln entstanden im Testlauf eigenständig eine Partnerschaft und eine Geburt',
    ],
    keyLearnings: [
      'KI-first Development als strukturierter Entwicklungsansatz für Ideenfindung, Konzeption und Implementierung',
      'Entwurf einer erweiterbaren, klar geschichteten Systemarchitektur',
      'Umsetzung deterministischer Simulationen mit reproduzierbaren, benannten Zufallsströmen',
      'Konzeption ereignisgetriebener Systeme mit typisierten Events',
      'Trennung von Simulationslogik und Beobachtung',
      'Absicherung komplexer Logik durch automatisierte Tests, inklusive dedizierter Determinismus-Tests',
    ],
    githubUrl:
      'https://github.com/Alexandra-S-new/rapid-extendable-prototyping',
  },
]
