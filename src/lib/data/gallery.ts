import type { ServiceId } from './services';

export type GalleryTag = 'Dachsanierung' | 'Steinteppich' | 'Spezialverfugung' | 'Vorher/Nachher';

export type GalleryItem = {
  src: string;
  thumb: string;
  alt: string;
  title: string;
  caption: string;
  tag: GalleryTag;
  service: Extract<ServiceId, 'dachsanierung' | 'steinteppich' | 'spezialverfugung'>;
};

export const gallery: GalleryItem[] = [
  {
    src: '/images/dachreinigung-vorher-1.jpg',
    thumb: '/images/dachreinigung-vorher-1.jpg',
    alt: 'Dachsanierung – Dachfläche vor der Aufbereitung',
    title: 'Dach vorher',
    caption: 'Vor der Aufbereitung',
    tag: 'Dachsanierung',
    service: 'dachsanierung'
  },
  {
    src: '/images/dachreinigung-nachher-1.jpg',
    thumb: '/images/dachreinigung-nachher-1.jpg',
    alt: 'Dachsanierung – Dachfläche nach der Aufbereitung',
    title: 'Dach nachher',
    caption: 'Frische, saubere Dachfläche',
    tag: 'Dachsanierung',
    service: 'dachsanierung'
  },
  {
    src: '/images/dachreinigung-vergleich-1.jpg',
    thumb: '/images/dachreinigung-vergleich-1.jpg',
    alt: 'Dachsanierung – Vorher/Nachher im direkten Vergleich',
    title: 'Direkter Vergleich',
    caption: 'Vorher / Nachher',
    tag: 'Vorher/Nachher',
    service: 'dachsanierung'
  },
  {
    src: '/images/augsburg-munchen-germany-4.webp',
    thumb: '/images/augsburg-munchen-germany-4-800.webp',
    alt: 'Steinteppich – Treppe im Zustand davor',
    title: 'Treppe vorher',
    caption: 'Vor der Ausführung',
    tag: 'Vorher/Nachher',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-5.webp',
    thumb: '/images/augsburg-munchen-germany-5-800.webp',
    alt: 'Steinteppich – Treppe nach der Ausführung',
    title: 'Treppe nachher',
    caption: 'Mit Steinteppich',
    tag: 'Vorher/Nachher',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-10.webp',
    thumb: '/images/augsburg-munchen-germany-10-800.webp',
    alt: 'Steinteppich – Vorbereitung der Treppe',
    title: 'Vorbereitung',
    caption: 'Untergrund und Aufbau',
    tag: 'Steinteppich',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-11.webp',
    thumb: '/images/augsburg-munchen-germany-11-800.webp',
    alt: 'Steinteppich – Detailaufnahme der Oberfläche',
    title: 'Oberfläche',
    caption: 'Detailaufnahme',
    tag: 'Steinteppich',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-12.webp',
    thumb: '/images/augsburg-munchen-germany-12-800.webp',
    alt: 'Steinteppich – fertige Treppe mit modernem Finish',
    title: 'Fertige Treppe',
    caption: 'Modernes Finish',
    tag: 'Steinteppich',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-1.webp',
    thumb: '/images/augsburg-munchen-germany-1-800.webp',
    alt: 'Außenbereich – Vorher mit dunklem Pflaster und Belägen',
    title: 'Außenbereich vorher',
    caption: 'Vor der Aufwertung',
    tag: 'Vorher/Nachher',
    service: 'spezialverfugung'
  },
  {
    src: '/images/augsburg-munchen-germany-2.webp',
    thumb: '/images/augsburg-munchen-germany-2-800.webp',
    alt: 'Außenbereich – Nachher mit sauberem, hellem Gesamtbild',
    title: 'Außenbereich nachher',
    caption: 'Nach der Aufwertung',
    tag: 'Vorher/Nachher',
    service: 'spezialverfugung'
  },
  {
    src: '/images/augsburg-munchen-germany-3.webp',
    thumb: '/images/augsburg-munchen-germany-3-800.webp',
    alt: 'Dachsanierung – Referenz nach der sichtbaren Aufwertung',
    title: 'Referenzdach',
    caption: 'Nach der Aufwertung',
    tag: 'Dachsanierung',
    service: 'dachsanierung'
  },
  {
    src: '/images/augsburg-munchen-germany-6.webp',
    thumb: '/images/augsburg-munchen-germany-6-800.webp',
    alt: 'Steinteppich – Außenfläche mit sauberem Abschluss',
    title: 'Außenfläche',
    caption: 'Mit sauberem Abschluss',
    tag: 'Steinteppich',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-7.webp',
    thumb: '/images/augsburg-munchen-germany-7-800.webp',
    alt: 'Steinteppich – Rampe und Eingangsbereich',
    title: 'Eingangsbereich',
    caption: 'Rampe und Zugang',
    tag: 'Steinteppich',
    service: 'steinteppich'
  },
  {
    src: '/images/augsburg-munchen-germany-8.webp',
    thumb: '/images/augsburg-munchen-germany-8-800.webp',
    alt: 'Spezialverfugung – Außenfläche vor der Aufwertung',
    title: 'Außenfläche vorher',
    caption: 'Vor der Aufwertung',
    tag: 'Spezialverfugung',
    service: 'spezialverfugung'
  },
  {
    src: '/images/augsburg-munchen-germany-9.webp',
    thumb: '/images/augsburg-munchen-germany-9-800.webp',
    alt: 'Spezialverfugung – Außenbereich im Bestand',
    title: 'Bestand außen',
    caption: 'Referenz im Außenbereich',
    tag: 'Spezialverfugung',
    service: 'spezialverfugung'
  }
];
