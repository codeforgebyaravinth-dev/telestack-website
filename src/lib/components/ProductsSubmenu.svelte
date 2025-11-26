<script lang="ts" context="module">
    export type SubmenuItem = {
        name: string;
        href: string;
        description: string;
        icon: string;
        beta?: boolean;
    };

    export type SubLink = {
        label: string;
        href: string;
    };

    export const products: Array<SubmenuItem> = [
        {
            name: 'Authentication',
            href: '/docs/backend/auth',
            description: 'Secure user authentication and authorization.',
            icon: '🔐'
        },
        {
            name: 'Databases',
            href: '/docs/backend/databases',
            description: 'NoSQL database with real-time capabilities.',
            icon: '🗃️'
        },
        {
            name: 'Storage',
            href: '/docs/backend/storage',
            description: 'File storage with built-in optimization.',
            icon: '📁'
        },
        {
            name: 'Functions',
            href: '/docs/backend/functions',
            description: 'Serverless functions for custom logic.',
            icon: '⚡'
        },
        {
            name: 'Video Conferencing',
            href: '/docs/communication/video',
            description: 'Multi-party video calls with HD quality.',
            icon: '🎥'
        },
        {
            name: 'Live Streaming',
            href: '/docs/communication/streaming',
            description: 'Broadcast to thousands with low latency.',
            icon: '📡'
        },
        {
            name: 'Chat & Messaging',
            href: '/docs/messaging/chat',
            description: 'Real-time messaging with E2E encryption.',
            icon: '💬'
        }
    ];

    export const sublinks: Array<SubLink> = [
        {
            label: 'Platform Overview',
            href: '/platform'
        },
        {
            label: 'Use Cases',
            href: '/use-cases'
        },
        {
            label: 'Pricing',
            href: '/pricing'
        }
    ];
</script>

<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { cn } from '$lib/utils/cn';
    import { createDropdownMenu, melt } from '@melt-ui/svelte';
    import Icon from './ui/icon';

    let {
        elements: { trigger, menu, item, overlay },
        states: { open }
    } = createDropdownMenu({
        loop: true
    });

    export let label: string;
</script>

<svelte:window on:resize={() => open && ($open = false)} />

<button
    class={cn(
        'text-primary focus:text-accent hover:text-accent inline-flex cursor-pointer items-center justify-between outline-none',
        {
            'text-accent': $open
        }
    )}
    use:melt={$trigger}
>
    {label}

    <span
        class={cn('web-icon-chevron-down block transition-transform', {
            'rotate-180': $open
        })}
    ></span>
</button>

<div
    use:melt={$menu}
    class={cn(
        'data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in relative !left-1/2 z-10 mx-auto mt-6 hidden w-full -translate-x-1/2 flex-col items-center p-0 outline-none [max-inline-size:86.875rem] md:flex'
    )}
>
    <div class="is-special-padding w-full rounded-2xl border border-white/8 bg-[#232325] p-6">
        <div class="grid w-full grid-cols-1 place-content-between gap-16 lg:grid-cols-12">
            <div class="col-span-8 -mr-12 pr-12">
                <span
                    class="font-aeonik-fono text-secondary tracking-loose mb-4 block text-xs uppercase"
                    >{label}<span class="text-accent">_</span></span
                >
                <div
                    class="grid grid-flow-col-dense grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-4"
                >
                    {#each products as product}
                        <a
                            href={product.href}
                            use:melt={$item}
                            onclick={() =>
                                trackEvent(`products-submenu-${product.name.toLowerCase()}-click`)}
                            class="group flex gap-3 rounded-xl p-1 text-white transition-colors outline-none focus:bg-white/8"
                        >
                            <div
                                class="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/6"
                            >
                                <span class="text-2xl">{product.icon}</span>
                            </div>
                            <div class="">
                                <span class="text-sub-body text-primary font-medium"
                                    >{product.name}

                                    {#if product.beta}
                                        <span
                                            class="text-caption bg-accent/24 ml-1 rounded px-2 py-1 font-medium text-white"
                                            >Coming soon</span
                                        >
                                    {/if}
                                </span>
                                <p class="text-caption text-secondary text-pretty">
                                    {product.description}
                                </p>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
            <div class="col-span-4 -ml-12 border-l border-white/6 pl-12">
                <div
                    use:melt={$item}
                    class="group block rounded-2xl border border-white/12 bg-white/6 p-4 outline-none focus-within:bg-white/12"
                >
                    <header class="flex items-center justify-between">
                        <span
                            class="font-aeonik-fono tracking-loose text-primary block text-xs uppercase"
                            >Customer Stories<span class="text-accent">_</span></span
                        >
                        <a
                            href="/blog/category/customer-stories"
                            class="text-secondary text-caption flex items-center"
                            >Read more <span class="ml-1 hidden xl:inline"
                                >{' '}customer stories</span
                            >
                            <Icon
                                name="chevron-right"
                                class="transition-transform group-hover:translate-x-0.5"
                            ></Icon></a
                        >
                    </header>

                    <a
                        href="/blog/post/customer-story-storealert"
                        class="my-4 flex flex-1 flex-col gap-3 outline-none xl:flex-row"
                    >
                        <img
                            src="/images/blog/customer-story-storealert/cover.png"
                            alt="Case study cover"
                            class="min-h-10 w-full shrink-0 rounded-xl object-cover md:aspect-[3/1] xl:max-w-30"
                        />
                        <p class="w-full text-pretty">
                            TeleStack helped reduce development time by 60%, and lower infrastructure costs
                            by 40%.
                        </p>
                    </a>
                </div>

                <div class="mt-8">
                    <span
                        class="font-aeonik-fono tracking-loose text-secondary block text-xs uppercase"
                        >Learn More<span class="text-accent">_</span></span
                    >
                    <div class="mt-3 space-y-3">
                        {#each sublinks as sublink}
                            <a
                                href={sublink.href}
                                class="text-caption text-primary group flex items-center gap-1"
                            >
                                {sublink.label}
                                <span
                                    class="web-icon-chevron-right transition-transform group-hover:translate-x-0.5"
                                ></span>
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        use:melt={$overlay}
        class="data-[state=closed]:animate-fade-out fixed inset-0 bg-black/60"
    ></div>
</div>
