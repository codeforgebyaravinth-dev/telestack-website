<script lang="ts">
    import Head from '$lib/components/meta/head.svelte';
    import TeleStackNav from '$lib/components/TeleStackNav.svelte';
    import TeleStackFooter from '$lib/components/TeleStackFooter.svelte';
    import { PRODUCT_STRUCTURE, USE_CASES } from '$lib/telestack-structure';

    const pillars = [
        {
            name: 'Backend Services',
            description: 'Secure, scalable infrastructure for your applications',
            icon: '🔐',
            gradient: 'from-teal-500/10 to-cyan-500/5',
            products: PRODUCT_STRUCTURE.backend.products
        },
        {
            name: 'Real-time Communication',
            description: 'High-performance video, audio, and streaming',
            icon: '🎥',
            gradient: 'from-green-500/10 to-emerald-500/5',
            products: PRODUCT_STRUCTURE.communication.products
        },
        {
            name: 'Federated Messaging',
            description: 'Decentralized, secure communication protocol',
            icon: '💬',
            gradient: 'from-indigo-500/10 to-purple-500/5',
            products: PRODUCT_STRUCTURE.messaging.products
        }
    ];
</script>

<Head title="TeleStack - Privacy-First Unified Platform" description="Build secure, scalable applications with our unified platform combining backend services, real-time communication, and federated messaging." />

<TeleStackNav />

<main>
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Build the Future with <span class="text-primary">TeleStack</span>
            </h1>
            <p class="text-xl text-secondary mb-8">
                A privacy-first unified platform combining secure backend services, 
                real-time communication, and federated messaging. Everything you need 
                to build modern applications, deployed on Azure.
            </p>
            <div class="flex gap-4 justify-center">
                <a href="/docs" class="web-button">
                    Get Started
                </a>
                <a href="#pillars" class="web-button is-secondary">
                    Explore Platform
                </a>
            </div>
        </div>
    </section>

    <!-- Three Pillars Section -->
    <section id="pillars" class="container mx-auto px-4 py-20">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Three Powerful Pillars</h2>
            <p class="text-xl text-secondary">Everything you need in one unified platform</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            {#each pillars as pillar}
                <div class="bg-gradient-to-br {pillar.gradient} border border-smooth rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div class="text-5xl mb-4">{pillar.icon}</div>
                    <h3 class="text-2xl font-bold mb-3">{pillar.name}</h3>
                    <p class="text-secondary mb-6">{pillar.description}</p>
                    
                    <div class="space-y-2">
                        {#each pillar.products as product}
                            <div class="flex items-center gap-2 text-sm">
                                <span class="text-lg">{product.icon}</span>
                                <span class="font-medium">{product.name}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- Use Cases Section -->
    <section class="bg-[#EDEDF0] dark:bg-[#19191C] py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Built for Every Use Case</h2>
                <p class="text-xl text-secondary">From startups to enterprise, TeleStack powers innovation</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each USE_CASES as useCase}
                    <div class="bg-white dark:bg-[#0E0E10] border border-smooth rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div class="text-3xl mb-3">{useCase.icon}</div>
                        <h3 class="text-xl font-bold mb-2">{useCase.title}</h3>
                        <p class="text-secondary text-sm mb-4">{useCase.description}</p>
                        <div class="flex flex-wrap gap-2">
                            {#each useCase.technologies as tech}
                                <span class="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Technology Stack Section -->
    <section class="container mx-auto px-4 py-20">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Powered by Industry Leaders</h2>
            <p class="text-xl text-secondary">Built on proven, open-source technologies</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center p-6">
                <div class="text-4xl mb-3">🔐</div>
                <h3 class="font-bold mb-2">Appwrite Backend</h3>
                <p class="text-sm text-secondary">Authentication, databases, storage, and functions</p>
            </div>
            <div class="text-center p-6">
                <div class="text-4xl mb-3">🎥</div>
                <h3 class="font-bold mb-2">LiveKit Real-time</h3>
                <p class="text-sm text-secondary">WebRTC infrastructure for video, audio, and data</p>
            </div>
            <div class="text-center p-6">
                <div class="text-4xl mb-3">💬</div>
                <h3 class="font-bold mb-2">Matrix Protocol</h3>
                <p class="text-sm text-secondary">Decentralized, federated communication</p>
            </div>
        </div>

        <div class="text-center mt-12">
            <div class="inline-block px-6 py-3 bg-primary/10 rounded-lg">
                <span class="text-sm font-medium">☁️ Deployed on Microsoft Azure for enterprise-grade reliability</span>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-teal-500/10 via-green-500/5 to-indigo-500/10 py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Ready to Build?</h2>
            <p class="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Join developers building the next generation of privacy-first applications with TeleStack
            </p>
            <div class="flex gap-4 justify-center">
                <a href="/docs" class="web-button">
                    Start Building
                </a>
                <a href="/pricing" class="web-button is-secondary">
                    View Pricing
                </a>
            </div>
        </div>
    </section>
</main>

<TeleStackFooter />
