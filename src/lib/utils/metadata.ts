import type { AuthorData } from '$routes/blog/content';

export const DEFAULT_HOST = 'https://telestack.dev';
export const DEFAULT_DESCRIPTION =
    'TeleStack is a unified platform merging multiple open-source technologies into a privacy-first service. Providing authentication, databases, storage, functions, real-time communication, video/audio conferencing, and federated messaging for modern applications.';

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
            'A unified platform merging multiple open-source technologies into a privacy-first service. TeleStack provides authentication, databases, storage, functions, messaging, real-time communication, video/audio conferencing, and federated messaging capabilities.',
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
        applicationCategory: 'Software development',
        featureList: 'Authentication, Database, Storage, Functions, Messaging, Real-time Communication, Video/Audio Conferencing, Federated Messaging',
        audience: {
            '@type': 'Audience',
            audienceType: 'Developers'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            bestRating: '5',
            ratingValue: '4.8',
            ratingCount: '74'
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
