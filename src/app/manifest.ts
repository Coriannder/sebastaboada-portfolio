import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sebastián Taboada — Biomedical Engineer & Full Stack Developer',
    short_name: 'S. Taboada',
    description:
      'Professional portfolio of Sebastián Taboada. HealthTech specialist, clean backend architectures, and AI agents.',
    start_url: '/es',
    display: 'standalone',
    background_color: '#090a14',
    theme_color: '#090a14',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
