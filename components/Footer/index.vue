<template>
    <div class="footerContainer">
        <div class="innerGrid">
            <div v-for="item in footerMenu" class="column">
                <h3>{{item.label}}</h3>
                <ul>
                    <li v-for="child in item.child" >{{ child.label }}</li>
                </ul>
            </div>
            <div class="column">
                <h3>Contact Us</h3>
                <FooterContact />
            </div>
        </div>
        <div class="underFooter innerGrid">
            <Logo class="underFooter__logo" />
            <div class="underFooter__right">
                <span>Copyright @ Doc-pal</span>
                <nuxt-link>Privacy Policy</nuxt-link>
                <nuxt-link>Cookie Policy</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const {footerMenu} = useMenu()

</script>

<style lang="scss" scoped>
.footerContainer{
    padding: 24px 0;
    border-top: 1px solid #eee; 
    scroll-snap-align: start end;
    background: rgba(252, 252, 250, 0.2);
    position: relative;
    z-index: 2;
    backdrop-filter: blur(20px);
}
ul {
    list-style: none;
    padding: 0;
    li{
        line-height: 2;
    }
}

.innerGrid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media( max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media( max-width: 640px) {
        grid-template-columns: 1fr;
    }
}
.underFooter{
    padding-top: 12px;
    border-top:1px solid #eee;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    &__logo{
        height: 20px;
    }
    &__right{
        display: grid;
        grid-template-columns: min-content min-content min-content;
        gap: 12px;
        white-space: nowrap;
    }
}

.column{
    font-size: 0.8rem;
}
</style>
