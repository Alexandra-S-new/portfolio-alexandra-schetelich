import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'kindertraum-organisation',
    title: 'Kindertraum Organisation',
    category: 'Mobile Development',
    status: 'Prototyp / Lernprojekt (lokal entwickelt)',
    featured: true,
    shortDescription:
      'Eine Flutter-App für eine fiktive Kindertraum-Organisation mit Produktübersicht, Kategorie-Filtern und Warenkorb. Das Projekt zeigt den Aufbau einer vollständigen Shop-App-Struktur mit Provider-basiertem State Management.',
    description:
      'Die App präsentiert eine Reihe von Demo-Produkten in einer durchsuch- und filterbaren Übersicht, aus der Nutzer Artikel in einen Warenkorb legen und über eine simulierte Checkout-Strecke abschließen können. Der Warenkorb-Zustand wird zentral über einen Provider verwaltet, das gewählte Farbschema (Hell/Dunkel) wird dauerhaft lokal gespeichert. Für eine spätere Backend-Anbindung (Firebase, REST-API, Login/Registrierung) sind bereits Platzhalterdateien in der Projektstruktur angelegt, diese enthalten aktuell jedoch noch keine Implementierung.',
    technologies: ['Flutter', 'Dart', 'Provider'],
    features: [
      'Produktübersicht mit Demo-Daten',
      'Suche und Kategorie-Filter',
      'Warenkorb mit Mengenanpassung',
      'Checkout-Simulation',
      'Persistenter Hell-/Dunkel-Modus',
    ],
    focus: ['Mobile UI', 'State Management mit Provider', 'Lokale Datenpersistenz'],
    role: 'Eigenständige Konzeption und Umsetzung der App-Struktur (Screens, Provider, Models, Widgets) als persönliches Lernprojekt.',
    highlights: [
      'Vollständige Shop-Navigation von der Übersicht bis zum simulierten Checkout',
      'Klare Trennung von Models, Providern, Screens und Widgets',
    ],
    keyLearnings: [
      'Strukturierung einer Flutter-App nach Verantwortlichkeiten (Models/Providers/Screens/Widgets)',
      'Zustandsverwaltung mit dem Provider-Package',
      'Lokale Datenpersistenz für Nutzereinstellungen',
      'Planung einer Backend-Anbindung auch wenn sie noch nicht umgesetzt ist',
    ],
    liveUrl: 'https://plan-prototyp-produktion.pages.dev/',
  },
  {
    id: 'flutter-todo-app',
    title: 'Flutter ToDo App',
    category: 'Mobile Development',
    status: 'Abgeschlossenes Lernprojekt',
    shortDescription:
      'Eine mobile Aufgabenverwaltung mit lokaler, dauerhafter Speicherung, umgesetzt mit Flutter und Dart. Das Projekt entstand im Rahmen einer Weiterbildung zur mobilen App-Entwicklung.',
    description:
      'Aufgaben lassen sich mit Titel, Beschreibung, Fälligkeitsdatum und Priorität anlegen, bearbeiten, als erledigt markieren und per Wischgeste löschen. Kombinierbare Status- und Prioritätsfilter sowie eine Sortierung helfen, den Überblick zu behalten; überfällige Aufgaben werden automatisch erkannt. Die Daten werden lokal gespeichert, ein defensives Lade-Verfahren überspringt einzelne fehlerhafte Datensätze, statt die gesamte Liste unbrauchbar zu machen. Die Oberfläche basiert auf Material 3 mit dauerhaft gespeichertem Hell-/Dunkelmodus.',
    technologies: ['Flutter', 'Dart', 'shared_preferences'],
    features: [
      'Aufgaben erstellen, bearbeiten, abschließen, per Wischgeste löschen',
      'Titel, Beschreibung, Fälligkeitsdatum, Priorität',
      'kombinierbare Status- und Prioritätsfilter mit Sortierung',
      'automatische Erkennung überfälliger Aufgaben',
      'persistenter Hell-/Dunkelmodus',
    ],
    focus: ['Mobile UI', 'Lokale Datenpersistenz', 'Defensive Fehlerbehandlung'],
    role: 'Eigenständige praktische Umsetzung im Rahmen der Weiterbildung im Bereich Mobile Development.',
    highlights: [
      'Robuste Datenhaltung: beschädigte einzelne Einträge werden übersprungen statt die App abstürzen zu lassen',
      'State Management ohne zusätzliches Framework, allein mit Flutter-Bordmitteln',
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
      'Eine mobile Chat-Anwendung mit E-Mail-Registrierung/-Login und Echtzeit-Nachrichten über Firebase. Das Projekt verbindet eine Flutter-Oberfläche mit einem cloudbasierten Backend.',
    description:
      'Ein Auth Gate leitet abhängig vom Firebase-Authentifizierungsstatus automatisch zwischen Login-/Registrierungs-Bildschirm und dem Chat-Bildschirm weiter. Nachrichten werden über einen eigenen Message-Service in Cloud Firestore geschrieben (Text, Absender-UID, Absender-E-Mail, Zeitstempel) und über einen Firestore-Stream in Echtzeit an alle Clients synchronisiert und chronologisch dargestellt. Die Konfiguration erfolgt über eine generierte FlutterFire-Konfigurationsdatei; serverseitige Firestore Security Rules sind im Repository selbst nicht enthalten und daher aus dem Code nicht überprüfbar.',
    technologies: ['Flutter', 'Dart', 'Firebase Authentication', 'Cloud Firestore'],
    features: [
      'E-Mail-Registrierung und -Login',
      'automatische Weiterleitung je nach Anmeldestatus (Auth Gate)',
      'Echtzeit-Chat über Firestore-Streams',
      'chronologische Nachrichtenliste mit Absendername und Zeitstempel',
    ],
    focus: ['Firebase Authentication', 'Cloud Firestore & Echtzeitdaten', 'Stream-basierte UI-Aktualisierung'],
    role: 'Eigenständige praktische Umsetzung im Rahmen eines Lern-/Praxisprojekts zur Vertiefung von Mobile Development mit Backend-Anbindung.',
    highlights: [
      'Echtes Realtime-Pattern über Firestore-Snapshots statt Polling',
      'Sauberer Auth-Gate-Ansatz über einen reaktiven Authentifizierungs-Stream',
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
      'Ein deterministischer, agentenbasierter Simulations-Prototyp einer kleinen Welt (Personen, Tiere, Bedürfnisse, Wirtschaft), umgesetzt in TypeScript mit CLI und Web-Oberfläche.',
    description:
      'Die Simulation basiert auf einer geschichteten Architektur (Domain, World, Simulation, Application, Observability, Persistence, Presentation) mit zwölf unabhängigen Tick-Systemen, sieben Event-Typen und einer einfachen Utility-KI mit sechs Aktionstypen, unter anderem Essen, Schlafen, Arbeiten, Handeln und Sozialisieren. Ein zentraler Zufallsgenerator-Orchestrator leitet aus einem Seed deterministische, benannte Teil-Zufallsströme ab, sodass Simulationsläufe reproduzierbar bleiben – gespeicherte Stände lassen sich laden und liefern exakt denselben weiteren Verlauf wie ein direkter Durchlauf. Neben einer CLI zum Ausführen, Speichern und Inspizieren von Läufen existiert eine eigenständige Web-Oberfläche mit einer SVG-basierten Kartendarstellung von Orten, Verbindungen sowie Personen- und Tierfiguren inklusive Klick-Interaktion. Die Engine ist mit 287 automatisierten Tests abgesichert, inklusive dedizierter Determinismus-Tests für den Speicher-/Ladezyklus.',
    technologies: ['TypeScript', 'Node.js', 'Vite', 'Vitest', 'Zod'],
    features: [
      'CLI zum Ausführen, Speichern/Laden und Inspizieren von Simulationsläufen',
      'Web-Oberfläche mit SVG-Weltkarte und klickbaren Orten/Figuren',
      'deterministisches Speichern und Laden von Simulationsständen',
      'Event-Feed mit Filtermöglichkeit nach Ereignistyp',
      '„Beobachten"-Funktion für einzelne Personen mit Live-Verlauf',
    ],
    focus: [
      'Agentenbasierte Simulation',
      'Deterministische Systeme',
      'Event-getriebene Architektur',
      'Softwarearchitektur & Schichtentrennung',
      'Testbarkeit',
    ],
    role: 'Eigenständige Konzeption und technische Umsetzung der gesamten Simulationsarchitektur, der CLI sowie der Web-Oberfläche als persönliches Experimentier- und Vertiefungsprojekt.',
    highlights: [
      '287 von 287 automatisierten Tests bestehen',
      'Determinismus praktisch verifiziert: Speichern, Weiterlaufen und Laden führt exakt zum gespeicherten Stand zurück',
      'zwei unabhängige, gleichberechtigte Präsentationswege (CLI und Web) auf derselben Engine',
      'beobachtete Emergenz: aus einfachen Regeln entstanden im Testlauf eigenständig eine Partnerschaft und eine Geburt',
    ],
    keyLearnings: [
      'Entwurf einer erweiterbaren, klar geschichteten Systemarchitektur',
      'Umsetzung deterministischer Simulationen mit reproduzierbaren, benannten Zufallsströmen',
      'Konzeption ereignisgetriebener Systeme mit typisierten Events',
      'Trennung von Simulationslogik und Beobachtung',
      'Absicherung komplexer Logik durch automatisierte Tests, inklusive dedizierter Determinismus-Tests',
    ],
    githubUrl: 'https://github.com/Alexandra-S-new/rapid-extendable-prototyping',
  },
]
