<template>
    <div class="pageContainer">
        <template v-for="item in page" :key="item.id">
            <UiRow v-if="item.__component === 'basic.row'" :data="item" :full-width="item.fullWidth" />
            <UiFeatureRow v-else-if="item.__component === 'feature-card.feature-row'" :data="item" />
            <UiSlideshow v-else-if="item.__component === 'slide.slidershow'" :slides="item.slide" />
            <UiHeader v-else-if="item.__component === 'basic.header'" :data="item" />
            <div v-else-if="item.__component ==='basic.spacing'" class="rowSpacing innerGrid" :style="`--spacing: ${item.height}px`" />
        </template>
    </div>
</template>

<script lang="ts" setup>import { PageComponent } from '~~/models';

const props = defineProps<{page: PageComponent[]}>()

</script>

<style lang="scss" scoped>
.rowSpacing {
    display: block;
    height: var(--spacing);
    // width: 100%;
    background: var(--page-bg);
    position: relative;
    &:after {
        content: '';
        width:100%;
        height: 1px;
        position: absolute;
        left:0;
        top: 50%;
        background: var(--line-color);
    }
}
</style>