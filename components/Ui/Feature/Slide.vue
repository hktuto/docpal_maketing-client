<template>
    <div class="swiperContainer">
        <div class="innerGrid">
            <Swiper
                :modules="modules"
                :loop="true"
                :pagination="{ clickable: true,  dynamicBullets: true }"
                :navigation="false"
                :space-between="24"
                :centered-slides="false"
                :breakpoints="breakpoints"
                :autoplay="autoplay"
            >
                <SwiperSlide v-for="feature in data.card" :key="data.id" class="slide">
                    <UiFeatureCard :card="feature" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { PageComponent } from '~~/models';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const modules = [Pagination, Autoplay]
const props = defineProps<{
    data: PageComponent
}>();
// const breakpoints = {
//     320:{
//         slidesPerView:1,
//     },
//     640: {
//         slidesPerView:2,
//     },
//     1280 :{
//          slidesPerView:3,
//     },
//     1440 :{
//          slidesPerView:4,
//     }
// }
const breakpoints = computed( () => {
    switch(props.data.size){
        case 'small' :
            return {
                320:{
                    slidesPerView:1,
                },
                640: {
                    slidesPerView:2,
                },
                990 :{
                    slidesPerView:3,
                },
                1280 :{
                    slidesPerView:3,
                },
                1440 :{
                    slidesPerView:4,
                }
            };
        case 'normal' :
            return {
                320:{
                    slidesPerView:1,
                },
                640: {
                    slidesPerView:2,
                },
                1280 :{
                    slidesPerView:2,
                },
                1440 :{
                    slidesPerView:3,
                }
            };
        case 'big' :
            return {
                320:{
                    slidesPerView:1,
                },
                640: {
                    slidesPerView:1,
                },
                1280 :{
                    slidesPerView:2,
                },
                1440 :{
                    slidesPerView:2,
                }
            };
        case 'mega' :
            return {
                320:{
                    slidesPerView:1,
                },
                640: {
                    slidesPerView:1,
                },
                1280 :{
                    slidesPerView:1,
                },
                1440 :{
                    slidesPerView:1,
                }
            };
        default :
            return {
                320:{
                    slidesPerView:1,
                },
                640: {
                    slidesPerView:2,
                },
                1280 :{
                    slidesPerView:3,
                },
                1440 :{
                    slidesPerView:4,
                }
            };
    }
})
const autoplay = {
    delay: 2000,
    pauseOnMouseEnter: true
}


</script>

<style lang="scss" scoped>
.swiperContainer{
    overflow: visible;
    padding-block: 24px;
    background-color: rgba(20, 38, 54, 0.04);
    width: 100vw;
    z-index: 2;
    backdrop-filter: blur(20px);
}
.swiper{
    width:100%;
    overflow: visible;

    .slide{
        width: 320px;
        perspective: 1000px;
    }
}
</style>