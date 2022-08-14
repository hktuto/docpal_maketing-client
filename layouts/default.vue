<template>
    <div class="pageContainer">
        <Header />  
        <slot />
        <Footer />
        <floating-icon />
    </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
// wired fixed
colorMode.preference = 'system';

</script>

<style lang="scss" scoped>
.pageContainer{
    background: var(--page-bg);
    isolation: isolate;
}
</style>