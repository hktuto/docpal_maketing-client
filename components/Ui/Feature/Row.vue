<template>
    <div :class="{container:true, [data.size || 'small'] : true}" :style="`--background:${data.bgColor}`">
        <div :class="{content:true, innerGrid: !data.fullWidth, [data.featureType]:true, [data.size || 'small'] : true}">
            <div :class="{content__title:true, innerGrid:data.fullWidth}">{{data.title}}</div>
            <UiFeatureGrid v-if="data.featureType === 'grid'" :data="data" />
            <ClientOnly>
                <UiFeatureSlide v-if="data.featureType === 'slide'" :data="data" />
                <UiSlideshow v-if="data.featureType === 'fullSide'" :data="data" />
            </ClientOnly>
        </div>
    </div>
</template>

<script lang="ts" setup>
    
    import { PageComponent } from '~~/models';
    const config = useRuntimeConfig();
    defineProps<{
        data: PageComponent,
    }>()
</script>

<style lang="scss" scoped>
.container{
    padding: 24px 0;
     background: var(--page-bg);
    //  perspective: 1000px;
    &.mini {
        padding: 8px 0;
    }
}
.content{
    display:grid;
    grid-template-rows: min-content 1fr min-content;
    gap: 8px;
    background: var(--page-bg);
    --grid-size: 3;
    --gap-size: 16px;
    --card-height: auto;
    --card-radius: 16px;
    --card-title: 1.6rem;
    --card-padding: 24px;
    &.mini {
       --grid-size: 5;
       --card-height: auto;
       --card-padding: 24px;
       --card-title: 1rem;
       :deep{
        .card {
            grid-template-rows: 1fr;
        }
       }
    }
    &.small{
        --grid-size: 4;
        --card-height: 120px;
        --card-title: 1.2rem;
    }
    &.normal{
        --grid-size: 3;
        --card-height: 320px;
        --card-title: 1.2rem;
    }
    &.big{
        --grid-size: 2;
        --card-height: 460px;
        --card-title: 1.6rem;
    }
    &.mega{
        --grid-size: 1;
        --card-height: calc(100vh - 60px);
        --card-title: 1.6rem;
    }
    &.slide{
        justify-content: center;
    }
    &__title{
        // color: var(--primary-color);
        font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
        font-weight: 900;
        font-weight: 900;
        // white-space: nowrap;
        background: var(--feature-title-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
    }
    
    &__grid{
        display: grid;
        grid-template-columns: repeat(var(--grid-size), 1fr);
        column-gap: var(--gap-size);
        row-gap: var(--gap-size); 
        z-index: 2;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    }
    &__footer{
        margin-top: 58px;
        padding-top: 36px;
        border-top: 1px solid #BBCDDE;
        h3{
            color:var(--primary-color);
        }
    }
}
.content.small ::v-deep{
    .card{
        min-height: 220px;
    }
}


</style>