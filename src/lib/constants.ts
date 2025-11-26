type SocialStats = {
    [K in 'GITHUB' | 'DISCORD' | 'TWITTER' | 'YOUTUBE']: {
        STAT: string;
        LINK: string;
        EXTRA?: Record<string, string> | undefined;
    };
};

export const SOCIAL_STATS: SocialStats = {
    GITHUB: {
        STAT: '53K',
        LINK: 'https://github.com/telestack/telestack',
        EXTRA: {
            COMMITS: '27K+',
            PULL_REQUESTS: '4.7K+',
            ISSUES: '3K+',
            OPEN_ISSUES: '600+',
            CLOSED_ISSUES: '3.3K+',
            FORKS: '4.4K+',
            CONTRIBUTORS: '800+'
        }
    },
    DISCORD: {
        STAT: '23K+',
        LINK: '/discord'
    },
    TWITTER: {
        STAT: '127K+',
        LINK: 'https://twitter.com/intent/follow?screen_name=telestack'
    },
    YOUTUBE: {
        STAT: '13K+',
        LINK: 'https://www.youtube.com/c/telestack?sub_confirmation=1'
    }
};

export const BANNER_KEY: Banners = 'discord-banner-01'; // Change key to force banner to show again

export const BLOG_POSTS_PER_PAGE = 12;

/**
 * History:
 * discord-banner-01
 * init-banner-02
 * pricing-banner-01
 */
type Banners = 'discord-banner-01' | 'init-banner-02' | 'pricing-banner-01';

export type Social = {
    icon: string;
    label: string;
    link: string;
};

export type SocialShareOption = {
    icon: string;
    label: string;
    link: string;
    type: 'link' | 'copy';
};

export type SearchableCategory = {
    slug: string;
    heading: string;
    description: string;
};

// TeleStack Platform Services - Three Core Pillars
export const TELESTACK_SERVICES = {
    BACKEND: {
        name: 'Backend Services',
        slug: 'backend',
        description: 'Complete backend infrastructure powered by Appwrite',
        icon: 'database',
        features: ['Auth', 'Databases', 'Storage', 'Functions', 'Realtime']
    },
    COMMUNICATION: {
        name: 'Real-time Communication',
        slug: 'communication',
        description: 'Video, audio, and live streaming powered by LiveKit',
        icon: 'video',
        features: ['Video Calls', 'Audio Rooms', 'Screen Sharing', 'Live Streaming', 'Recording']
    },
    MESSAGING: {
        name: 'Federated Messaging',
        slug: 'messaging',
        description: 'Decentralized messaging and chat powered by Matrix',
        icon: 'chat',
        features: ['E2E Encryption', 'Federation', 'Group Chat', 'File Sharing', 'Voice Messages']
    }
} as const;

export const integrationCategoryDescriptions: SearchableCategory[] = [
    {
        slug: 'backend',
        heading: 'Backend Services',
        description: 'Authentication, databases, storage, and serverless functions'
    },
    {
        slug: 'realtime-video',
        heading: 'Real-time Video',
        description: 'Video conferencing and live streaming solutions'
    },
    {
        slug: 'messaging',
        heading: 'Messaging & Chat',
        description: 'Federated and encrypted messaging platforms'
    },
    {
        slug: 'ai',
        heading: 'AI Integration',
        description: 'Machine learning and AI capabilities'
    },
    {
        slug: 'analytics',
        heading: 'Analytics',
        description: 'Track and analyze user behavior and platform metrics'
    },
    {
        slug: 'notifications',
        heading: 'Notifications',
        description: 'Push, email, and in-app notification systems'
    },
    {
        slug: 'payments',
        heading: 'Payments',
        description: 'Secure online payment processing'
    },
    {
        slug: 'deployment',
        heading: 'Deployment',
        description: 'CI/CD and hosting solutions'
    }
];

export const partnerCategoryDescriptions: SearchableCategory[] = [
    {
        slug: 'agency',
        heading: 'Agency',
        description: 'Find a TeleStack Partner agency for your project'
    }
];

export const socialSharingOptions: Array<SocialShareOption> = [
    {
        icon: 'web-icon-x',
        label: 'Twitter',
        link: 'https://x.com/intent/post?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: 'web-icon-linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/sharing/share-offsite?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: 'web-icon-ycombinator',
        label: 'YCombinator',
        link: 'https://news.ycombinator.com/submitlink?t={TITLE}\n&u={URL}',
        type: 'link'
    },
    {
        icon: 'web-icon-copy',
        label: 'Copy',
        link: '',
        type: 'copy'
    }
];

export const socials: Array<Social> = [
    {
        icon: 'web-icon-discord',
        label: 'Discord',
        link: 'https://telestack.io/discord'
    },
    {
        icon: 'web-icon-github',
        label: 'Github',
        link: 'https://github.com/telestack'
    },
    {
        icon: 'web-icon-x',
        label: 'Twitter',
        link: 'https://twitter.com/intent/follow?screen_name=telestack'
    },
    {
        icon: 'web-icon-linkedin',
        label: 'LinkedIn',
        link: 'https://linkedin.com/company/telestack'
    },
    {
        icon: 'web-icon-youtube',
        label: 'YouTube',
        link: 'https://youtube.com/c/telestack?sub_confirmation=1'
    },
    {
        icon: 'web-icon-daily-dev',
        label: 'Daily.dev',
        link: 'https://app.daily.dev/squads/telestack'
    },
    {
        icon: 'web-icon-bluesky',
        label: 'Bluesky',
        link: 'https://bsky.app/profile/telestack.io'
    },
    {
        icon: 'web-icon-tiktok',
        label: 'Tiktok',
        link: 'https://tiktok.com/@telestack'
    },
    {
        icon: 'web-icon-instagram',
        label: 'Instagram',
        link: 'https://instagram.com/telestack.io'
    }
];
