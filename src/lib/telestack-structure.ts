/**
 * TeleStack Platform Structure
 * 
 * TeleStack is a unified platform combining three powerful open-source technologies:
 * 1. Appwrite - Backend services (auth, databases, storage, functions)
 * 2. LiveKit - Real-time communication (video, audio, streaming)
 * 3. Matrix - Federated messaging (chat, E2E encryption)
 */

export const PLATFORM_PILLARS = {
    BACKEND: 'backend',
    COMMUNICATION: 'communication',
    MESSAGING: 'messaging'
} as const;

export type PlatformPillar = typeof PLATFORM_PILLARS[keyof typeof PLATFORM_PILLARS];

// Product Categories - Organized by platform pillar
export const PRODUCT_STRUCTURE = {
    backend: {
        name: 'Backend Services',
        description: 'Complete backend infrastructure for modern applications',
        icon: '🗄️',
        color: '#F02E65', // Pink
        products: [
            {
                id: 'auth',
                name: 'Authentication',
                slug: 'auth',
                description: 'Secure user authentication and authorization',
                icon: '🔐',
                features: ['OAuth', 'Email/Password', 'Phone Auth', 'Anonymous', 'MFA', 'Sessions']
            },
            {
                id: 'databases',
                name: 'Databases',
                slug: 'databases',
                description: 'NoSQL database with real-time capabilities',
                icon: '🗃️',
                features: ['Collections', 'Documents', 'Queries', 'Relationships', 'Indexes', 'Backups']
            },
            {
                id: 'storage',
                name: 'Storage',
                slug: 'storage',
                description: 'File storage with built-in image optimization',
                icon: '📁',
                features: ['Buckets', 'File Upload', 'Image Preview', 'Compression', 'Permissions']
            },
            {
                id: 'functions',
                name: 'Functions',
                slug: 'functions',
                description: 'Serverless functions for custom backend logic',
                icon: '⚡',
                features: ['Multiple Runtimes', 'Scheduled', 'Event-driven', 'Custom Domains', 'Logs']
            }
        ]
    },
    communication: {
        name: 'Real-time Communication',
        description: 'Video, audio, and live streaming infrastructure',
        icon: '📹',
        color: '#00D4AA', // Teal/Green
        products: [
            {
                id: 'video',
                name: 'Video Conferencing',
                slug: 'video',
                description: 'Multi-party video calls with HD quality',
                icon: '🎥',
                features: ['HD Video', 'Screen Share', 'Recording', 'Simulcast', 'SFU Architecture']
            },
            {
                id: 'audio',
                name: 'Audio Rooms',
                slug: 'audio',
                description: 'Crystal-clear audio conferencing and voice chat',
                icon: '🎙️',
                features: ['Voice Rooms', 'Noise Cancellation', 'Spatial Audio', 'Recording']
            },
            {
                id: 'streaming',
                name: 'Live Streaming',
                slug: 'streaming',
                description: 'Broadcast to thousands with low latency',
                icon: '📡',
                features: ['RTMP Ingest', 'HLS/WebRTC', 'Recording', 'Transcoding', 'CDN']
            },
            {
                id: 'tracks',
                name: 'Media Tracks',
                slug: 'tracks',
                description: 'Manage audio, video, and data tracks',
                icon: '🎬',
                features: ['Track Control', 'Quality Adaptation', 'Bandwidth Management']
            }
        ]
    },
    messaging: {
        name: 'Federated Messaging',
        description: 'Decentralized, encrypted communication',
        icon: '💬',
        color: '#7B61FF', // Purple
        products: [
            {
                id: 'chat',
                name: 'Chat & Messaging',
                slug: 'chat',
                description: 'Real-time messaging with E2E encryption',
                icon: '💬',
                features: ['Direct Messages', 'Group Chat', 'E2E Encryption', 'Read Receipts', 'Typing Indicators']
            },
            {
                id: 'rooms',
                name: 'Chat Rooms',
                slug: 'rooms',
                description: 'Public and private chat spaces',
                icon: '🏠',
                features: ['Public Rooms', 'Private Spaces', 'Moderation', 'Permissions', 'Topics']
            },
            {
                id: 'federation',
                name: 'Federation',
                slug: 'federation',
                description: 'Connect with other Matrix homeservers',
                icon: '🌐',
                features: ['Cross-server', 'Decentralized', 'Server Discovery', 'Event Sync']
            },
            {
                id: 'voip',
                name: 'Voice Messages',
                slug: 'voip',
                description: 'Voice and video calling in chat',
                icon: '📞',
                features: ['Voice Messages', 'Video Calls', 'Call History', 'WebRTC']
            }
        ]
    }
} as const;

