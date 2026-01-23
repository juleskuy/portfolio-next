import { MetadataRoute } from 'next'
import { portfolioData } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: portfolioData.website,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add other routes if/when they exist (e.g. /projects, /blog)
    ]
}
