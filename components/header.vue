<template>
    <div class="headerContainer">
        <div class="innerGrid">
            <Logo class="logo" @click="$router.push({path:'/'})"/>
            <Client-only>
                <Menu />
            </Client-only>
            <ContactSalesBtn />
        </div>
    </div>
</template>

<script lang="ts" setup>import { MenuItem } from '~~/models/menu';
</script>

<style lang="scss" scoped>
.headerContainer{
    --grid-margin: 12px;
    width: 100vw;
    height: var(--header-height);
    background: var(--page-bg);
    display: grid;
    place-items: center;
    box-shadow: 0 2px 60px rgba(85,173,255, .42);
    gap: 24px;
    scroll-snap-align: start end;
    position: relative;
    z-index: 2;
    
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 50px;
        left:0;
        bottom: -50px;
        background-image: linear-gradient(180deg, var(--primary-color-50), var(--primary-color-00));
    }
}
.logo{
    height: 38px;
}
.innerGrid{
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    justify-content: flex-start;
    align-items: center;
}
</style>