// Navigation structure for docs
export const DOCS_NAVIGATION = {
    'Getting Started': [
        { title: 'Introduction', href: '/docs' },
        { title: 'Quick Start', href: '/docs/quick-start' },
        { title: 'Platform Overview', href: '/docs/platform' },
        { title: 'Architecture', href: '/docs/architecture' }
    ],
    'Backend Services': [
        { title: 'Authentication', href: '/docs/backend/auth' },
        { title: 'Databases', href: '/docs/backend/databases' },
        { title: 'Storage', href: '/docs/backend/storage' },
        { title: 'Functions', href: '/docs/backend/functions' }
    ],
    'Real-time Communication': [
        { title: 'Video Conferencing', href: '/docs/communication/video' },
        { title: 'Audio Rooms', href: '/docs/communication/audio' },
        { title: 'Live Streaming', href: '/docs/communication/streaming' },
        { title: 'Media Tracks', href: '/docs/communication/tracks' }
    ],
    'Federated Messaging': [
        { title: 'Chat & Messaging', href: '/docs/messaging/chat' },
        { title: 'Chat Rooms', href: '/docs/messaging/rooms' },
        { title: 'Federation', href: '/docs/messaging/federation' },
        { title: 'Voice & Video', href: '/docs/messaging/voip' }
    ],
    'Integration Guides': [
        { title: 'Backend + Video', href: '/docs/guides/backend-video' },
        { title: 'Backend + Chat', href: '/docs/guides/backend-chat' },
        { title: 'Video + Chat', href: '/docs/guides/video-chat' },
        { title: 'Full Stack App', href: '/docs/guides/full-stack' }
    ],
    'SDKs & APIs': [
        { title: 'JavaScript/TypeScript', href: '/docs/sdks/javascript' },
        { title: 'React', href: '/docs/sdks/react' },
        { title: 'Flutter', href: '/docs/sdks/flutter' },
        { title: 'REST API', href: '/docs/api/rest' },
        { title: 'GraphQL API', href: '/docs/api/graphql' }
    ],
    'Deployment': [
        { title: 'Azure Setup', href: '/docs/deployment/azure' },
        { title: 'Configuration', href: '/docs/deployment/config' },
        { title: 'Scaling', href: '/docs/deployment/scaling' },
        { title: 'Monitoring', href: '/docs/deployment/monitoring' }
    ]
} as const;

// Use cases showcasing the unified platform
export const USE_CASES = [
    {
        title: 'Telemedicine Platform',
        description: 'HIPAA-compliant video consultations with secure patient records and encrypted messaging',
        pillars: ['backend', 'communication', 'messaging'],
        features: ['Video Appointments', 'Patient Database', 'Secure Messaging', 'File Sharing']
    },
    {
        title: 'Remote Collaboration',
        description: 'Complete workspace with video meetings, team chat, and document storage',
        pillars: ['backend', 'communication', 'messaging'],
        features: ['HD Video Calls', 'Team Chat', 'File Storage', 'Screen Sharing']
    },
    {
        title: 'Live Learning Platform',
        description: 'Interactive classrooms with live streaming, chat, and assignment tracking',
        pillars: ['backend', 'communication', 'messaging'],
        features: ['Live Classes', 'Student Database', 'Class Chat', 'Recordings']
    },
    {
        title: 'Social Gaming',
        description: 'Multiplayer games with voice chat, user profiles, and leaderboards',
        pillars: ['backend', 'communication', 'messaging'],
        features: ['Voice Chat', 'User Auth', 'Databases', 'Real-time Updates']
    },
    {
        title: 'Customer Support',
        description: 'Omnichannel support with video support, chat, and ticket management',
        pillars: ['backend', 'communication', 'messaging'],
        features: ['Video Support', 'Live Chat', 'Ticket Database', 'File Attachments']
    },
    {
        title: 'Community Platform',
        description: 'Build engaged communities with forums, live events, and member profiles',
        pillars: ['backend', 'communication', 'messaging'],
        features: ['User Profiles', 'Live Events', 'Community Chat', 'Member Database']
    }
] as const;

// Pricing tiers for TeleStack
export const PRICING_TIERS = {
    FREE: {
        name: 'Developer',
        price: 0,
        description: 'Perfect for testing and development',
        limits: {
            users: '1,000',
            storage: '2 GB',
            bandwidth: '10 GB',
            videoMinutes: '100 minutes/month',
            messages: '10,000/month'
        }
    },
    PRO: {
        name: 'Professional',
        price: 49,
        description: 'For growing applications',
        limits: {
            users: '100,000',
            storage: '100 GB',
            bandwidth: '500 GB',
            videoMinutes: '10,000 minutes/month',
            messages: '1,000,000/month'
        }
    },
    SCALE: {
        name: 'Scale',
        price: 299,
        description: 'For high-traffic applications',
        limits: {
            users: 'Unlimited',
            storage: '1 TB',
            bandwidth: '5 TB',
            videoMinutes: '100,000 minutes/month',
            messages: 'Unlimited'
        }
    },
    ENTERPRISE: {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Custom solutions for large organizations',
        limits: {
            users: 'Unlimited',
            storage: 'Custom',
            bandwidth: 'Custom',
            videoMinutes: 'Custom',
            messages: 'Unlimited'
        }
    }
} as const;
