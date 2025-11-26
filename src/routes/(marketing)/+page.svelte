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
            color: '#14B8A6',
            gradient: 'from-teal-500 via-cyan-500 to-teal-600',
            darkGradient: 'from-teal-400 via-cyan-400 to-teal-500',
            bgGradient: 'bg-gradient-to-br from-teal-500/5 via-cyan-500/10 to-teal-500/5',
            products: PRODUCT_STRUCTURE.backend.products,
            features: ['Authentication & User Management', 'NoSQL & SQL Databases', 'File Storage & CDN', 'Serverless Functions']
        },
        {
            name: 'Real-time Communication',
            description: 'High-performance video, audio, and streaming',
            icon: '🎥',
            color: '#22C55E',
            gradient: 'from-green-500 via-emerald-500 to-green-600',
            darkGradient: 'from-green-400 via-emerald-400 to-green-500',
            bgGradient: 'bg-gradient-to-br from-green-500/5 via-emerald-500/10 to-green-500/5',
            products: PRODUCT_STRUCTURE.communication.products,
            features: ['HD Video Conferencing', 'Voice Calls & Audio', 'Screen Sharing', 'Live Streaming']
        },
        {
            name: 'Federated Messaging',
            description: 'Decentralized, secure communication protocol',
            icon: '💬',
            color: '#6366F1',
            gradient: 'from-indigo-500 via-purple-500 to-indigo-600',
            darkGradient: 'from-indigo-400 via-purple-400 to-indigo-500',
            bgGradient: 'bg-gradient-to-br from-indigo-500/5 via-purple-500/10 to-indigo-500/5',
            products: PRODUCT_STRUCTURE.messaging.products,
            features: ['End-to-End Encryption', 'Decentralized Architecture', 'Cross-Platform Sync', 'Voice & Video Messages']
        }
    ];

    const stats = [
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '<50ms', label: 'Global Latency' },
        { value: '100M+', label: 'API Calls/Day' },
        { value: 'SOC 2', label: 'Certified' }
    ];

    const testimonials = [
        {
            quote: "TeleStack's unified platform saved us months of integration work. Everything just works together seamlessly.",
            author: "Sarah Chen",
            role: "CTO, HealthTech Startup",
            avatar: "👩‍💻"
        },
        {
            quote: "The real-time capabilities are incredible. We built our telemedicine platform in weeks, not months.",
            author: "Marcus Rodriguez",
            role: "Lead Developer, MedConnect",
            avatar: "👨‍⚕️"
        },
        {
            quote: "Privacy-first and powerful. TeleStack gave us the security our enterprise clients demand.",
            author: "Elena Volkov",
            role: "VP Engineering, FinCorp",
            avatar: "👩‍💼"
        }
    ];
</script>

<Head title="TeleStack - Privacy-First Unified Platform" description="Build secure, scalable applications with our unified platform combining backend services, real-time communication, and federated messaging." />

<TeleStackNav />

