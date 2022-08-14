<template>
    <div class="pageContainer">
        <UiPageHeader :title="data.title" />
        <UiPage v-if="data && data.page" :page="data.page" />
    </div>
</template>

<script lang="ts" setup>
import { PageContent } from '~~/models';
    const { findOne } = useStrapi3()
    const route = useRoute()
    const router = useRouter()
    const { data, pending, refresh, error } = await useAsyncData('pageContent', () => findOne<PageContent>('pages', route.params.slug as string));
    if(error.value ){
        router.replace({path:'error/404'})
    }
    useHead({
        title: data.value.title,
        meta:[
            {
                hid:'description',
                name:"description",
                content: data.value.description
            }
        ]
    })

</script>

<style lang="scss" scoped>
.columns{
    // width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px){
        grid-template-columns: 1fr;
    }
}
.pageContainer {
    background-image: url('/images/page_bg.png');
    background-position:center top ;
    background-size: contain;
    background-repeat: no-repeat;
}
.pageHeader{
    width: min(100%, 1600px);
    margin-inline: auto;
    
    &__title{
        font-size: clamp(3rem, -0.875rem + 8.333vw, 5rem);
        color: var(--primary-color);
        float: var(--float);
    }
    &__img{
        width:100%;
        margin-top: calc( clamp(3rem, -0.875rem + 8.333vw, 5rem) * -0.8);
    }
}

.otherPage{
    border-top: 1px solid #eee;
    position: relative;
    height: 85px;
    &__span{
        font-size: 0.8rem;
    }
    &__title{
        color: var(--primary-color);
        font-weight: 900;
    }
    &__back{
        position: absolute;
        left:0;
        top:24px;
    }
    &__next{
        position: absolute;
        right: 0;
        top: 24px;
    }
    svg{
        height: 0.8rem;
        width: 0.8rem
    }
}
</style>
