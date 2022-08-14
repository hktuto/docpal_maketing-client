<template>
  <div class="page">
    <UiPage v-if="page" :page="page.page" />
  </div>
  
</template>

<script lang="ts" setup>
import { PageContent } from '~~/models';
const { findOne } = useStrapi3()
const { data:page, pending, refresh, error } = await useAsyncData('homeContent', () => findOne<PageContent>('pages', 'home'));
useHead({
    title: page.value.title,
    meta:[
            {
                hid:'description',
                name:"description",
                content: page.value.description
            }
        ]
  })


</script>