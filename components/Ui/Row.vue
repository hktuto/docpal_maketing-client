<template>
<div class="rowContainer" :style="`--background:${data.bgColor}`">
    <div :class="{rowContainer__title:true, innerGrid: !data.fullWidth}">
        {{ data.title }}
    </div>
    <div :class="{row:true, innerGrid: !data.fullWidth}">
        <UiColumn v-for="item in data.columns" :key="item.id" :title="item.title || ''" :content="item.content" :span="item.span" />
    </div>
</div>
</template>

<script lang="ts" setup>
import { PageComponent } from '~~/models';

const props = defineProps<{
    data: PageComponent,
}>()
</script>


<style lang="scss" scoped>
.rowContainer{
    background: var(--page-bg);
    padding-block: calc(var(--app-padding)  * 2 );
    &__title{
        color: var(--primary-color);
        font-size: clamp(1.2rem, -0.875rem + 8.333vw, 3rem);
        font-weight: 900;
        // white-space: nowrap;
        background: -webkit-linear-gradient(45deg, var(--primary-color), #0094f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
.row{
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
    gap: calc( var(--app-padding) * 2);
    @media( max-width: 640px) {
        grid-template-columns: 1fr;
    }
}

</style>