<main class="overflow-hidden">
    <!-- Hero Section with Animated Background -->
    <section class="relative min-h-[90vh] flex items-center justify-center">
        <!-- Animated gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-teal-50 via-green-50 to-indigo-50 dark:from-gray-900 dark:via-teal-950 dark:to-indigo-950">
            <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <!-- Animated blobs -->
            <div class="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
            <div class="absolute top-40 right-20 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div class="container mx-auto px-4 py-20 relative z-10">
            <div class="text-center max-w-5xl mx-auto">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-teal-200 dark:border-teal-800 mb-6 animate-fade-in-up">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span class="text-sm font-medium">Privacy-First Unified Platform</span>
                </div>
                
                <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                    Build the Future with
                    <span class="block mt-2 bg-gradient-to-r from-teal-500 via-green-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
                        TeleStack
                    </span>
                </h1>
                
                <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                    Everything you need to build modern, secure applications. 
                    <span class="font-semibold text-gray-900 dark:text-white">Backend services, real-time communication, and federated messaging</span> 
                    in one unified platform.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
                    <a 
                        href="https://cloud.telestack.dev/register" 
                        class="group px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Start Building Free
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                    <a 
                        href="#pillars" 
                        class="px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-xl transition-all duration-300"
                    >
                        Explore Platform
                    </a>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
                    {#each stats as stat}
                        <div class="p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                            <div class="text-3xl font-bold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">{stat.value}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>

    <!-- Three Pillars Section -->
    <section id="pillars" class="py-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-4">Three Powerful Pillars</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400">Everything you need in one unified platform</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                {#each pillars as pillar, i}
                    <div class="group relative {pillar.bgGradient} border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <!-- Gradient border effect -->
                        <div class="absolute inset-0 bg-gradient-to-br {pillar.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                        
                        <div class="relative">
                            <!-- Icon with animated background -->
                            <div class="relative inline-block mb-6">
                                <div class="absolute inset-0 bg-gradient-to-br {pillar.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="relative text-7xl">{pillar.icon}</div>
                            </div>
                            
                            <h3 class="text-3xl font-bold mb-3 bg-gradient-to-r {pillar.darkGradient} bg-clip-text text-transparent">
                                {pillar.name}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-6 text-lg">{pillar.description}</p>
                            
                            <!-- Features list -->
                            <ul class="space-y-3 mb-6">
                                {#each pillar.features as feature}
                                    <li class="flex items-start gap-2">
                                        <svg class="w-5 h-5 text-{pillar.color.replace('#', '')} mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                            
                            <!-- Products -->
                            <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <div class="text-xs uppercase font-semibold text-gray-500 dark:text-gray-500 mb-3">Core Services</div>
                                <div class="grid grid-cols-2 gap-2">
                                    {#each pillar.products as product}
                                        <div class="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">
                                            <span class="text-xl">{product.icon}</span>
                                            <span class="font-medium text-gray-700 dark:text-gray-300">{product.name}</span>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            
                            <!-- CTA -->
                            <a 
                                href="/docs/{pillar.name.toLowerCase().replace(' ', '-')}" 
                                class="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r {pillar.gradient} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Explore {pillar.name}
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-4">Built for Every Use Case</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400">From startups to enterprise, TeleStack powers innovation</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each USE_CASES as useCase, i}
                    <div class="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <!-- Gradient accent on hover -->
                        <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-green-500 to-indigo-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{useCase.icon}</div>
                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{useCase.title}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{useCase.description}</p>
                        
                        <div class="flex flex-wrap gap-2">
                            {#each useCase.technologies as tech}
                                <span class="text-xs px-3 py-1 bg-gradient-to-r from-teal-500/10 to-green-500/10 text-teal-700 dark:text-teal-300 rounded-full font-medium border border-teal-200 dark:border-teal-800">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                        
                        <!-- Learn more link -->
                        <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <a href="/use-cases/{useCase.title.toLowerCase().replace(/\s+/g, '-')}" class="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-4">Loved by Developers</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400">See what builders are saying about TeleStack</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {#each testimonials as testimonial}
                    <div class="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div class="text-4xl mb-4">{testimonial.avatar}</div>
                        <p class="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div class="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Technology Stack Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold mb-4">Powered by Industry Leaders</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400">Built on proven, open-source technologies</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                <div class="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                    <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform">🔐</div>
                    <h3 class="font-bold text-xl mb-2 text-gray-900 dark:text-white">Appwrite Backend</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Authentication, databases, storage, and serverless functions</p>
                </div>
                <div class="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-xl transition-all duration-300">
                    <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform">🎥</div>
                    <h3 class="font-bold text-xl mb-2 text-gray-900 dark:text-white">LiveKit Real-time</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">WebRTC infrastructure for video, audio, and data streaming</p>
                </div>
                <div class="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
                    <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform">💬</div>
                    <h3 class="font-bold text-xl mb-2 text-gray-900 dark:text-white">Matrix Protocol</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Decentralized, end-to-end encrypted messaging</p>
                </div>
            </div>

            <div class="text-center">
                <div class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                    <span class="font-semibold text-blue-900 dark:text-blue-100">Deployed on Microsoft Azure for enterprise-grade reliability</span>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 bg-gradient-to-br from-teal-600 via-green-600 to-indigo-600">
            <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center text-white">
                <h2 class="text-5xl md:text-6xl font-bold mb-6">Ready to Build Something Amazing?</h2>
                <p class="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
                    Join thousands of developers building the next generation of privacy-first applications with TeleStack
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a 
                        href="https://cloud.telestack.dev/register" 
                        class="group px-10 py-5 text-lg font-bold bg-white text-teal-600 rounded-xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Start Building Free
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                    <a 
                        href="/docs" 
                        class="px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 hover:shadow-2xl transition-all duration-300"
                    >
                        View Documentation
                    </a>
                </div>
                
                <!-- Features badges -->
                <div class="flex flex-wrap justify-center gap-4">
                    <div class="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span class="text-sm font-semibold">✓ No credit card required</span>
                    </div>
                    <div class="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span class="text-sm font-semibold">✓ Free tier forever</span>
                    </div>
                    <div class="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span class="text-sm font-semibold">✓ Deploy in minutes</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<TeleStackFooter />

<style>
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes blob {
        0%, 100% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -50px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
    }

    @keyframes gradient {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
        opacity: 0;
    }

    .animation-delay-200 {
        animation-delay: 0.2s;
    }

    .animation-delay-400 {
        animation-delay: 0.4s;
    }

    .animation-delay-600 {
        animation-delay: 0.6s;
    }

    .animation-delay-800 {
        animation-delay: 0.8s;
    }

    .animation-delay-2000 {
        animation-delay: 2s;
    }

    .animation-delay-4000 {
        animation-delay: 4s;
    }

    .animate-blob {
        animation: blob 7s infinite;
    }

    .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
    }

    .bg-grid-pattern {
        background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
    }

    :global(.dark) .bg-grid-pattern {
        background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    }
</style>
