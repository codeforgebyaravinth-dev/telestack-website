<script lang="ts">
    import { Main } from '$lib/layouts';
    import Head from '$lib/components/meta/head.svelte';
    import { FooterNav, MainFooter } from '$lib/components';
    import { PRODUCT_STRUCTURE } from '$lib/telestack-structure';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const pillars = [
        {
            ...PRODUCT_STRUCTURE.backend,
            gradient: 'from-teal-500/20 to-teal-600/10',
            iconGradient: 'from-teal-400 to-teal-600'
        },
        {
            ...PRODUCT_STRUCTURE.communication,
            gradient: 'from-green-500/20 to-green-600/10',
            iconGradient: 'from-green-400 to-green-600'
        },
        {
            ...PRODUCT_STRUCTURE.messaging,
            gradient: 'from-indigo-500/20 to-indigo-600/10',
            iconGradient: 'from-indigo-400 to-indigo-600'
        }
    ];
</script>

<Head
    title="TeleStack - Unified Privacy-First Platform"
    description="Build secure, real-time applications with TeleStack. Combines backend services, live communication, and federated messaging in one privacy-first platform."
/>

<Main>
    <!-- Hero Section -->
    <div class="web-big-padding-section-level-2">
        <div class="container">
            <section class="web-hero">
                <h1
                    class="text-display font-aeonik-pro web-u-max-width-900 web-u-mobile-align-text-center self-center"
                    style="background: linear-gradient(90deg, hsl(var(--web-color-brand-500)) 0%, hsl(var(--web-color-greyscale-200)) 61.98%, hsl(var(--web-color-greyscale-200)) 100%);
                        -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                >
                    Build Real-Time Apps, Privacy-First
                </h1>
                <p
                    class="text-description web-u-max-width-800 web-u-margin-block-start-8 web-u-mobile-align-text-center self-center"
                >
                    TeleStack unifies backend services, live video/audio, and federated messaging
                    into one powerful platform. Deploy on Azure with enterprise-grade privacy and
                    control.
                </p>
                <div
                    class="web-u-margin-block-start-32 flex flex-col items-center gap-4 md:flex-row md:justify-center"
                >
                    <a
                        href={getAppwriteDashboardUrl()}
                        class="web-button is-primary web-u-cross-child-center"
                    >
                        <span>Get Started Free</span>
                    </a>
                    <a href="/docs" class="web-button is-secondary web-u-cross-child-center">
                        <span>View Documentation</span>
                    </a>
                </div>
            </section>
        </div>
    </div>

    <!-- Three Pillars Section -->
    <div class="web-big-padding-section-level-1 dark">
        <div class="container">
            <section class="web-u-padding-block-end-80">
                <h2
                    class="text-title font-aeonik-pro text-primary web-u-max-width-700 web-u-mobile-align-text-center self-center web-u-margin-block-end-16"
                >
                    Three Pillars, One Platform
                </h2>
                <p
                    class="text-description web-u-max-width-600 web-u-mobile-align-text-center self-center web-u-margin-block-end-64"
                >
                    TeleStack combines the best open-source technologies for a unified developer
                    experience
                </p>

                <div class="grid gap-8 md:grid-cols-3">
                    {#each pillars as pillar}
                        <div
                            class="web-card is-normal web-u-padding-32 bg-gradient-to-br {pillar.gradient} border border-greyscale-800"
                        >
                            <div
                                class="web-u-margin-block-end-16 text-4xl bg-gradient-to-br {pillar.iconGradient} bg-clip-text text-transparent"
                            >
                                {pillar.icon}
                            </div>
                            <h3 class="text-title font-aeonik-pro text-primary web-u-margin-block-end-8">
                                {pillar.name}
                            </h3>
                            <p class="text-description web-u-margin-block-end-16">
                                {pillar.description}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                {#each pillar.products.slice(0, 4) as product}
                                    <span
                                        class="web-badges web-u-inline-flex web-u-cross-child-center gap-1"
                                    >
                                        <span class="text-micro">{product.icon}</span>
                                        <span class="text-caption">{product.name}</span>
                                    </span>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
            </section>
        </div>
    </div>

    <!-- Use Cases Section -->
    <div class="web-big-padding-section-level-2">
        <div class="container">
            <section>
                <h2
                    class="text-title font-aeonik-pro text-primary web-u-max-width-700 web-u-mobile-align-text-center self-center web-u-margin-block-end-64"
                >
                    Built for Modern Applications
                </h2>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div class="web-card is-normal web-u-padding-24">
                        <div class="text-2xl web-u-margin-block-end-12">🏥</div>
                        <h3 class="text-label web-u-margin-block-end-8">Telemedicine</h3>
                        <p class="text-sub-body text-secondary">
                            HIPAA-compliant video consultations with secure patient records and
                            encrypted messaging
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24">
                        <div class="text-2xl web-u-margin-block-end-12">💼</div>
                        <h3 class="text-label web-u-margin-block-end-8">Remote Teams</h3>
                        <p class="text-sub-body text-secondary">
                            Complete workspace with video meetings, team chat, and document storage
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24">
                        <div class="text-2xl web-u-margin-block-end-12">🎓</div>
                        <h3 class="text-label web-u-margin-block-end-8">Live Learning</h3>
                        <p class="text-sub-body text-secondary">
                            Interactive classrooms with live streaming, chat, and assignment
                            tracking
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24">
                        <div class="text-2xl web-u-margin-block-end-12">🎮</div>
                        <h3 class="text-label web-u-margin-block-end-8">Social Gaming</h3>
                        <p class="text-sub-body text-secondary">
                            Multiplayer games with voice chat, user profiles, and leaderboards
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24">
                        <div class="text-2xl web-u-margin-block-end-12">🎧</div>
                        <h3 class="text-label web-u-margin-block-end-8">Customer Support</h3>
                        <p class="text-sub-body text-secondary">
                            Omnichannel support with video calls, live chat, and ticket management
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24">
                        <div class="text-2xl web-u-margin-block-end-12">👥</div>
                        <h3 class="text-label web-u-margin-block-end-8">Communities</h3>
                        <p class="text-sub-body text-secondary">
                            Build engaged communities with forums, live events, and member profiles
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- Technology Stack -->
    <div class="web-big-padding-section-level-1 dark">
        <div class="container">
            <section>
                <h2
                    class="text-title font-aeonik-pro text-primary web-u-max-width-700 web-u-mobile-align-text-center self-center web-u-margin-block-end-16"
                >
                    Powered by Open Source
                </h2>
                <p
                    class="text-description web-u-max-width-600 web-u-mobile-align-text-center self-center web-u-margin-block-end-64"
                >
                    TeleStack combines proven technologies: Backend APIs, LiveKit for real-time
                    media, and Matrix for federated messaging
                </p>

                <div class="grid gap-8 md:grid-cols-3">
                    <div class="web-card is-normal web-u-padding-24 text-center">
                        <div
                            class="web-u-margin-block-end-16 text-5xl bg-gradient-to-br from-teal-400 to-teal-600 bg-clip-text text-transparent font-bold"
                        >
                            REST
                        </div>
                        <p class="text-sub-body text-secondary">
                            Full-featured REST APIs for auth, databases, storage, and serverless
                            functions
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24 text-center">
                        <div
                            class="web-u-margin-block-end-16 text-5xl bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent font-bold"
                        >
                            WebRTC
                        </div>
                        <p class="text-sub-body text-secondary">
                            Enterprise-grade video/audio powered by LiveKit with HD quality and low
                            latency
                        </p>
                    </div>

                    <div class="web-card is-normal web-u-padding-24 text-center">
                        <div
                            class="web-u-margin-block-end-16 text-5xl bg-gradient-to-br from-indigo-400 to-indigo-600 bg-clip-text text-transparent font-bold"
                        >
                            Matrix
                        </div>
                        <p class="text-sub-body text-secondary">
                            Decentralized messaging with E2E encryption and federation support
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="web-big-padding-section-level-2">
        <div class="container">
            <section class="web-hero">
                <h2
                    class="text-display font-aeonik-pro web-u-max-width-700 web-u-mobile-align-text-center self-center"
                >
                    Start Building Today
                </h2>
                <p
                    class="text-description web-u-max-width-600 web-u-margin-block-start-8 web-u-mobile-align-text-center self-center"
                >
                    Free tier available. No credit card required.
                </p>
                <div
                    class="web-u-margin-block-start-32 flex flex-col items-center gap-4 md:flex-row md:justify-center"
                >
                    <a
                        href={getAppwriteDashboardUrl()}
                        class="web-button is-primary web-u-cross-child-center"
                    >
                        <span>Create Free Account</span>
                    </a>
                    <a href="/pricing" class="web-button is-secondary web-u-cross-child-center">
                        <span>View Pricing</span>
                    </a>
                </div>
            </section>
        </div>
    </div>

    <FooterNav />
    <MainFooter />
</Main>
