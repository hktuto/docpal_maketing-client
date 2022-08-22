<template>
   <ElButton type="primary" @click="btnClick">Contact Sales</ElButton>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'

function btnClick() {
    const ev = new CustomEvent('open-contact');
    window.dispatchEvent(ev);
}
</script>

<style lang="scss" scoped>

.btn{
    background: var(--primary-color);
    color: #fff;
    border-radius: 4px;
    padding:  10px 30px;
    // white-space: nowrap;
}
</style>