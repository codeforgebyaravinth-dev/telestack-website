import type { AuthorData } from '$routes/blog/content';

export const DEFAULT_HOST = 'https://telestack.dev';
export const DEFAULT_DESCRIPTION =
    'TeleStack unifies backend services (Appwrite), real-time video/audio (LiveKit), and federated messaging (Matrix) into one privacy-first platform. Build complete applications with authentication, databases, video conferencing, and encrypted chat.';

/**
 * Generates an Open Graph image URL with encoded title and description.
 */
export function buildOpenGraphImage(title: string, description: string): string {
    return `https://og.appwrite.global/image.png?title=${encodeURIComponent(
        title
    )}&subtitle=${encodeURIComponent(description)}`;
}

/**
 * Returns an inlined JSON-LD script tag without breaking IDE formatting.
 */
export function getInlinedScriptTag(jsonSchema: string): string {
    return `<script type="application/ld+json">${jsonSchema}</` + 'script>';
}

/**
 * Returns the JSON-LD schema for the TeleStack organization.
 */
export function organizationJsonSchema() {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: 'https://telestack.dev',
        sameAs: [
            'https://www.linkedin.com/company/telestack',
            'https://github.com/telestack/telestack',
            'https://www.producthunt.com/products/telestack',
            'https://x.com/telestack'
        ],
        name: 'TeleStack',
        legalName: 'TeleStack Code Ltd.',
        description:
            'TeleStack is a unified, privacy-first platform combining Appwrite (backend services), LiveKit (real-time video/audio), and Matrix (federated messaging). Complete infrastructure for modern applications including authentication, databases, storage, serverless functions, video conferencing, live streaming, and encrypted chat.',
        logo: 'https://telestack.dev/assets/logotype/white.png'
    });
}

/**
 * Returns the JSON-LD schema for the TeleStack software application.
 */
export function softwareAppSchema() {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'TeleStack',
        applicationCategory: 'Developer Platform',
        featureList: 'Authentication, Databases, Storage, Serverless Functions, Video Conferencing, Audio Rooms, Live Streaming, Federated Chat, E2E Encryption, Real-time Updates',
        audience: {
            '@type': 'Audience',
            audienceType: 'Developers, Startups, Enterprises'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free tier available'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            bestRating: '5',
            ratingValue: '4.9',
            ratingCount: '150'
        }
    });
}

/**
 * Returns the JSON-LD schema for a blog post.
 */
export function createPostSchema(
    post: { title: string; cover: string; date: string; lastUpdated?: string },
    author?: AuthorData
) {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [post.cover],
        datePublished: post.date,
        ...(post.lastUpdated && { dateModified: post.lastUpdated }),
        ...(author && {
            author: [
                {
                    '@type': 'Person',
                    url: author.href,
                    name: author.name
                }
            ]
        })
    });
}

/**
 * Returns the JSON-LD schema for breadcrumbs.
 */
export function createBreadcrumbsSchema(articleInfo: {
    title: string;
    category: string;
    url: string;
}): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Blog',
                item: 'https://telestack.dev/blog'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: articleInfo.category,
                item: `https://telestack.dev/blog?category=${articleInfo.category}`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: articleInfo.title,
                item: articleInfo.url
            }
        ]
    });
}

/**
 * Returns the JSON-LD schema for faqs.
 */
export function createFaqSchema(
    faqs: Array<{
        question: string;
        answer: string;
    }>
): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    });
}
