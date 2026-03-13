export type ServiceId =
  | 'beratung'
  | 'dachsanierung'
  | 'flachdachsanierung'
  | 'fassade'
  | 'trockenlegung'
  | 'holz'
  | 'spezialverfugung'
  | 'steinteppich';

export type Service = {
  id: ServiceId;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: 'paint' | 'roof' | 'wash' | 'wood' | 'stone';
  highlight: string;
  proof: 'bilder-verfuegbar' | 'beratung' | 'leistungen-ohne-bild';
};

export const services: Service[] = [
  {
    id: 'beratung',
    title: 'Kostenlose Beratung',
    short: 'Schnelle Ersteinschätzung, klare Empfehlung und ein transparentes Angebot.',
    description: 'Wir schauen uns das Objekt an, besprechen den Bedarf und empfehlen die passende Lösung ohne unnötige Zusatzarbeiten.',
    bullets: ['Kurze Anfrage per Telefon oder WhatsApp', 'Besichtigung vor Ort', 'Saubere Kalkulation & ehrliche Einschätzung'],
    icon: 'wash',
    highlight: 'Ideal als erster Schritt vor jeder Sanierung.',
    proof: 'beratung'
  },
  {
    id: 'dachsanierung',
    title: 'Dachsanierung',
    short: 'Optische Aufwertung und fachgerechte Arbeiten rund um geneigte Dächer.',
    description: 'Die vorhandenen Bilder zeigen deutlich Dachflächen vor und nach der Aufbereitung. Dieses Thema ordnen wir deshalb der Dachsanierung zu.',
    bullets: ['Aufbereitung stark beanspruchter Dachflächen', 'Vorher/Nachher sichtbar dokumentiert', 'Sauberer Gesamteindruck für das ganze Haus'],
    icon: 'roof',
    highlight: 'Mit mehreren echten Vorher/Nachher-Bildern im Projektbereich.',
    proof: 'bilder-verfuegbar'
  },
  {
    id: 'flachdachsanierung',
    title: 'Flachdachsanierung',
    short: 'Sanierungslösungen für flache Dachflächen und sensible Anschlüsse.',
    description: 'Auch Flachdachsanierungen gehören zum Leistungsspektrum. Dafür liegt im aktuellen Projektmaterial noch kein eigenes Bildset vor.',
    bullets: ['Anschlussbereiche & Details im Blick', 'Schutz gegen Feuchtigkeit', 'Passend für Anbauten, Garagen und Nebengebäude'],
    icon: 'roof',
    highlight: 'Leistung vorhanden, Bildmaterial kann später ergänzt werden.',
    proof: 'leistungen-ohne-bild'
  },
  {
    id: 'fassade',
    title: 'Fassadenanstrich und Reinigung',
    short: 'Frischer Gesamteindruck, gepflegte Oberflächen und saubere Ausführung.',
    description: 'Die Fassade prägt den ersten Eindruck des Hauses. Wir führen Reinigung und Anstrich so aus, dass Schutz und Optik zusammenpassen.',
    bullets: ['Reinigung belasteter Flächen', 'Neuer Fassadenanstrich', 'Saubere Kanten und stimmiges Gesamtbild'],
    icon: 'paint',
    highlight: 'Perfekt kombinierbar mit Dach- und Außenbereichsarbeiten.',
    proof: 'leistungen-ohne-bild'
  },
  {
    id: 'trockenlegung',
    title: 'Mauertrockenlegung',
    short: 'Nachhaltige Lösungen gegen Feuchtigkeit im Mauerwerk.',
    description: 'Diese Leistung gehört zum Angebot, ist im aktuellen Bildbestand aber noch nicht separat dokumentiert.',
    bullets: ['Analyse des Feuchtigkeitsbilds', 'Maßnahmen passend zum Bestand', 'Schutz der Bausubstanz'],
    icon: 'wash',
    highlight: 'Wichtige Basisleistung für langfristige Werterhaltung.',
    proof: 'leistungen-ohne-bild'
  },
  {
    id: 'holz',
    title: 'Holzanstriche',
    short: 'Schutz und Pflege für Holzflächen im Außenbereich.',
    description: 'Holzflächen brauchen einen Anstrich, der nicht nur gut aussieht, sondern auch gegen Witterung schützt.',
    bullets: ['Vorbereitung des Untergrunds', 'Wetterfeste Beschichtungssysteme', 'Pflege für Zäune, Verkleidungen und Holzelemente'],
    icon: 'wood',
    highlight: 'Für sichtbare Aufwertung und längere Haltbarkeit.',
    proof: 'leistungen-ohne-bild'
  },
  {
    id: 'spezialverfugung',
    title: 'Spezialverfugung',
    short: 'Saubere Fugenlösungen und Aufwertung für Außenflächen.',
    description: 'Die vorhandenen Bilder von Pflaster- und Außenflächen ordnen wir der Spezialverfugung beziehungsweise Außenflächen-Aufwertung zu.',
    bullets: ['Fugen und Übergänge sauber ausgearbeitet', 'Ordentlicher Eindruck bei Einfahrten und Wegen', 'Passend für Außenbereiche mit hoher Sichtbarkeit'],
    icon: 'wash',
    highlight: 'Mit Beispielen aus dem Außenbereich in der Galerie.',
    proof: 'bilder-verfuegbar'
  },
  {
    id: 'steinteppich',
    title: 'Steinteppich',
    short: 'Moderne, fugenarme Oberfläche für Treppen, Eingänge und Außenbereiche.',
    description: 'Hier liegt das stärkste Bildmaterial vor: Treppen, Flächen und Eingänge zeigen die Leistung sehr klar im Vorher/Nachher-Vergleich.',
    bullets: ['Für Treppen, Eingänge und Flächen', 'Modernes Finish mit hochwertiger Optik', 'Viele echte Projektbilder vorhanden'],
    icon: 'stone',
    highlight: 'Der visuell stärkste Bereich der aktuellen Referenzen.',
    proof: 'bilder-verfuegbar'
  }
];
