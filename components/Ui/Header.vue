<template>
    <div class="videoWall">
        <div class="video">
            <video  :src="config.STRAPI_URL + bgUrl" autoplay muted loop data-sampler="uTexture"/>
        </div>
        <div class="innerGrid">
            <div class="gridSection">
                <h3 class="gridSection--subtitle">{{data.title}}</h3>
                <h1 class="gridSection--title">{{ data.subtitle }}</h1>
                <div class="action">
                    <ElButton type="primary" @click="goContact">{{data.buttonA}}</ElButton>
                    <ElButton type="primary" @click="goContact">{{data.buttonB}}</ElButton>
                </div>
            </div>
            <div class="gridSection">
                <img class="gridSection--video" :src="config.STRAPI_URL + data.thumbnail.url" />
            </div>
        </div>
    </div>  
</template>

<script lang="ts" setup>
import { PageComponent } from '~~/models';
import { ElButton } from 'element-plus'
import CurtainsView from './CurtainsView.vue';
const config = useRuntimeConfig()
const colorMode = useColorMode()
const props = defineProps<{
    data: PageComponent
}>()

const bgUrl = computed( () =>  colorMode.value === 'light' ? props.data.bg.url : props.data.darkBg.url );
function goContact() {
    const ev = new CustomEvent('open-contact');
    window.dispatchEvent(ev);
}
</script>


<style lang="scss" scoped>
$gridBreakpoint: 1700px + 48px;
.videoWall{
    --main-grid: 1700px;
    overflow: hidden;
    transform: scale(1);
    scroll-snap-align: start end;
    width: 100%;
    position: relative;
    z-index: 2;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        height: 30%;
        background-image: linear-gradient(0deg, var(--page-bg), rgba(0,0,0,0));
        background-repeat: no-repeat;
        background-position: cover;
        z-index: -1;
    }
    @media(max-width: $gridBreakpoint ){
      padding: 0 var(--grid-margin);
    }
}
.video{
    height:100vh;
    width: 100vw;
    position: fixed;
    top:0;
    left:0;
    z-index: -1;
    display: grid;
    place-items: center;
    video{
        margin: 0 auto;
        min-width: 100%;
        min-height: 100%;
        // width: 100%;
    }
    
}
.innerGrid{
    height: calc(100vh - var(--header-height) );
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 12px;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
}
.gridSection{
    display: flex;
    flex-flow: column nowrap;
    gap: 12px;
    justify-content: center;
    align-items: flex-start;
    perspective: 1350px;
    line-height: 1.1;
    position: relative;
    &--subtitle{
        color: #fff;
        font-size: 1.2rem;
        font-weight: 300;
    }
    &--title{
        color: #fff;
        font-size: clamp(2em, -0.875rem + 8.333vw, 3rem);
        // font-size: 3rem;
    }
    &--video{
        animation-name: swing;
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        width:100%;
    }
}





</style>
