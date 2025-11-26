<script lang="ts">
    import { PRODUCT_STRUCTURE } from '$lib/telestack-structure';
</script>

<div class="web-big-padding-section-level-2">
    <div class="container">
        <h3 class="text-label text-primary text-center">Explore TeleStack Services</h3>
        
        <!-- Backend Services -->
        <div class="mt-12">
            <h4 class="text-title font-aeonik-pro text-primary mb-6">
                {PRODUCT_STRUCTURE.backend.name}
            </h4>
            <ul class="l-grid-1">
                {#each PRODUCT_STRUCTURE.backend.products as product}
                    <li>
                        <a
                            href="/docs/backend/{product.slug}"
                            class="web-card product-card is-transparent block h-full"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="flex items-center gap-2">
                                <span class="text-2xl">{product.icon}</span>
                                <h5 class="text-main-body text-primary">{product.name}</h5>
                                <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                            </div>
                            <p class="text-sub-body ml-1 text-secondary">
                                {product.description}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        <!-- Real-time Communication -->
        <div class="mt-12">
            <h4 class="text-title font-aeonik-pro text-primary mb-6">
                {PRODUCT_STRUCTURE.communication.name}
            </h4>
            <ul class="l-grid-1">
                {#each PRODUCT_STRUCTURE.communication.products as product}
                    <li>
                        <a
                            href="/docs/communication/{product.slug}"
                            class="web-card product-card is-transparent block h-full"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="flex items-center gap-2">
                                <span class="text-2xl">{product.icon}</span>
                                <h5 class="text-main-body text-primary">{product.name}</h5>
                                <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                            </div>
                            <p class="text-sub-body ml-1 text-secondary">
                                {product.description}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        <!-- Federated Messaging -->
        <div class="mt-12">
            <h4 class="text-title font-aeonik-pro text-primary mb-6">
                {PRODUCT_STRUCTURE.messaging.name}
            </h4>
            <ul class="l-grid-1">
                {#each PRODUCT_STRUCTURE.messaging.products as product}
                    <li>
                        <a
                            href="/docs/messaging/{product.slug}"
                            class="web-card product-card is-transparent block h-full"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="flex items-center gap-2">
                                <span class="text-2xl">{product.icon}</span>
                                <h5 class="text-main-body text-primary">{product.name}</h5>
                                <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                            </div>
                            <p class="text-sub-body ml-1 text-secondary">
                                {product.description}
                            </p>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    .l-grid-1 {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
    
    @media (max-width: 768px) {
        .l-grid-1 {
            grid-template-columns: 1fr;
        }
    }
</style>
