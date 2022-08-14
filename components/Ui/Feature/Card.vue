<template>
    <div :class="{ card:true, icon: !!card.icon, featureCard: !!card.featureImg }" :style="{ backgroundImage: card.bgImg ? `url(${config.STRAPI_URL + card.bgImg.url})` : ''}">
        <div v-if="card.featureImg"  class="feature">
            <img  class="featureImg" :src="config.STRAPI_URL + feature" />
        </div>
        <div v-if="card.icon" class="iconContainer">
            <inlineSvg  class="card__icon" :src="config.STRAPI_URL + card.icon.url" />
        </div>
        <div class="card__title">{{card.title}}</div>
        <!-- <div class="card__content">{{card.content}}</div> -->
    </div>
</template>

<script lang="ts" setup>
import { PageFeature } from '~~/models/feature';
import inlineSvg from 'vue-inline-svg'
const colorMode = useColorMode()
const config = useRuntimeConfig()

const props = defineProps<{
    card: PageFeature
}>();

const feature = computed(() => colorMode.value === 'light' ? props.card.featureImg.url : props.card.featureImgDark.url )
</script>

<style lang="scss">
.swiper-slide-active{
    .card {
        --card-border: 4px;
        transform: scale(1.04) !important;
        // outline: 4px solid var(--primary-color-50) !important;
        box-shadow: 0px 10px 20px -5px var(--primary-color-50) !important;
        &:before {
            background-position: -50% 0 !important;
            opacity: 1 !important;
        }
    }
}
.card::before {
    background-image: var(--card-bg-img);
}
</style>

<style lang="scss" scoped>
.card{
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    box-shadow: 0px 5px 20px -10px rgba(11, 22, 26, 0.25);
    display: grid;
    grid-template-rows: min-content min-content min-content;
    gap: 16px;
    background: #fff;
    transition: all .3s ease-in-out;
    height: var(--card-height);
    background-color: var(--card-bg);
    color: var(--text-color);
    outline-color: transparent;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--card-radius);
        padding: var(--card-border, 2px);
        width: calc( 100% - var(--card-border, 2px) * 2);
        background-size: 400% auto;
        background-position: 0 0 ;
        opacity: 0.3;
        transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 2;
        
    }
    &.icon{
        grid-template-rows: 1fr min-content min-content;
    }
    &.featureCard {
        grid-template-rows: 1fr min-content;
        
    }
    &:hover, &:focus-visible{
        transform: scale(1.01);
        outline: 2px solid var(--primary-color-10) !important;
        box-shadow: 0px 20px 20px -10px rgba(11, 22, 26, 0.25);
        &:before {
            background-position: -50% 0 !important;
            opacity: 0.5 !important;
        }
    }
    &:target{
        transform: scale(1.01);
    }
    .feature{
        margin: -24px -24px 0 -24px;
        position: relative;
        width: calc( 100% + 48px);
        overflow: hidden;
        border-top-left-radius: var(--card-radius);
        border-top-right-radius: var(--card-radius);
        img {
            object-fit: cover;
                width: 100%;
        }
    }
    &__icon{
        color: var(--primary-color);
        width:33px;
        height:33px;
    }
    &__title{
        font-size: var(--card-title);
        font-weight: 900;
        color: var(--text-color);
    }
    &__content{
        font-size: 0.8rem;
        line-height: 1.4rem;
    }
}
</style>