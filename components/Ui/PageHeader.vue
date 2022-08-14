<template>
    <div class="pageHeaderContainer">
        <div class="innerGrid">
            <div class="title">{{ title }}</div>
        </div>
    </div>
</template>


<script lang="ts" setup>

defineProps<{
    title: string
}>()
</script>

<style lang="scss">
.pageHeaderContainer {
    padding-block: 48px;
    width:100vw;
    overflow: visible;
    .title{
        font-size: clamp(3rem, -0.875rem + 8.333vw, 5rem);
        font-weight: 900;
         background: -webkit-linear-gradient(45deg, var(--primary-color), #0094f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .bgImg{
        position: fixed;
        top:0;
        left: 0;
        width: 100vw;
        z-index: -1;
    }
}
</style>