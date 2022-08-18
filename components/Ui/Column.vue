<template>
    <div class="column" :style="`--col-span:${span}`">
        <h3 v-if="title" class="column__title">{{ title }}</h3>
        <div class="htmlContent" v-html="mdContent" />
    </div>
</template>

<script lang="ts" setup>
    import MarkdownIt from 'markdown-it';
    const mdContent = ref('');
    const props = defineProps<{
        title: string,
        content: string,
        span:number
    }>()
    const {content} = toRefs(props);
    watch( content, (newContent) => {
        if(newContent){
            const md = new MarkdownIt();
            mdContent.value = md.render(newContent);
        }
    },{
        immediate:true
    })
</script>

<style lang="scss" scoped>
.column{
    padding: 24px;
    background-color: var(--column-bg);
    border-radius: 12px;
    transition: background .2s ease-in-out;
    z-index: 2;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    @media (max-width: 1024px){
        grid-column: initial;
    }
    &__title{
        color: var(--primary-color-50);
        font-size: clamp(1rem, -0.875rem + 8.333vw, 1.2rem);
        margin-bottom: 12px;
    }
    &__content{
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
    
}
.htmlContent{
    color: var(--text-color)
}
</style>
