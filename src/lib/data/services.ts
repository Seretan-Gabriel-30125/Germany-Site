export type Service = {
  id: 'fassade' | 'dach' | 'pflaster' | 'holz' | 'steinteppich';
  title: string;
  short: string;
  bullets: string[];
  icon: 'paint' | 'roof' | 'wash' | 'wood' | 'stone';
};

export const services: Service[] = [
  {
    id: 'fassade',
    title: 'Fassaden streichen',
    short: 'Saubere Ausführung, langlebiger Schutz und ein moderner Look.',
    bullets: ['Untergrundprüfung & Ausbesserung', 'Grundierung & Anstrichsystem', 'Kanten & Details präzise'],
    icon: 'paint'
  },
  {
    id: 'dach',
    title: 'Dachreinigung',
    short: 'Schonende Reinigung gegen Moos/Algen – optisch wie neu.',
    bullets: ['Moos/Algen entfernen', 'Schonende Hochdruck-/Niederdruck-Optionen', 'Imprägnierung auf Wunsch'],
    icon: 'roof'
  },
  {
    id: 'pflaster',
    title: 'Pflaster & Einfahrten reinigen',
    short: 'Tiefenreinigung für Gehwege, Einfahrten und Terrassen.',
    bullets: ['Fugen & Kanten sauber', 'Unkraut/Beläge entfernen', 'Versiegelung optional'],
    icon: 'wash'
  },
  {
    id: 'holz',
    title: 'Holz streichen',
    short: 'Schutz vor Wetter, UV und Feuchtigkeit – sauberer Holzschutz.',
    bullets: ['Schleifen & Vorbehandlung', 'Lasur/Lack nach System', 'Detaillierte Kantenarbeit'],
    icon: 'wood'
  },
  {
    id: 'steinteppich',
    title: 'Steinteppich',
    short: 'Fugenlos, modern, rutschfest – ideal für Treppen & Eingänge.',
    bullets: ['Für Innen & Außen', 'Rutschhemmung möglich', 'Viele Farben/Körnungen'],
    icon: 'stone'
  }
];
