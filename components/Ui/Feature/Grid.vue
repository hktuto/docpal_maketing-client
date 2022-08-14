<template>
    <div class="content__grid">
        <UiFeatureCard v-for="feature in data.card" :key="data.id" :card="feature" />
    </div>
</template>


<script lang="ts" setup>
import { PageComponent } from '~~/models';


defineProps<{
    data: PageComponent
}>();
</script>