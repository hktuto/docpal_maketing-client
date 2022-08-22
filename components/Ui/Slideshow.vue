<template>
    <section class="sliderContainer" >
        <Swiper 
            :modules="modules"
            :loop="true"
            :pagination="{ clickable: true,  dynamicBullets: true }"
            :space-between="500"
            :centered-slides="true"
            :slides-per-view="1"
            :autoplay="{
                delay: 5000
            }"
            class="swiper">
            <SwiperSlide v-for="slide in data.card" :key="slide.id" class="slide">
                
                <div class="slide__content">
                    <div class="slide__content__image">
                         <img :src="config.STRAPI_URL + slide.featureImg.url" data-sampler="uTexture"/>
                    </div>
                    <div class="slide__description">
                        <h1 class="slide__title ">
                            <inlineSvg v-if="slide.icon" :src="config.STRAPI_URL + slide.icon.url" />
                            {{slide.title || ''}}
                        </h1>
                        {{ slide.content }}
                        <div class="slide__readMore">
                            Read more
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script lang="ts" setup>
    import inlineSvg from 'vue-inline-svg'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation, Autoplay } from 'swiper'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'
    import { PageComponent } from '~~/models';

    const modules = [Pagination, Autoplay]
    const config = useRuntimeConfig()

    defineProps<{
        data: PageComponent
    }>();
</script>

<style lang="scss" scoped>
.sliderContainer{
    --background: #EBF4F6;
    padding: 32px 24px;
    margin-top: 24px;
    overflow-y: hidden;
    width:100%;
    background: var(--footer-bg);
    backdrop-filter: blur(20px);
    position: relative;
    z-index: 2;
    @media (max-width: 800px) {
        height: 70vh;
    }
}
.slide{
    &__content{
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 24px;
        padding: 0 32px;
        &__image{
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        @media( max-width: 1024px){
            grid-template-columns: 1fr;
            img{
                width:100%;
            }
        }
    }
    
    &__description{
        display: grid;
        grid-template-rows: min-content 1fr min-content;
    }
    &__readMore{
        margin: 12px 0;
        color: var(--primary-color); 
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        &:after{
            content:'';
            margin-left: 4px;
            display: block;
            flex: 1 0 auto;
            height: 1px;
            background: var(--primary-color);
        }
    }
}
h1{
    margin: 0 auto;
    width:100%;
    margin-bottom: 24px;
    svg{
        width: 36px;
        height: 36px;
    }
}
.swiper{
    // overflow: visible;s
}
</style>
