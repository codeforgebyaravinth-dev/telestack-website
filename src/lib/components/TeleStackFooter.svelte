<script lang="ts">
    const year = new Date().getFullYear();
    
    const footerSections = [
        {
            title: 'Platform',
            links: [
                { label: 'Overview', href: '/platform' },
                { label: 'Backend Services', href: '/products/backend' },
                { label: 'Real-time Communication', href: '/products/communication' },
                { label: 'Federated Messaging', href: '/products/messaging' },
                { label: 'Use Cases', href: '/use-cases' }
            ]
        },
        {
            title: 'Products',
            links: [
                { label: 'Authentication 🔐', href: '/docs/backend/auth' },
                { label: 'Databases 🗃️', href: '/docs/backend/databases' },
                { label: 'Storage 📁', href: '/docs/backend/storage' },
                { label: 'Video & Audio 🎥', href: '/docs/communication/video' },
                { label: 'Matrix Chat 💬', href: '/docs/messaging/chat' }
            ]
        },
        {
            title: 'Developers',
            links: [
                { label: 'Documentation', href: '/docs' },
                { label: 'Quick Starts', href: '/docs/quick-starts' },
                { label: 'SDKs', href: '/docs/sdks' },
                { label: 'API Reference', href: '/docs/apis' },
                { label: 'Community', href: '/community' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '/company' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact-us' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' }
            ]
        }
    ];
    
    const socialLinks = [
        { label: 'GitHub', icon: '🐙', href: 'https://github.com/codeforgebyaravinth-dev' },
        { label: 'Discord', icon: '💬', href: '/discord' },
        { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com/telestack' },
        { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/telestack' }
    ];
</script>

<footer class="bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0E0E10] border-t border-gray-200 dark:border-gray-800 mt-20">
    <div class="container mx-auto px-4">
        <!-- Main Footer Content -->
        <div class="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <!-- Brand Column -->
            <div class="col-span-2 space-y-4">
                <div class="text-2xl font-bold bg-gradient-to-r from-teal-500 via-green-500 to-indigo-500 bg-clip-text text-transparent">
                    TeleStack
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                    Privacy-first unified platform combining secure backend services, real-time communication, and federated messaging.
                </p>
                
                <!-- Social Links -->
                <div class="flex gap-3">
                    {#each socialLinks as social}
                        <a 
                            href={social.href}
                            class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950 hover:scale-110 transition-all"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="text-lg">{social.icon}</span>
                        </a>
                    {/each}
                </div>
                
                <!-- Status Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-950 rounded-full">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span class="text-xs font-medium text-green-700 dark:text-green-400">All Systems Operational</span>
                </div>
            </div>
            
            <!-- Links Columns -->
            {#each footerSections as section}
                <div class="space-y-3">
                    <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                        {section.title}
                    </h3>
                    <ul class="space-y-2">
                        {#each section.links as link}
                            <li>
                                <a 
                                    href={link.href}
                                    class="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-gray-200 dark:border-gray-800 py-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="text-sm text-gray-600 dark:text-gray-400">
                    © {year} TeleStack. All rights reserved.
                </div>
                
                <!-- Technology Stack Badge -->
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>Powered by</span>
                    <span class="font-medium text-teal-600 dark:text-teal-400">Appwrite</span>
                    <span>·</span>
                    <span class="font-medium text-green-600 dark:text-green-400">LiveKit</span>
                    <span>·</span>
                    <span class="font-medium text-indigo-600 dark:text-indigo-400">Matrix</span>
                    <span>·</span>
                    <span class="font-medium text-blue-600 dark:text-blue-400">Azure</span>
                </div>
                
                <!-- Legal Links -->
                <div class="flex gap-4 text-sm">
                    <a href="/privacy" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        Privacy
                    </a>
                    <a href="/terms" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        Terms
                    </a>
                    <a href="/cookies" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        Cookies
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
</style>
