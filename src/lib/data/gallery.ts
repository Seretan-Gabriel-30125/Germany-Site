export type GalleryItem = {
  src: string;
  thumb: string;
  alt: string;
  tag: 'Steinteppich' | 'Dach' | 'Vorher/Nachher' | 'Außenbereich';
};

export const gallery: GalleryItem[] = [
  { src: '/images/augsburg-munchen-germany-1.webp', thumb: '/images/augsburg-munchen-germany-1-800.webp', alt: 'Steinteppich-Treppe – Detail', tag: 'Steinteppich' },
  { src: '/images/augsburg-munchen-germany-2.webp', thumb: '/images/augsburg-munchen-germany-2-800.webp', alt: 'Dachreinigung – Vorher', tag: 'Dach' },
  { src: '/images/augsburg-munchen-germany-3.webp', thumb: '/images/augsburg-munchen-germany-3-800.webp', alt: 'Dach – Nachher', tag: 'Dach' },
  { src: '/images/augsburg-munchen-germany-4.webp', thumb: '/images/augsburg-munchen-germany-4-800.webp', alt: 'Treppe – Vorher', tag: 'Vorher/Nachher' },
  { src: '/images/augsburg-munchen-germany-5.webp', thumb: '/images/augsburg-munchen-germany-5-800.webp', alt: 'Treppe – Nachher (Steinteppich)', tag: 'Steinteppich' },
  { src: '/images/augsburg-munchen-germany-6.webp', thumb: '/images/augsburg-munchen-germany-6-800.webp', alt: 'Steinteppich – Fläche', tag: 'Außenbereich' },
  { src: '/images/augsburg-munchen-germany-7.webp', thumb: '/images/augsburg-munchen-germany-7-800.webp', alt: 'Steinteppich – Rampe / Eingang', tag: 'Außenbereich' },
  { src: '/images/augsburg-munchen-germany-8.webp', thumb: '/images/augsburg-munchen-germany-8-800.webp', alt: 'Pflaster reinigen – Vorher', tag: 'Vorher/Nachher' },
  { src: '/images/augsburg-munchen-germany-9.webp', thumb: '/images/augsburg-munchen-germany-9-800.webp', alt: 'Pflaster – Vorher (Gesamt)', tag: 'Vorher/Nachher' },
  { src: '/images/augsburg-munchen-germany-10.webp', thumb: '/images/augsburg-munchen-germany-10-800.webp', alt: 'Treppe – Vorbereitung', tag: 'Steinteppich' },
  { src: '/images/augsburg-munchen-germany-11.webp', thumb: '/images/augsburg-munchen-germany-11-800.webp', alt: 'Treppe – Steinteppich (Detail)', tag: 'Steinteppich' },
  { src: '/images/augsburg-munchen-germany-12.webp', thumb: '/images/augsburg-munchen-germany-12-800.webp', alt: 'Treppe – Steinteppich (Final)', tag: 'Steinteppich' }
];
