import { MetadataRoute } from 'next';
import { siteMetadata } from '../data/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.url;

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
