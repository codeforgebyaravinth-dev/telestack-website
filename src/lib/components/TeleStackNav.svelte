<script lang="ts">
    import { page } from '$app/stores';
    
    let mobileMenuOpen = $state(false);
    
    const navLinks = [
        { label: 'Platform', href: '/platform' },
        { label: 'Products', href: '/products' },
        { label: 'Docs', href: '/docs' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Community', href: '/community' }
    ];
    
    const isActive = (href: string) => {
        return $page.url.pathname.startsWith(href);
    };
</script>

<nav class="telestack-nav sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-[#0E0E10]/80 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <a href="/" class="flex items-center gap-2 group">
                <div class="text-2xl font-bold bg-gradient-to-r from-teal-500 via-green-500 to-indigo-500 bg-clip-text text-transparent">
                    TeleStack
                </div>
                <span class="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium">
                    UNIFIED
                </span>
            </a>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
                {#each navLinks as link}
                    <a 
                        href={link.href}
                        class="relative text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                        class:text-teal-600={isActive(link.href)}
                        class:dark:text-teal-400={isActive(link.href)}
                        class:text-gray-600={!isActive(link.href)}
                        class:dark:text-gray-400={!isActive(link.href)}
                    >
                        {link.label}
                        {#if isActive(link.href)}
                            <span class="absolute -bottom-[1.15rem] left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-green-500"></span>
                        {/if}
                    </a>
                {/each}
            </div>
            
            <!-- CTA Buttons -->
            <div class="hidden md:flex items-center gap-3">
                <a 
                    href="https://cloud.telestack.dev/login" 
                    class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                    Sign In
                </a>
                <a 
                    href="https://cloud.telestack.dev/register" 
                    class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                    Start Free
                </a>
            </div>
            
            <!-- Mobile Menu Button -->
            <button 
                class="md:hidden p-2"
                onclick={() => mobileMenuOpen = !mobileMenuOpen}
                aria-label="Toggle menu"
            >
                {#if mobileMenuOpen}
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                {:else}
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                {/if}
            </button>
        </div>
        
        <!-- Mobile Menu -->
        {#if mobileMenuOpen}
            <div class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                <div class="flex flex-col gap-4">
                    {#each navLinks as link}
                        <a 
                            href={link.href}
                            class="text-sm font-medium px-2 py-1 rounded transition-colors"
                            class:text-teal-600={isActive(link.href)}
                            class:dark:text-teal-400={isActive(link.href)}
                            class:bg-teal-50={isActive(link.href)}
                            class:dark:bg-teal-950={isActive(link.href)}
                            class:text-gray-600={!isActive(link.href)}
                            class:dark:text-gray-400={!isActive(link.href)}
                            onclick={() => mobileMenuOpen = false}
                        >
                            {link.label}
                        </a>
                    {/each}
                    <hr class="border-gray-200 dark:border-gray-800" />
                    <a 
                        href="https://cloud.telestack.dev/login" 
                        class="text-sm font-medium text-gray-600 dark:text-gray-400 px-2 py-1"
                    >
                        Sign In
                    </a>
                    <a 
                        href="https://cloud.telestack.dev/register" 
                        class="text-sm font-medium text-center px-4 py-2 text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-lg"
                    >
                        Start Free
                    </a>
                </div>
            </div>
        {/if}
    </div>
</nav>
