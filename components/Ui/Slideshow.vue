<template>
    <section class="container" >
        <Swiper 
            :modules="modules"
            :loop="true"
            :pagination="{ clickable: true,  dynamicBullets: true }"
            :navigation="false"
            :space-between="500"
            :centered-slides="true"
            :mousewheel="true"
            :slides-per-view="1"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false
            }"
            class="swiper">
            <SwiperSlide v-for="slide in slides" :key="slide.id" class="slide">
                <h1 class="slide__title innerGrid">
                    <inlineSvg :src="config.STRAPI_URL + slide.icon.url" />
                    {{slide.title}}
                </h1>
                <div class="slide__content">
                    <div class="slide__content__image">
                        <img :src="config.STRAPI_URL + slide.image.url" />
                    </div>
                    <div class="slide__description">
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
    import { PageSlide } from '~~/models/slide';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation, Autoplay } from 'swiper'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'


    const modules = [Pagination, Autoplay]
    const config = useRuntimeConfig()

    defineProps<{
        slides: PageSlide[]
    }>();
</script>

<style lang="scss" scoped>
.container{
    --background: #EBF4F6;
    padding: 32px 0;
    margin-top: 24px;
    height: 100vh;
    overflow-y: hidden;
     width:100%;
    background: var(--background);
    @media (max-width: 800px) {
        height: 70vh;
    }
}
.slide{
    &__content{
        display: grid;
        grid-template-columns: 70% 30%;
        gap: 12px;
        padding: 0 32px;
        &__image{
            position: relative;
            img{
                float: right;
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
        place-content: center;
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
    svg{
        width: 36px;
        height: 36px;
    }
}
.swiper{
    // overflow: visible;s
}
</style>
