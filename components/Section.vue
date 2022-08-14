<template>
    <div class="section">
        <div class="innerGrid">
            <slot />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.section{
    width:100%;
    background: var(--background);
    scroll-snap-align: start end;;
}
</style>
